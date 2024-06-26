---
title: "Getting Gatsby installed and running"
excerpt: "How to set up Gatsby and publish your built site to Netlify."
date: 2020-05-25
path: /web-dev/installing-gatsby/
image: ../../images/gatsby.jpg
categories: [notes]
tags: [web dev, coding, gatsby]
toc: true
comments: true
comments_locked: false
last_modified_at: 2020-05-25T23:26:14
hide_meta: false
featured: true
---

[Gatsby](https://www.gatsbyjs.org/docs/) is a great tool, and as the documentation says, a blazing fast modern site generator for React. As an example, this website is built using Gatsby. Here, we will run through getting Gatsby installed and using it, as opposed to setting up a Gatsby project.

## Installation steps
If you are on Windows, I highly recommend installing [Chocolatey](https://chocolatey.org/) or [Scoop](https://scoop.sh/) as it will make the following installations much easier and a bit more Unix like. You could read a lot about the differences in these programs, so I guess just pick the one you like the look of!

1. Install node.js, a javascript runtime, following the official docs to [install via a package manager](https://nodejs.org/en/download/package-manager/). I ran into an error with node not correctly adding to my bash startup files. If you find the same, copy the relevant output from the installation to a bash startup and source the same file. However, on Linux, it is probably just as easier to install from the [binary archive](https://github.com/nodejs/help/wiki/Installation)
1. I would suggest also installing yarn, a cool package manager following the instructions on the [official docs](https://classic.yarnpkg.com/en/docs/install/#debian-stable). As an example, for Chocolatey these commands are

```shell
choco install nodejs.install
choco install yarn
```

3. Install the Gatsby Command Line Interface (CLI).

```shell
npm install -g gatsby-cli
```
4. Optional step, if you don't have a project you want to work from as a template (for example [Michael Rose's website](https://github.com/mmistakes/made-mistakes-gatsby) or a [Gatsby starter](https://www.gatsbyjs.org/starters/?v=2)) and you want to try Gatsby, run the below. This will use the default Gatsby starter to get you going. Note that on Windows Powershell Gatsby may not be digitally signed, in which case you would need to run `Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass`.

```shell
gatsby new gatsby-site
```
4. Start developing with gatsby. This will start a hot-reloading development environment at `http://localhost:8000`.

```shell
gatsby develop
```
5. When you have finished developing, create an optimised build and view it

```shell
gatsby build
gatsby serve
```

## Publish to Netlify
With very little extra effort you can publish your Gatsby site to [Netlify](https://www.netlify.com/).
Simply create a profile and import your project into Netlify.
Netlify will generally recognise that this is a Gatsby project and set the build script accordingly.
All you need to do for a successful build is add any [environment variables to Netlify](https://docs.netlify.com/configure-builds/environment-variables/).
Go ahead and add a Netlify badge to your project README, you've earned it.

## Further Reading
* Check out Gatsby's own tutorials over at https://www.gatsbyjs.org/docs/. This guide is more in line with their quick start guide.
* Read about [JAMSTACK](https://jamstack.org/) and other alternatives tools for making static websites.
* Read about [Staticman](https://staticman.net/) (not to be confused with Marvel's Dynamic Man). Its a way to add user-generated content to a static website, it is pretty cool. There is a nice blog post about setting it up [here](https://travisdowns.github.io/blog/2020/02/05/now-with-comments.html).