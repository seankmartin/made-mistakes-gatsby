---
title: 'Installing and using Docker'
excerpt: 'How to start using Docker containers'
date: 2020-07-08
path: /computing/using-docker/
image: ../../images/dock.jpg
categories: [notes]
tags: [computing]
toc: true
comments: false
comments_locked: false
last_modified_at: 2020-07-08T15:13:24
hide_meta: false
featured: true
---

## What is [Docker](https://www.docker.com/)
To understand Docker, it is necessary to understand containers. 
A container is a method of bundling together an entire runtime environment for an application, decoupling it from the application itself. 
They are a bit like a virtual machine, but there is no guest operating system, as the container sits right on top of your own host operating system.
Docker has a nice diagram for this in their documentation described containers [here](https://www.docker.com/resources/what-container).
Using containers brings many benefits, but in essence, you get an isolated consistent environment to run your application from that is lightweight and easy to share.

Docker is by far the most popular container format out there.
It is open-source, and supported by many other platforms, such as Google Cloud.
Docker is free to use for individuals and developments teams for public repositories, and can be paid for to get increased benefits, such as parallel continuous integration builds.

## How to set up [Docker](https://www.docker.com/)
1. Install Docker following the instructions on the official [website](https://docs.docker.com/get-docker/).
2. Test your installation 
    ```shell
    sudo docker run hello-world
    sudo docker image ls
    ```
3. Get started with an actual docker image to test.
4. For example, you could try the [nvidia docker image ](https://github.com/NVIDIA/nvidia-docker/blob/master/README.md#quickstart).
5. There is a reference [here](https://docs.docker.com/engine/reference/run/) for the run command.


## Further considerations
By default, docker stores images in `/var`on linux.
If this is not preferred, the best guide I have found to change this is available [here](https://blog.adriel.co.nz/2018/01/25/change-docker-data-directory-in-debian-jessie/).
Alternatively, you could keep docker on `/var` and regularly clean it with
```shell
docker system prune -a
```

You may need to run all docker commands as sudo. The easiest fix for this seems to be
```shell
sudo chmod 666 /var/run/docker.sock
```

## Further reading
- Guides for using [TensorFlow](https://www.tensorflow.org/install/docker) and [PyTorch](https://medium.com/@zaher88abd/pytorch-with-docker-b791edd67850) with Docker.
- [Bind mounts](https://docs.docker.com/storage/bind-mounts/) and [volumes](https://docs.docker.com/storage/volumes/) in Docker.

(<span><small>Photo by <a href="https://unsplash.com/@tjholowaychuk?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Tj Holowaychuk</a> on <a href="https://unsplash.com/s/photos/dock?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></small></span>)