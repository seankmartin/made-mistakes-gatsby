---
title: 'Notes on LFP.'
excerpt: 'LFP Processing and Analysis.'
date: 2020-05-29
path: /neuroscience/lfp/
image: ../../images/python_regius.jpg
categories: [articles]
tags: [neuroscience]
toc: true
comments: false
comments_locked: false
last_modified_at: 2020-05-29T15:52:14
hide_meta: false
featured: false
published: false
---

## Python toolboxes

1. NeuroChaT - Simple to use LFP analysis
2. MNE - More complete Signal Processing Toolbox
3. Neurotic - Compare LFP with video
4. PyCWT - Perform Matlab style CWT in Python. Can also use the matlab CWT inside of Python but lacks customisation.

## Artefact Detection

I would suggest checking MNEs article on [Artefact detection](https://mne.tools/dev/auto_tutorials/preprocessing/plot_10_preprocessing_overview.html).

The easiest thing to use to repair these artefacts is probably ICA ([MNE](https://mne.tools/dev/auto_tutorials/preprocessing/plot_40_artifact_correction_ica.html#tut-artifact-ica) or [Mike Cohen](https://www.youtube.com/watch?v=AKCK7DXa0gY&t=664s)).
For LFP data a good idea can be to use artificial co-ordinates to visualise where the components arise from.
Similarly, you could use these to identify if the component appears all across the region, or on particular tetrodes.

## Connectivity

Connectivity described at [Mike Cohen](http://mikexcohen.com/lectures.html) and also in his most recent book.
I have not gotten to look at this yet fully, but I imagine it is Coherence, Wavelet Coherence, Granger Causality, Transfer Entropy, and Perhaps Boccala's Directed Coherence (Freq GC).
