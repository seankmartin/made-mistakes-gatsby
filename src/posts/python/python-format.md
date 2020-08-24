---
title: 'Example Python formatting and linting'
excerpt: 'Make code look less bad.'
date: 2020-07-02
path: /python/formatting-example/
image: ../../images/python_code.jpg
categories: [notes]
tags: [python, coding]
toc: true
comments: false
comments_locked: false
last_modified_at: 2020-07-02T14:40:46
hide_meta: false
featured: false
---

The way python formatters work is similar, so an example is shown below for autopep8 and flake8, with docformatter and pydocstyle.
Usually `-r` indicates recursive, `-i` indicates in place, and any of these tools can be run with the `-h` flag to get more information.
Furthermore, most of these tools can be integrated into your favourite code editor.

## Installation and running
```bash
python -m pip install yapf flake8 docformatter pydocstyle
export my_code_file_or_directory=var
python -m autopep8 $my_code_file_or_directory -r -i
python -m docformatter $my_code_file_or_directory -r -i --blank --pre-summary-newline
python -m flake8 $my_code_file_or_directory
python -m pydocstyle $my_code_file_or_directory
```

## Example code
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

## Formatting and linting result
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

(<span><small>Photo by <a href="https://unsplash.com/@cdr6934?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Chris Ried</a> on <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></small></span>)