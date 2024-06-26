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
Docker has a nice diagram for this in their documentation describing containers [here](https://www.docker.com/resources/what-container).
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
3. There is a reference [here](https://docs.docker.com/engine/reference/run/) for the run command.
4. Get started with an actual docker image to test.
5. For example, you could try the [nvidia docker image](https://github.com/NVIDIA/nvidia-docker/blob/master/README.md#quickstart), or create your own container following the steps below.


## Creating a docker container
1. Find a docker container to use as a base at [Docker Hub](https://hub.docker.com/). For example, here is the image for [Python](https://hub.docker.com/_/python).
2. Create a file called `dockerfile` (with no extension), place it in your code repository, and add the following to it.
    ```docker
    # Firstly, FROM, the location in step 1, python for example
    FROM python:3

    # What the working directory in the image filesystem (not the host) should be
    WORKDIR /usr/src/app

    # COPY the relevant files
    # This operation obeys a .dockerignore (same rules as a git ignore)
    COPY . .

    # Set any required environment variables, for e.g
    # ENV PIP_NO_CACHE_DIR=1
    
    # Install anything needed
    RUN python -m pip --no-cache-dir install .

    # Specify the command the container should run by default
    CMD ["python", "./cli.py"]
    ```
3. Build and run the container with the commands from the directory the dockerfile is in
    ```shell
    docker build --tag my_python_app:1.0 .
    docker run -it --rm --name my_running_name my_python_app:1.0
    ```

## Share your image on Docker Hub
1. Obtain a Docker ID.
2. Login to Docker `docker login`.
3. Tag the image `docker tag local-image:tagname new-repo:tagname`.
4. Push the image to Docker Hub `docker new-repo:tagname`.

## Useful commands
1. Removing stopped containers
    ```shell
    docker rm  $(docker ps -q -a)
    ```
2. Running GUI applications - mount the socket for the X server as a Docker volume
    ```shell
    docker run -v /tmp/.X11-unix:/tmp/.X11-unix -e DISPLAY=unix$DISPLAY TheImage
    ```
3. Running a PyQT GUI application

    Firstly, add the following lines to your dockerfile to install the required packages
    ```docker
    RUN apt-get update
    RUN apt-get install python3-pyqt5 -y
    ```
    Then use the following commands to run your image
    ```shell
    echo "allowing root to connect to the X server"
    xhost local:root

    echo "Disallowing QT to access shared memory"
    export QT_X11_NO_MITSHM=1

    echo "Running the image"
    docker run -v /tmp/.X11-unix:/tmp/.X11-unix -e DISPLAY=unix$DISPLAY TheImage
    ```

4. How to mount data from your local filesystem
    ```shell
    docker run --mount type=bind,source=/home/username/my-data,target=/mnt/my-data
    ```

5. Launch an interactive bash session
    ```shell
    docker run -it <image> bash
    ```

## Further considerations
By default, docker stores images in `/var`on linux.
If this is not preferred, the best guide I have found to change this is available [here](https://blog.adriel.co.nz/2018/01/25/change-docker-data-directory-in-debian-jessie/).
Alternatively, you could keep docker on `/var` and regularly clean it with
```shell
docker system prune -a
```

You may need to run all docker commands as sudo. The easiest fix for this seems to be the below. Though you will need to run it occasionally to keep the setting.
```shell
sudo chmod 666 /var/run/docker.sock
```

## Further reading
- Guides for using [TensorFlow](https://www.tensorflow.org/install/docker) and [PyTorch](https://medium.com/@zaher88abd/pytorch-with-docker-b791edd67850) with Docker.
- [Bind mounts](https://docs.docker.com/storage/bind-mounts/) and [volumes](https://docs.docker.com/storage/volumes/) in Docker.
- Move [Windows path to Docker data](https://blog.codetitans.pl/post/howto-docker-over-wsl2-location/) (why this is not an option from the program, I'm not sure!).

(<span><small>Photo by <a href="https://unsplash.com/@tjholowaychuk?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Tj Holowaychuk</a> on <a href="https://unsplash.com/s/photos/dock?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></small></span>)