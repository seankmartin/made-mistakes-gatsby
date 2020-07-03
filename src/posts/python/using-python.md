---
title: 'Getting your python code ready for the world'
excerpt: 'How to clean up your python code and distribute it.'
date: 2020-05-22
path: /python/getting_your_code_out_there/
image: ../../images/python_regius.jpg
categories: [articles]
tags: [python, coding]
toc: true
comments: true
comments_locked: false
last_modified_at: 2020-07-02T14:40:46
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

See a full example over [here](../formatting_example/)

## Testing with PyTest

One can do many complex things with [PyTest](https://docs.pytest.org/en/latest/), and this will be expanded later.
But very simply:

1. Install PyTest `python -m pip install pytest`.
2. Make a directory called tests and place your tests in there. Save them as `test_*.py` or `*_test.py` to allow for automatic discovery. For example, a test could be

    ```Python
    def test_adding():
        # This will pass
        assert(1 + 1 == 2)

        # This will fail
        assert(1 + 1 != 2)
    ```

3. Run PyTest `python -m pytest`.
4. You can also run doctests in your main module from PyTest. For example, set up a [doctest](https://docs.python.org/3/library/doctest.html)

    ```Python
    def add(a, b):
        """
        Add two objects.

        >>> add(1, 2)
        3
        >>> add([1, 2], [3, 4])
        [1, 2, 3, 4]

        """
        return a + b
    ```
5. Then run PyTest `python -m pytest --doctest-modules`.
6. You can add this as a permanent setting

    ```toml
    # content of pytest.ini
    [pytest]
    addopts = --doctest-modules
    ```

7. See more options here on [doctest](https://docs.pytest.org/en/stable/doctest.html).


## Continuous integration with Travis-CI

[Travis CI](https://travis-ci.org/) is great, and I would highly recommend it.

1. Login to Travis CI with your GitHub credentials.
2. Create a file called `.travis.yml` in your repository that you want to add to Travis CI, which will manage the configuration of Travis CI. Some examples are [here](https://docs.travis-ci.com/user/language-specific/).
3. Link the GitHub repository to Travis CI.
4. Push a commit that contains `.travis.yml` to trigger the first build.
5. As an example, to get Travis to run pytest

    ```YAML
    # Contents of .travis.yml
    language: python
    python:
        - "3.8"
    install:
        - pip install -r requirements.txt
    script:
        - pytest
    ```

## Hosting documentation

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

### Creating documentation using Sphinx

1. Install [Sphinx](https://www.sphinx-doc.org/en/master/) `python -m pip install Sphinx`.
2. Open the main directory of your python project in a terminal.
3. Make a folder called docs and move to that directory.
4. In the docs folder, run `sphinx-quickstart`. Name your package as appropriate, and setup as required. Most of the default options are fine. Be sure to select `y` for the auto documentation setting. If you forget to enable autodoc, you must add `sphinx.ext.autodoc` to the Sphinx config file. I would also recommend the `sphinx.ext.viewcode` extension.
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
8. Update the napoleon configuration following [official docs](https://www.sphinx-doc.org/en/master/usage/extensions/napoleon.html#configuration). Here is an example setup for NumPy style docstrings

    ```Python
    # -- Napoleon settings -----------------------------------------------------
    napoleon_google_docstring = False
    napoleon_numpy_docstring = True
    napoleon_include_init_with_doc = False
    napoleon_include_private_with_doc = False
    napoleon_include_special_with_doc = True
    napoleon_use_admonition_for_examples = False
    napoleon_use_admonition_for_notes = False
    napoleon_use_admonition_for_references = False
    napoleon_use_ivar = False
    napoleon_use_param = True
    napoleon_use_rtype = False
    ```

9. At this point, you could use [sphinx-apidoc](https://www.sphinx-doc.org/en/master/man/sphinx-apidoc.html) to directly generate a set of documentation.This is similar to how pdoc3 or another automatic API documentation tool works. You could run `sphinx-apidoc -e -f -o reference ../your_package` to achieve this. Instead, we will set this up inside the Sphinx config file using `sphinx-apidoc` so that the automatic documentation is part of the build process.
10. Install apidoc `python -m pip install sphinxcontrib-apidoc`
11. Add the following to the Sphinx config file.

    ```Python
    extensions = [
        'sphinxcontrib.apidoc',
        # ...
    ]

    # -- Apidoc configuration ----------------------------------------------------
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

18. If you are using git for version control, make sure that your `.gitignore` file contains the following

    ```text
    # Sphinx documentation
    docs/_build/
    docs/reference/
    ```

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

## Distributing code

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
The other one is to use the [fbs build system](https://build-system.fman.io/), which is further described on this website [here](https://seankmartin.netlify.app/python/using_fbs/). The fbs build system is simple, but requires specific versions of Python and PyQt, which can be a significant limitation.

I would generally recommend pyinstaller for flexibility. Here is example build steps for pyinstaller:
1. Create a file named `cli.py` which will run the main GUI of the application.
2. Install pyinstaller `python -m pip install pyinstaller`.
3. The basic build process is `python -m PyInstaller cli.py`.
4. However, I recommend checking out the options in `python -m PyInstaller -h`.
5. For example some options I use regularly are
    * `--noconfirm` to automatically overwrite the previous build.
    * `--nowindow` on Mac and Windows to avoid a cmd window.
    * `--onefile` the default is to output a folder for the executable, but you can instruct one big file to be created instead.
    * `--log-level WARN` the default INFO is a little wordy for my liking.
    * `--name $NAME` what to name the output.
    * `--hidden-import $PACKAGE`  sometimes a necessary package for your program is not picked up, use this to fix that.
    * `--icon $PATH_TO_ICON` a `.ico` file if you have one.
    * `--additional-hooks-dir=$PATH_TO_ADDITIONAL_HOOKS` this is a little complicated, but for an example where it might be needed, look at [sklearn in onefile mode](https://stackoverflow.com/questions/20602721/pyinstaller-a-module-is-not-included-into-onefile-but-works-fine-with-oned).

6. Here is the build script I use for [NeuroChaT](https://github.com/shanemomara/NeuroChaT).

    ```batch
    @echo off
    python -m PyInstaller ^
    --noconfirm --log-level WARN ^
    --onefile --nowindow ^
    --hidden-import xlrd ^
    --hidden-import openpyxl ^
    --name NeuroChaT ^
    --icon NeuroChaT.ico ^
    --additional-hooks-dir=hooks ^
    cli.py


## Further reading

1. [A more in depth guide to flake8](https://medium.com/python-pandemonium/what-is-flake8-and-why-we-should-use-it-b89bd78073f2)
2. [A more in depth guide to PyPI packaging](https://medium.com/@joel.barmettler/how-to-upload-your-python-package-to-pypi-65edc5fe9c56)
3. [An idiots guide to Sphinx documentation](https://samnicholls.net/2016/06/15/how-to-sphinx-readthedocs/#disqus_thread)
4. [The actual Sphinx guide instead of this garbage](https://www.sphinx-doc.org/en/master/usage/quickstart.html)
5. [Flit](https://docs.python.org/3/library/ast.html) and [Poetry](https://python-poetry.org/) as alternative ways to a `setup.py` file for installing a package and uploading to PyPI.
