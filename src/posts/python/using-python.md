---
title: 'Getting your python code ready for the world'
excerpt: 'A lengthy article on how to clean up your python code and show it to the world.'
date: 2020-05-22
path: /python/getting_your_code_out_there/
image: ../../images/python_regius.jpg
categories: [articles]
tags: [python, coding]
toc: true
comments: true
comments_locked: false
last_modified_at: 2020-06-11T17:45:14
hide_meta: false
featured: true
---

I will describe how to style Python code adhering to the PEP guidelines, upload a package on PyPI, and host documentation on Read the Docs or GitHub pages.
An example repository using these features is available on my GitHub at [PythonTemplate](https://github.com/seankmartin/PythonTemplate).

Following the steps in this article will greatly boost the sustainability of your software.
[The Software Sustainability Institute](https://www.software.ac.uk/) has a free checklist for evaluating the sustainability of your software to compare against.

## Formatting and Linting

### Why use a formatter?

Running a formatter on your code will remove bad style in your code, such as forgetting spaces between the addition operator, and will enforce a consistent style.
This will result in cleaner, more readable code that is easier to work with.
Ideally, you should provide details of the formatter used and any parameters passed to the formatter on your online code repository so that other contributors can keep in the same coding style.

It's important not to commit code behaviour changes in the same commit as large formatting changes as it will make the behaviour changes hard to spot.
This is crucial if you are contributing to another open source repository.

### What about git blame?

The [git blame command](https://git-scm.com/docs/git-blame) shows what author modified each line of a file and when - but since formatting changes a lot of lines, that would be a problem.
If you have never run formatting before on your code in git, it's possible to inform git not to include an initial formatting commit in blame.
There's a guide on this on the [README for black](https://github.com/psf/black#migrating-your-code-style-without-ruining-git-blame), but here is a condensed version:

1. Format all the code and make one massive commit with all the changes.
2. Add the full 40 character commit ID to a file called `.git-blame-ignore-revs`. This full hash can be obtained with the command `git log -1 --format="%H"`.

   ```text
   # Formatted code
   FULL-GIT-COMMIT-HASH
   ```

3. Either pass a flag to git blame, or configure git to automatically do this.

   ```shell
   git blame filename --ignore-revs-file .git-blame-ignore-revs
   git config blame.ignoreRevsFile .git-blame-ignore-revs
   ```

### Which formatter to use?

In Python, there are great options available, such as [Autopep8](https://github.com/hhatto/autopep8), [Black](https://github.com/psf/black), and [YAPF](https://github.com/google/yapf).
Here are my thoughts on these:

- Autopep8 is minimal, and only checks for PEP 8 adherence. It's good if you want most of the control over the style and small formatting help.
- YAPF and Black are more aggressive formatters as they take away some of the drudgery of maintaining code, but change the appearance significantly. They are good if you are willing to release some control over the code style.

Regardless of your choice, a good formatter should produce an [Abstract Syntax Tree](https://docs.python.org/3/library/ast.html) on the formatted code that is equivalent to the original. I also suggest running pydocstyle and docformatter to get your docstrings in check.

### Linting

_linting_ means running a tool on your code to check for basic quality adherence.
For example, linting can pick up import statements that are never used, lines that are too long, or syntax errors.

To perform linting in Python, there are good options, such as [Flake8](https://github.com/PyCQA/flake8), [Pylint](https://github.com/PyCQA/pylint), [Bandit](https://github.com/PyCQA/bandit).
Bandit is a little different since it is aimed towards security issues.
I recommend using flake8 since it has a low false positive rate.

### Running the tools

The way these tools work is similar, so an example is shown below for autopep8 and flake8, with docformatter and pydocstyle.
Usually `-r` indicates recursive, `-i` indicates in place, and any of these tools can be run with the `-h` flag to get more information.
Furthermore, most of these tools can be integrated into your favourite code editor.

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

Then, running flake8 and pydocstyle gives the following output:

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

Here describe circleCI and maybe github hooks. Or perhaps Travis-CI is easier.

## Hosting Documentation

### Creating a simple website on GitHub Pages with pdoc3

I will describe the process of creating a Read the Docs website.
However, I'd like to point out a simpler alternative to hosting your python project API docs by using [pdoc3](https://pdoc3.github.io/pdoc/) and GitHub pages.
This is simple and requires minimal effort.

1. Install pdoc `python -m pip install pdoc3`.
2. Open the main directory of your python project in a terminal.
3. Create a branch called gh-pages and checkout that branch `git checkout -b gh-pages`.
4. Create your html docs `pdoc3 your_package --html --o docs`.
5. Add the file `index.html` from [PythonTemplate](https://github.com/seankmartin/PythonTemplate/blob/gh-pages/index.html) to the main directory of your project on the gh-pages branch. Replace `your_package` with your package name and my github link with yours.
6. Commit the resulting files to git and push the changes to GitHub `git add -A && git commit -m "Built docs for first time" && git push --set-upstream origin gh-pages`.
7. Open your GitHub repository, go to settings -> GitHub Pages section and set the source option to gh-pages branch if GitHub has not automatically picked this up.
8. You should end up with something like [this](https://seankmartin.github.io/PythonTemplate).

Overall, this method is a simple way of automatically turning your docstrings into a documentation website, but it lacks flexibility - that is where Sphinx comes in.

### Creating Documentation using Sphinx

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
11. Add the following to the Sphinx config file.

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

12. Choose a theme of your liking, by a setting in the Sphinx config, for example `html_theme = 'sphinx_rtd_theme'.` Note, this theme requires installation `python -m pip install sphinx_rtd_theme`.
13. The next step is optional, and is only needed if you want to include your README on Read the Docs and that README is in Markdown format. Install m2r if your README file is not in RST format `python -m pip install m2r`. If using Sphinx version lower than 3.0.0 simply add `m2r` to your extensions list. Otherwise, (at least until m2r is updated) add the following to the Sphinx config file, from [life4.deal-7f33cbc5](https://github.com/life4/deal/commit/7f33cbc595ed31519cefdfaaf6f415dada5acd94)

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

14. Optionally include your README file in the index. First create a readme.rst file in the docs folder, containing the following - choose the include based on the README file type:

```rest
README
===========
.. mdinclude:: ../README.md
.. include:: ../README.rst
```

15. Modify the table of contents tree in `index.rst` to contain `readme.rst` (if step 14 was completed) and `reference/modules.rst`

```rest
.. toctree::
    :maxdepth: 2

    readme
    reference/modules
```

16. Run `make html` to generate your docs to `docs\_build\html`.

17. Open `docs\_build\html\index.html` in a web browser, and rejoice!

Some extra notes on using Sphinx.

- The format for inserting links to other items in a Sphinx-built page is:
  `.. reference_type:: reference_location`
  For example, to link to automatically generated module documentation, `reference_type` should be replaced by `automodule` and `reference_location` should be the name of the module linked to. See more at [Sphinx domains](https://www.sphinx-doc.org/en/master/usage/restructuredtext/domains.html#cross-referencing-python-objects) and [Autodoc](https://www.sphinx-doc.org/en/master/usage/extensions/autodoc.html#module-sphinx.ext.autodoc).
- An alternative to the autodoc system using apidoc is to use the [autosummary](https://www.sphinx-doc.org/en/master/usage/extensions/autosummary.html) extension, which creates a page for each function or class in a table. For very large codebases, this is likely preferable.

### Creating a Read the Docs website using Sphinx documentation

A small bit of setup is required in your online repository. We need to create a [Read the docs config file](https://docs.readthedocs.io/en/stable/config-file/v2.html). Most likely you can just add the `.readthedocs.yml` and `docs\requirements.txt` from [PythonTemplate](https://github.com/seankmartin/PythonTemplate) to your project if you have been following this guide. You may need to add extra doc building requirements to `docs\requirements.txt`, such as the commonly used [recommonmark](https://recommonmark.readthedocs.io/en/latest/index.html). After this, follow these steps:

1. Create an account on [Read the Docs](https://readthedocs.org/).
2. Import your github repository on your Read the Docs profile.
3. Hopefully your project builds correctly on Read the Docs. If not, check out the build log, most likely there is just a package you used not included in `docs\requirements.txt` or a setting is incorrect in `.readthedocs.yml`
4. Optional step, set up a webhook following the [RTD docs](https://docs.readthedocs.io/en/stable/webhooks.html) so that your RTD is rebuilt on file change.

After all that hard work, you should have something like my [PythonTemplate Read the Docs](https://pythontemplate.readthedocs.io/en/latest/index.html) - though hopefully your real project is a bit prettier.

## Packaging code

### Uploading your package to PyPI

Your code is pretty, your code has tests, and your code has documentation, what next?

You will need to have a `setup.py` file and a `setup.cfg` file.
It is also recommended to have a `README.md` or `README.rst` file and a `LICENSE` file.
Examples of all these are available on my [GitHub Python template](https://github.com/seankmartin/PythonTemplate/)

To upload to PyPI, make an account on PyPI, and then follow these steps:

```bash
python -m pip install --upgrade setuptools
python -m pip install --upgrade twine
rm -rf dist
python setup.py sdist
twine check dist/*
twine upload dist/* -u USERNAME -p  PASSWORD --verbose
```

### Building an executable

Say your code has a GUI and you want to provide an executable.
Two main options, the first is using [pyinstaller](https://pyinstaller.readthedocs.io/en/stable/).
The other one is to use the [fbs build system](https://build-system.fman.io/), which is further described on this website [here](https://seankmartin.netlify.app/python/using_fbs/).

## Further reading

1. [A more in depth guide to flake8](https://medium.com/python-pandemonium/what-is-flake8-and-why-we-should-use-it-b89bd78073f2)
2. [A more in depth guide to PyPI packaging](https://medium.com/@joel.barmettler/how-to-upload-your-python-package-to-pypi-65edc5fe9c56)
3. [An idiots guide to Sphinx documentation](https://samnicholls.net/2016/06/15/how-to-sphinx-readthedocs/#disqus_thread)
4. [The actual Sphinx guide instead of this garbage](https://www.sphinx-doc.org/en/master/usage/quickstart.html)
5. [Flit](https://docs.python.org/3/library/ast.html) and [Poetry](https://python-poetry.org/) as alternative ways to a `setup.py` file for installing a package and uploading to PyPI.
