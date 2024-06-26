---
title: 'Working with PyNWB'
excerpt: 'Some ideas for converting to NWB with PyNWB'
date: 2022-05-20
path: /neuroscience/pynwb/
image: ../../images/NWBlogo.png
categories: [articles]
tags: [python, coding, neuroscience]
toc: true
comments: true
comments_locked: false
last_modified_at: 2022-05-20T12:21:03
hide_meta: false
featured: true
---

Ideas for working with pynwb. Installation with ```pip install pynwb```.

## Overall ideas

- Each experimental session is a separate NWB file.
- Generally use keyword arguments for calling NWB functions and creating NWB objects.
- Data and metadata are stored together.
- Create an nwbfile with high level metadata such as lab and session_start_date.

## File structure

Credit to NWB for the below image

![overview](../images/../../images/nwb_overview.png)

## File Heirarchy

### Acquisition

Raw data that should never change. For example, the raw voltage information.
To add raw data to a file, do:

```Python
# Create a Timeseries object or table of info etc.
nwbfile.add_acquisition(time_series : Union[NWBDataInterface, DynamicTable])
```

### Processing

Processed data, could change, the results of preprocessing algorithms.
Oranised into ProcessingModule containers that can have the following names:

- ecephys (extracellular ephys)
- icephys (intracellular ephys)
- ophys (optical phys)
- behavior

To add processing to a file, do:

```Python
nwbfile.create_processing_module(name=name)
```

It is possible to add custom named processing modules also.

### Analysis

Results of data analysis. A similar idea is to add scratch space to the NWB file. To add analysis to a file, do:

```Python
nwbfile.add_analysis(analysis: Union[list, tuple, dict, table])

# Or to add the scratch space
copy_nwb = nwb.copy() # Optional copy step
copy_nwb.add_scratch(data, name, description)
```

### Stimuli

Images, videos, etc. presented as stimuli during the experiment. The easiest way to set this up is as follows

```Python
# A template for each type of stimulus
nwbfile.add_stimulus_template(stimulus_template: Union[ImageSeries, VideoSeries])
# Index the templates via IndexSeries
nwbfile.add_stimulus(index: IndexSeries)
```

## Basic types

Most data objects support a name and a description parameter.
This name came be used to grab data from the nwbfile.

### TimeSeries

The base for many data types. Must contain:

- data : an array where the first dimension is time. Can be N-dimensional.
- timestamps / OR sampling_rate, starting_time : defines how the first dimension of the data relates to actual time.

See [Time series schema](https://nwb-schema.readthedocs.io/en/latest/format.html#timeseries) for attributes and subtypes.

### DynamicTable

Stores tabular data - column based tables which can have custom columns.

See [DynamicTable schema](https://hdmf-common-schema.readthedocs.io/en/stable/format.html#sec-dynamictable).

## How to add to nwbfiles

For most data types, the nwbfile directly has an `nwbfile.add_****` method.
For many data types, the nwbfile also has an `nwbfile.create_****` method. This both creates and adds a data object.
In addition, the data can be obtained via `nwbfile.get_****`.
For example, to add LFP:

```Python
# Create a device to desribe what was recorded from
# Device can be referenced later, or obtained with
# nwbfile.get_device(device_name)
device = nwbfile.create_device(name=device_name, description="")

# Add extra information to the electrode dataset about the label
nwbfile.add_electrode_column(name="label", description="electrode label")

# For each set of electrodes, add a group
nwbfile.create_electrode_group(
    name=name, device=device, location=location, description=description)

# For each electrode, add it and link it to a created group
nwbfile.add_electrode(group=nwbfile.get_electrode_group(name))

# For each electrode, create an electricalSeries and pass it to LFP
e_series = ElectricalSeries(data=lfp_data, ...)
lfp = LFP(electrical_series=e_series)

# Create the ecephys module and add the LFP to it
ecephys_module = nwbfile.create_processing_module(name="ecephys", description="")
ecephys_module.add(lfp)

```

## Accessing NWB files

Generally, data is accessed by:

```Python
# Step 0 - imports
from pynwb import NWBHDF5IO
io = NWBHDF5IO(filename, "r", manager=manager)
nwbfile = io.read()

item = nwbfile.NAME_OF_MODULE["NAME_OF_H1"]["NAME_OF_H2"]...
data = item.data[:] # Usually transpose this with .T so that it is time x whatever
# Or if item is a table
df = item.to_dataframe()

io.close()
```

## Adding analysis to NWB files

The easiest way to do this is to copy the original file, and then add analysis or scratch data to it.
The advantage of scratch data is that it can take any format, while analysis data must be an NWB type.
The simplest NWB type to add is a table:

```Python
# Step 0. imports
from hdmf.common import DynamicTable

# Step 1. Optionally describe the columns in the table, like so
def describe_columns():
    return [
        {"name": "label", "type": str, "doc": "label of electrode"},
        {"name": "region", "type": str, "doc": "brain region of electrode"},
        {"name": "frequency", "type": np.ndarray, "doc": "frequency values"},
        {"name": "power", "type": np.ndarray, "doc": "power values in dB"},
        {"name": "max_psd", "type": float, "doc": "maximum power value (uV)"},
    ]

# Step 2. Convert df
hd_tab = DynamicTable.from_dataframe(
    df=df, name=name, columns=describe_columns()
)

# Step 3. add to module
mod = nwb.create_processing_module(name, description)
mod.add(hd_tab)
```

To correctly write these files out, open the original file and new file as follows

```Python
from pynwb import NWBHDF5IO
nwb_io = NWBHDF5IO(filename, "r")
nwbfile = nwb_io.read()
manager = nwb_io.manager
copy_file = nwbfile.copy()

### Add whatever to copy_file

io_out = NWBHDF5IO(output_filename, "w", manager=manager)
nwb_out.write(copy_file)

io_out.write(nwb_out)
```

## Compressing stored data

This only works for time series style data. Do as follows:

```Python
from hdmf.backends.hdf5.h5_utils import H5DataIO
data : np.array = np.zeros(shape)
compressed_data = H5DataIO(data=data, compression="gzip", compression_opts=4)
nwb_ts = TimeSeries(data=compressed_data, ...)

```

## Validating NWB files

[Simple usage](https://pynwb.readthedocs.io/en/stable/validation.html#validating):

```Bash
python -m pynwb.validate FILENAME.nwb
```

[Best practices](https://nwbinspector.readthedocs.io/en/dev/):

```Bash
pip install nwbinspector
nwbinspector path-to-nwbfile-or-directory-with-nwbfiles --overwrite --report-file-path log-file-location --n-jobs -1
```

## Viewing NWB files

A simple way to view a NWB file is using [hdfview](https://www.hdfgroup.org/downloads/hdfview/), since pynwb uses hdf5 as a backend file storage.

A better way is to use the [NWB explorer](https://github.com/MetaCell/nwb-explorer) created by Metacell and UCL.
The easiest way to use this is with docker by pulling the latest container from [google container](https://gcr.io/metacellllc/nwb-explorer).

Another way to view is by using the [NWBwidgets](https://github.com/NeurodataWithoutBorders/nwb-jupyter-widgets) which is a Jupyter notebook feature.

## Further reading

- [Overview read the docs](https://nwb-overview.readthedocs.io/) - Good introduction.
- [NWB read the docs](https://pynwb.readthedocs.io/) - API docs and developer documentation.
- [NWB schema](https://nwb-schema.readthedocs.io/en/latest/) - Great description of data types and attributes.
- [Automated conversion](https://nwb-conversion-tools.readthedocs.io/en/main/) - NWB conversion tools.
- [Converting Axona data to NWB](https://github.com/seankmartin/atn-sub-lfp-workflow/blob/main/workflow/scripts/convert_to_nwb.py)