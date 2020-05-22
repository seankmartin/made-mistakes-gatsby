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

```Shell
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

## Creating a Read the Docs website
I'm not actually sure how to do this yet, I've been using pdoc3 to make things very simple, which is a good alternative for simplicity.
However, will describe this when it is set up!

## Uploading your package to PyPI
Your code is pretty, your code has tests, and your code has documentation, what next?

You will need to have a `setup.py` file and a `setup.cfg` file.
It is also recommended to have a `README.md` or `README.rst` file and a `LICENSE` file.
Examples of all these are available on my github TODO provide link to my template python.


To upload to PyPI, make an account on PyPI, and then follow these steps:
```bash
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