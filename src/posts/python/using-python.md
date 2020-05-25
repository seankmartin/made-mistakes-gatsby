---
title: "Getting your python code ready for the world"
excerpt: "A lengthy article on how to clean up your python code and show it to the world."
date: 2020-05-22
path: /python/getting_your_code_out_there/
image: ../../images/python_regius.jpg
categories: [articles]
tags: [python, coding]
toc: true
comments: true
comments_locked: false
last_modified_at: 2020-05-22T15:52:14
hide_meta: false
featured: true
---

So you've made some shiny Python code that does something great, and you want to share it with the world?
It's a situation I've commonly felt myself in for sure, but I've never really known the process to having code adhering to the PEP guidelines, a package on PyPI, documentation on read the docs etc.

If you are trying to do something similar, read on to find some tips on how to achieve this!

There are many guides out there for this kind of thing, but, especially in the research domain, [The Software Sustainability Institute](https://www.software.ac.uk/) has a really extensive free checklist for evaluating the sustainability of your software.
In this article we will tackle many of these topics (TODO - will we, or is this just a nice link?).

An example repository using all of these features is available on my GitHub at [PythonTemplate](https://github.com/seankmartin/PythonTemplate)

## Formatting and linting
Firstly, I highly recommend regularly running formatting on your code, preferably before you commit anything.
Running a format on your code will remove trivial errors in your code, such as forgetting spaces between the + operator.
Overall, using a format will result in cleaner more readable code that will be much easier for other developers to work with.
Ideally, you should provide details of the formatter you use and any parameters passed on your online code repository so that other contributors can keep in the same coding style as your overall repository.
There is one caveat to all of this!
If you are formatting your code for the first time, format all the code and do a formatting commit.
It is very important that you don't commit code behaviour changes in the same batch as formatting commits - it will make the behaviour changes very hard to spot!
This is especially important if you are contributing to another open source repository.


In Python, there are many great options available, such as autopep8, black, and YAPF.
I usually go with autopep8, since it is quite simple and just aims for conformance with the PEP 8 style guide.
However, black and YAPF may produce nicer results if you are willing to hand over a bit more control to these tools.
Let's go with black for now!

In case you haven't heard the term, *linting* means running a tool on your code to check for basic quality adherence.
For example, linting can pick up import statements that are never used, lines that are too long, or snytax errors - in general things you don't want to leave lying around!


To perform linting in Python, there are many good options, such as flake8, pylint, bandit, and many more - but lets go with flake8 since it has a low false positive rate.


Finally, I suggest running pydocstyle and docformatter to get your docstrings in check!

The general format is like this, shown here for yapf and flake8, with docformatter, and pydocstyle. Usually `-r` indicates recursive, `-i` indicates in place, and any of these can be run with the `-h` flag to get more information. Furthermore, most of these can be integrated into a code editor.

```bash
python -m pip install yapf flake8 docformatter pydocstyle
export my_code_file_or_directory=var
python -m autopep8 $my_code_file_or_directory -r -i
python -m docformatter $my_code_file_or_directory -r -i --blank --pre-summary-newline
python -m flake8 $my_code_file_or_directory
python -m pydocstyle $my_code_file_or_directory
```

For example, this code does not look great:
```Python
"""Let's all write some really ugly python. We can start off with a line that is just way too long."""

import numpy as np
import matplotlib.pyplot as plt
from math import ceil, floor
from pprint import pformat

def main(              ):
	"""This calculates some mad stuff.

	Parameters
	----------
	None

	Returns
	-------
	tuple (list, int)
	"""
	foo = [((1+2 * 25) * i, 100) for i in range(0, 20) if i%2==0] # Here is a helpful message to explain this madness
	bar = ceil( foo[3][  0]* 2)
	return sorted(foo, key=lambda x: x[0] % x[1]), bar * bar + 10

if __name__ == "__main__":
	# If invoked as the main file, will call main()
	result = main()
	print("{}\nthe output from the main was long, but there it is!".format(pformat(result)))
	user_inp = input("Would you like to see just how great that was again? (y/n)\n")
	if user_inp=="":
		print("Empty input, goodbye then!")
	elif user_inp.lower()=="y":
		print(    "Too bad, good things only come once.")
	elif user_inp.lower()=="n":
		print("Oh right, very well :(")
	else:
		print("Sorry I didn\'t get {}, leaving!".format(user_inp))
```
Lets run formatting and linting!
After running yapf and docformatter, the output is:
```Python{numberLines: true}
"""
Let's all write some really ugly python.

We can start off with a line that is just way too long.

"""

import numpy as np
import matplotlib.pyplot as plt
from math import ceil, floor
from pprint import pformat


def main():
    """
    This calculates some mad stuff.

    Parameters
    ----------
    None

    Returns
    -------
    tuple (list, int)

    """
    foo = [((1 + 2 * 25) * i, 100) for i in range(0, 20)
           if i % 2 == 0]  # Here is a helpful message to explain this madness
    bar = ceil(foo[3][0] * 2)
    return sorted(foo, key=lambda x: x[0] % x[1]), bar * bar + 10


if __name__ == "__main__":
    # If invoked as the main file, will call main()
    result = main()
    print("{}\nthe output from the main was long, but there it is!".format(
        pformat(result)))
    user_inp = input(
        "Would you like to see just how great that was again? (y/n)\n")
    if user_inp == "":
        print("Empty input, goodbye then!")
    elif user_inp.lower() == "y":
        print("Too bad, good things only come once.")
    elif user_inp.lower() == "n":
        print("Oh right, very well :(")
    else:
        print("Sorry I didn't get {}, leaving!".format(user_inp))

```

Running linting and doc checking gives the following output
```bash
➜  Temp python3 -m flake8 my_code
my_code/ugly_python.py:8:1: F401 'numpy as np' imported but unused
my_code/ugly_python.py:9:1: F401 'matplotlib.pyplot as plt' imported but unused
my_code/ugly_python.py:10:1: F401 'math.floor' imported but unused
➜  Temp python3 -m pydocstyle my_code
my_code/ugly_python.py:15 in public function `main`:
        D401: First line should be in imperative mood; try rephrasing (found 'This')
```

## Testing
Here describe pytest (or otherwise) basically.


## Continuous integration
Here describe circleCI and maybe github hooks.

## Creating a simple website
I will later describe the process of creating a Read the Docs website.
However, I'd like to point out a simpler alternative to hosting your python project API by using [pdoc3](https://pdoc3.github.io/pdoc/) and GitHub pages.
This is very simple and requires minimal effort.
1. Install pdoc `python -m pip install pdoc3`.
2. Open the main directory of your python project in a terminal.
3. Create a branch called gh-pages and checkout that branch `git checkout -b gh-pages`.
3. Create your html docs `pdoc3 your_package --html --o docs`.
4. Add the file `index.html` from [PythonTemplate](https://github.com/seankmartin/PythonTemplate/blob/gh-pages/index.html) to the main directory of your project on the gh-pages branch. Replace `your_package` with your package name.
4. Commit the resulting files to git and push the changes to GitHub `git add -A && git commit -m "Built docs for first time" && git push --set-upstream origin gh-pages`.
5. Open your GitHub repository, go to settings -> GitHub Pages section and set the source option to gh-pages branch if GitHub has not automatically picked this up.
6. You should end up with something like [this](https://seankmartin.github.io/PythonTemplate).

Overall this method is a very simple way of automatically turning your docstrings into a documentation website, but it does lack flexibility, and that is where Sphinx comes in.

## Creating Documentation using Sphinx
Firstly, you will need to create your documentation, which we will use [Sphinx](https://www.sphinx-doc.org/en/master/) for.
1. Install Sphinx `python -m pip install Sphinx`.
2. Open the main directory of your python project in a terminal.
3. Make a folder called docs and move to that directory.
4. In the docs folder, run `sphinx-quickstart`. Name your package as appropriate, and setup as required. Be sure to select `y` for the auto documentation setting. If you forget to enable autodoc, you must add `sphinx.ext.autodoc` to the Sphinx config file.
5. Open the Sphinx config file `docs/conf.py`.
6. Under the Path Setup section of the config file, add the following code
```Python
import os
import sys
curdir = os.path.dirname(__file__)
package_location = os.path.abspath(
    os.path.join(curdir, '../'))
sys.path.append(package_location)
```
7. I'm going to assume you are not using RST docstrings, which is what Sphinx supports by default. So, add `'sphinx.ext.napoleon'` to the extensions list in the Sphinx config file. Using the [napoleon extension](https://www.sphinx-doc.org/en/master/usage/extensions/napoleon.html), you can pull documentation from docstrings that follow the NumPy or Google conventions.
8. Update the napoleon configuration following [official docs](https://www.sphinx-doc.org/en/master/usage/extensions/napoleon.html#configuration).
9. Now use [sphinx-apidoc](https://www.sphinx-doc.org/en/master/man/sphinx-apidoc.html) to directly generate a set of documentation very similar to how pdoc3 or another automatic API documentation tool works. You can run `sphinx-apidoc -e -f -o reference ../your_package`. However, we will set this up inside the Sphinx config file instead using `sphinx-apidoc`.
10. Install apidoc `python -m pip install sphinxcontrib-apidoc` 
10. Add the following to the Sphinx config file. 
```Python
extensions = [
    'sphinxcontrib.apidoc',
    # ...
]
apidoc_module_dir = '../your_package'
apidoc_output_dir = 'reference'
apidoc_excluded_paths = ['tests']
apidoc_separate_modules = True
```
11. Choose a theme of your liking, setting the Sphinx config, for example `html_theme = 'sphinx_rtd_theme'` (this theme requires installation `python -m pip install sphinx_rtd_theme`)
11. The next step is optional, and is only needed if you want to include your README on Read the Docs and that README is in Markdown format. Install m2r if your README file is not in RST format `python -m pip install m2r`. If using Sphinx version lower than 3.0.0 simply add `m2r` to your extensions list. Otherwise, (at least until m2r is updated) add the following to the Sphinx config file from [life4.deal-7f33cbc5](https://github.com/life4/deal/commit/7f33cbc595ed31519cefdfaaf6f415dada5acd94)

```Python
from m2r import MdInclude

def setup(app):
    # from m2r to make `mdinclude` work
    app.add_config_value('no_underscore_emphasis', False, 'env')
    app.add_config_value('m2r_parse_relative_links', False, 'env')
    app.add_config_value('m2r_anonymous_references', False, 'env')
    app.add_config_value('m2r_disable_inline_math', False, 'env')
    app.add_directive('mdinclude', MdInclude)
```

11. Optionally include your README file in the index. First create a readme.rst file in docs, containing the following (choose include based on your file type):
```rest
README
===========
.. mdinclude:: ../README.md
.. include:: ../README.rst
```
11. Modify the table of contents tree in`index.rst` to contain `readme.rst` (if last step completed) and `reference/modules.rst`
```rest
.. toctree::
    :maxdepth: 2

    readme
    reference/modules
```
11. Run `make html` to generate your docs to `docs\_build\html`.
12. Open `docs\_build\html\index.html` in a web browser, and rejoice!

Some extra notes on using Sphinx.
* The format for inserting links to other items in a Sphinx-built page is:
`.. reference_type:: reference_location` 
For example, to link to automatically generated module documentation, `reference_type` should be replaced by `automodule` and `reference_location` should be the name  of the module linked to. See more at [Sphinx domains](https://www.sphinx-doc.org/en/master/usage/restructuredtext/domains.html#cross-referencing-python-objects) and [Autodoc](https://www.sphinx-doc.org/en/master/usage/extensions/autodoc.html#module-sphinx.ext.autodoc).
* An alternative to the autodoc system using apidoc is to use the [autosummary](https://www.sphinx-doc.org/en/master/usage/extensions/autosummary.html) extension, which creates a page for each function or class in a table. For very large codebases, this is likely preferable.

## Creating a Read the Docs website using Sphinx documentation
A small bit of setup is required in your online repository. We need to create a [Read the docs config file](https://docs.readthedocs.io/en/stable/config-file/v2.html). Most likely you can just add the `.readthedocs.yml` and `docs\requirements.txt` from [PythonTemplate](https://github.com/seankmartin/PythonTemplate) to your project if you have been following this guide. You may need to add extra doc building requirements to `docs\requirements.txt`, such as the commonly used [recommonmark](https://recommonmark.readthedocs.io/en/latest/index.html).

1. Create an account on [Read the Docs](https://readthedocs.org/).
2. Import your github repository on your Read the Docs profile.
3. Hopefully your project builds correctly on Read the Docs. If not, check out the build log, most likely there is just a package you used not included in `docs\requirements.txt` or a setting is incorrect in `.readthedocs.yml`
4. Optional step, set up a webhook following the [RTD docs](https://docs.readthedocs.io/en/stable/webhooks.html) so that your RTD is rebuilt on file change.

After all that hard work, you should have something like my [PythonTemplate Read the Docs](https://pythontemplate.readthedocs.io/en/latest/index.html) - though hopefully your real project is a bit prettier.

## Uploading your package to PyPI
Your code is pretty, your code has tests, and your code has documentation, what next?

You will need to have a `setup.py` file and a `setup.cfg` file.
It is also recommended to have a `README.md` or `README.rst` file and a `LICENSE` file.
Examples of all these are available on my github TODO provide link to my template python.


To upload to PyPI, make an account on PyPI, and then follow these steps:
```shell
python -m pip install --upgrade setuptools
python -m pip install --upgrade twine
rm -rf dist
python setup.py sdist
twine check dist/*
twine upload dist/* -u USERNAME -p  PASSWORD --verbose
```

## Building an executable
So, your code has a GUI and you want to provide an executable - read on!
Two main options, using TODO check its name, think it is pybuild or something, have the name around.
The other one is to use the fbs build system, which is actually very nice.

## Further reading
1. [A more in depth guide to flake8](https://medium.com/python-pandemonium/what-is-flake8-and-why-we-should-use-it-b89bd78073f2)
2. [A more in depth guide to PyPI packaging](https://medium.com/@joel.barmettler/how-to-upload-your-python-package-to-pypi-65edc5fe9c56)
3. [An idiots guide to Sphinx documentation](https://samnicholls.net/2016/06/15/how-to-sphinx-readthedocs/#disqus_thread)
4. [The actual Sphinx guide instead of this garbage](https://www.sphinx-doc.org/en/master/usage/quickstart.html)