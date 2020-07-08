---
title: 'Using the fman build system.'
excerpt: 'How to build python code with fbs.'
date: 2020-05-27
path: /python/using-fbs/
image: ../../images/python_regius.jpg
categories: [notes]
tags: [python, coding]
toc: true
comments: false
comments_locked: false
last_modified_at: 2020-05-27T12:52:14
hide_meta: false
featured: false
---

A quick run through of using the fman build system [(fbs)](https://build-system.fman.io/). They have a great tutorial [online](https://github.com/mherrmann/fbs-tutorial), but this will be a little more focused on creating a full app.

[[notice | Important Note]]
| The fbs build system only supports Python version 3.5 or 3.6 and requires a specific version of PyQt5 (5.9.2) and PyInstaller (3.4).

1. Install Qt Designer, either from qt, or from the [fbs site](https://build-system.fman.io/qt-designer-download). Run Qt Designer and make the UI to match your needs.
2. Install fbs and PyQt5

```shell
python -m pip install fbs PyQt5==5.9.2
```

3. To get your PyQt app running under fbs, there is two main things that need to be done.

   1. You need to have an application context provided by fbs

   ```python
   from fbs_runtime.application_context.PyQt5 import ApplicationContext
   appctxt = ApplicationContext()
   ```

   2. Run the PyQt app from the application context

   ```python
   appctxt.app.exec_()
   ```

4. Try `fbs startproject` to see what is expected to be in your full project.
5. If on windows you will probably need to install win32

```shell
python -m pip install pypiwin32
```

6. Run using `fbs run` or create an installer for the app with `fbs freeze` followed by `fbs installer`.

The fman build system comes with many great features, such as using the `get_resource` function on the application context to find resources in a very easy and replicable manner.

## Troubleshooting

The build system has its own [troubleshooting guide](https://build-system.fman.io/troubleshooting). Here is an extra thing in case running the executable gives a [failed to execute script pyi-rth-pkgres](https://stackoverflow.com/questions/37815371/pyinstaller-failed-to-execute-script-pyi-rth-pkgres-and-missing-packages). There are many fixes available, but the easiest one when using fbs is to just add an unused import to your main file `import pkg_resources.py2_warn`. Usually you would add this as hidden import, but I'm not entirely sure how to do this in fbs.

Also, don't forget that on Windows you need [NSIS](https://sourceforge.net/projects/nsis/) on PATH to create an installer.
