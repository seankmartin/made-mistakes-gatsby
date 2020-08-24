---
title: 'Building a Desktop PC.'
excerpt: 'Picking parts and installation.'
date: 2020-06-19
path: /computing/build-a-pc/
image: ../../images/desk_pc.jpg
categories: [notes]
tags: [computing]
toc: true
comments: false
comments_locked: false
last_modified_at: 2020-06-19T21:20:18
hide_meta: false
featured: true
published: true
---

## Step by step guide

1. Find parts over at [Logical Increments](https://www.logicalincrements.com/). If changing up the builds a bit, check [User Benchmark](https://www.userbenchmark.com/) out, and also [PC Part Picker](https://pcpartpicker.com/).

2. Before starting, read all the manuals of your parts for installation instructions for any oddities - your case and motherboard are particularly important, the GPU, RAM, and CPU instructions are generally standard. 

3. Remove your motherboard from the anti-static bag, then place the bag on top of the motherboard box, and the motherboard on top of the box. Have a look at your motherboard for some numbers you might need to register it with, and also inspect for any visual damages.

4. Take your case out and see if all the parts will fit in it. Particularly, check there is enough horizontal space for the GPU. Also check if the case has motherboard standoffs preinstalled. Grab the screws from all the parts.

5. Install your CPU and CPU fan and heatsink - if using a stock fan, don't touch the bottom of it. Make sure to line up the triangle on your CPU with the triangle on the motherboard. When fitting the heatsink, remove the fan by removing the metal bars on the heatsink before installation if possible. Make sure the fan cable can reach the motherboard CPU fan socket in the orientation the fan is being installed.

6. Install your RAM. Check your motherboard guide for the slots that your RAM should fill, usually though it is 1 3 or 2 4 if you have two sticks. Unclip the tabs on the RAM slot and push down evenly until the you hear a click and the tabs automatically lock. The RAM can only fit in one orientation.

7. If you have any M.2s, install them at this point. They can get blocked by PCIe slots later on.

8. Fit the IO shield into the slot on your motherboard, and make sure it is facing the right way. The prongs on the shield are designed to ground the ports. Might be worth checking out [Robtech](https://www.youtube.com/watch?v=XAWNzd-gc3Q) if the prongs sound confusing. Screw your motherboard into the standoffs on your case. You might not be able to get all the screws in, that usually does not matter.

9. Install your hard drives and SSDs. Plug them into the motherboard SATA slots.

10. Plug all the case cables into the motherboard. You will need to do the fans, plugging them into the case fan/ system fan slots. The front panel connectors can be a little confusing, so read the manual carefully for your motherboard - these are the small ones that say power etc. Also do the front USB connections/ audio connections etc. Usually the motherboard indicates quite well where to put these, but look it up if unsure.

11. Trace the cables for your CPU, GPU, SATA drives, and motherboard through your PC. Don't actually plug any of these in to the power supply (if using a modular power supply), or your PC parts. You just want to see what way is best for cable management!

12. Install your GPU and any other PCIe items (such as a network card). Remove the 2nd and 3rd metal protector to do so. Make sure that the ports on your GPU will be accessible.

13. Plug all of the cables into your power supply and computer parts.

14. Put the case back together and boot up with a bootable USB stick.

## Possible Compatibility Issues

* m.2. comes in many forms, they have a size, indicated by the form factor, and a connector type, called the key - for example, the "M" key is often found on NVMe SSDs. See [ATP](https://www.atpinc.com/blog/what-is-m.2-M-B-BM-key-socket-3) for more.
* Your GPU is probably the most likely component to be too large for your case, check the measurements!
* Grab a few cable ties, and an anti-static band if you want to take the stress out of constantly grounding yourself on household objects (e.g your metal sink), and equalising voltage by holding your metal case while handling PC parts.
* Have one or two USB sticks around, at least 8GB in size, for making boot sticks. I find having an Ubuntu boot stick around for running Live to debug computer issues is very useful. Similarly you could make a Gparted Live boot stick.

## Installing Windows
Download from [Microsoft](https://www.microsoft.com/en-gb/software-download/windows10). You can use the download itself to make an installation media for another PC. When installing, select "I have no product key". It is easier to pick the version this way, and just buy windows after the install. Windows automatically will partition a drive that has unallocated space.

## Install Ubuntu
Download from [Ubuntu](https://ubuntu.com/download/desktop) and check the installation to see if it is valid. The easiest way to make a boot stick for Ubuntu is probably to use the Ubuntu Startup Disk creator. When booting to Ubuntu, keep an eye on the file checking to make sure there are no errors. The best way to do an Ubuntu install is to manually parition in my opinion. Here is what I recommend:

1. 32GB primary partition that mounts to / as ext4 at the start of the drive.
2. ~1.5 to 2 times your RAM as SWAP partition that is at the end of the drive.
3. All the rest of the drive can be ext4 logical partition that is mounted at /home.

(<span><small>Photo by <a href="https://unsplash.com/@monty_films?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Rick Monteiro</a> on <a href="https://unsplash.com/s/photos/computer-tower?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></small></span>)