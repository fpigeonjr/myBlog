---
title: DIY Coding Camp for Kids
slug: dyi-coding-camp-for-kids
date: 2019-02-04
language: en
imageTw: ./dyi-coding-camp-for-kids-tw.png
imageFb: ./dyi-coding-camp-for-kids-fb.png
cover: ./blog-bg.jpg
generate-card: true
tags:
  - linux
  - programming
  - familytime
---

## Intro

![carlos on the pi](https://lh3.googleusercontent.com/WJF_za6S0mb_UNInxSscc9HXGQGSMPOiFC7r-rjEbbD15u8Ffnc9r8-ydTO8uIi4t44bVAPrCtubalMuc592EgJHdpY2qlZSsFBTSJ7okgPXtYyBcHnzRUElN2zRk8rEnxerdKKcTnrxp8WAcZnKVvXHkPYH8CoXZP5jx8A52hbC1FGZW_XVyogQ8h_6_BBZ2ON1O50qquW4eUjalsQoFmERzbxnInAPPP_AZ4F_QbCJoqshqaFpn39uf9gPX4mLdZBBePORAA2RXYNC7gDcgzFHdj9KD2BXr5grB4lsIvp2eWwZAb69p6zFbqBB7uq1ELsyz9tLXkvfzcPjglRTV7I4X6Chb-zTxHaddGmwQRTdM0oJXy10OOBBTObohLEkkJCQtiPIekS9lvbGL4VBZdbs4gH9VqHIcGB1OahJEv6M7Xx9yqQ1KV62m6sWiTH5u-L0e87MbovhCaODE8giC_1RO-8NUd3svLH-CuIY8ynd2LyYu7ddw04M0DRJtlUDw8yTvBSle1h3gFuQoxOkHtsM1rzydBG1Oa_D-aFjssJ75ww1TN3MZ76C8Hx66NBdgcYZXo4qTBX3dg_I-VN5agqEasW00aO4B8fMVatmO35H95CqTwM1gRxhm816YiSNUmAoiakUbV_HVOnBRK5KNmALAw=s1337-no)

I was reflecting on the coding camp we put together for the boys last summer.

> ❤️they had a blast learning, building, and **coding**

It was cool to find that my boys share a passion for creating, _just like their dad_.

## Hardware

![hw](https://lh3.googleusercontent.com/QXLvM0kkg9FGJin4aXnuJdhr5S4C-8VSfoFv4Njgc9ZlXEtQXK2hcikmQVosrjheEiwhIlF7PpVaz6UCUkvdtlwnGcFqg13JljGhNHor56rZdk9imTJdet7hoAUnLuarh5kXAsULEPvr82175AzK1IhPpsVW3m8btR_7_pm5EN2bxOayE3pS3HHigasPmH1Ln1cRoonJIMwg10R8HnAitd9P5nTrmgsjIKTWWe75pq9u7Us1mqLu3CcotDeZTeRfQILmgMPNwG9leTSRD8nZtjZ2VDY9GbMtR5U1tPIfp68_DoJckk5gixeyVpynUmleOm5ZQg1WykAMXRrb5vOKAWnrkFM60wUKWkTtSmeTQ1ljYDNlYPCcvqms7yDaT5YMgj7PsGe-xH-O9CT7BQLEBaRMR1Bir3DYJKpaEXAUEf8YCKdaKmrFrUNMVoMlqKO8AZ3TIzS9BBxymTNTvb5KmZm0IdOQXnqs2R7Slc7Ac5uHfFkYIkK4r3Ncz1SeFUwt6ZywBJI7ojT0RtP-jpSvibOrt64SOqLC6M_IWLXgr2F_9wZgcwhTP0CScf0MYz1jIGpPf7WzJM2QuqdEw7YI6Q6_TGPvBd1kLhO9jVrzT5BFEq9OtaVve89oXCV0y-K-LAM8exLvNo84H5tX9vWl-8-gxQ=s1337-no)

I needed cheap hardware since at this point I didn't know if this would just be a phase.

💰I didn't want to spend more than \$100.

I had already put together a Raspberry Pi(rpi) for my home network (_which is a blog post on its own_). So I thought that this would be an excellent solution for my boys linux rig as well.

I found a BOGO offer on Pis from [Arrow Electronics](https://www.arrow.com/). While you can just [buy the entire kit from Amazon](https://www.amazon.com/gp/product/B01C6EQNNK/ref=oh_aui_search_asin_title?ie=UTF8&psc=1), these did not include the fans, case, or power adapter. So if your just looking for a case kit, [Amazon has those too](https://www.amazon.com/gp/product/B07BTHNW9W/ref=oh_aui_search_asin_title?ie=UTF8&psc=1).

So at the end of the day, you will need:

- Raspberry Pi
- Case
- Fan and Heatsinks(optional)
- Power Adapter
- SD Memory Card (8GB Minimum)
- Monitor
- Keyboard and mouse

## Software

In order to get an operating system on the Raspberry Pi, you will need an SD Memory card.

The os is over 4GB so they recommend a minimum of 8GB. However, [Amazon has 32GB memory card for under \$10](https://www.amazon.com/gp/product/B06XWN9Q99/ref=oh_aui_search_asin_title?ie=UTF8&psc=1).

1. The first step is to [download the os from the official raspberry website](https://www.raspberrypi.org/downloads/raspbian/).

![os](os.png)

2. Then you want to create the bootable os using [Etcher](https://www.balena.io/etcher/).

![etcher](./etcher.png)

🔥Once its done, insert into your SD card into your rpi and fire it up!

![bootup](https://lh3.googleusercontent.com/LTAj-PbCmDSPLLYvV1itZn8nh-rCEakkNhCeJEN_CtgM1kmzWctERY2jIfgmaJQZYyPfGdxQ1jKdtbF_6qGnIrqmbh46RPRN072kc56uxWUFRC8orzbnoo8qK8l7TMZhzSC34-0EgMxHYvGW9ttH--OjwXZDnDxuScfwS2oGJEk6n7MnA_wcnfzl-hUMCjG-IPrTMmIJAmPn25nOqegbi9Wc9SfwdzWuojvf8L8RxOkvkqqY-s15DLeomijyGueQ50IqFig_0cUOsgQ3xr52UoOQ3gZmRtAqOXGyh0_ksR1tH9VSGDMWOpHOc9CzgB3lL5U7S3Dp0ifsM1lqpRTiH8veCvC3Wt_GYUGXPKNJgDpuOVM-jyvwCGwtA1cE9Q5ndcmPaEfvgCg0DcsvWsCH9LcXFDe5tTgjbiZuQjOsNTivlC2xcpHJ6cGkuK5DkyjEl2xwKGubIb1-iC1T0JZEM4Nno94NddNHetjA5JumiNCOU80rTsjTKjb-o8OYd95IbB_BKI9J3fHQG_1FJV4GoGN53fDGhPW5gbmo4A56AO8BTp-qJYDdpKij2ex_vUtNHxTp9_M3_VMWX4xClMKXaDDWwlDHnGnBT_6ZsbW39UF_Vkq2fwbLGdb6XkShYFnvLit3seI1q58B_f0BJwJvJFcFZA=s1337-no)

## Coding

![scatch](https://lh3.googleusercontent.com/4c8fDRZaDrqOQV6_YeAixG7HG8Aqlm4GIczrXIM8cM92B3ZJMzXgFdTNShzuZK6vpItvj4gxTjYOOej5QGHUlcgctHWj4yxVeCOADzNWvOSA5PZTi027by0RYMtHK0bPdtbRhux5xSLDi4Qcd3IXHsFKuhHGAmWXKc-Ba7ljMwSUoniezMLmK7WOeeABMMIwy6jMpvN31FjWZC-1-V_cyjLXNjYsNrduAwtgFBuqzZMkz0lSUK_ZMhl-85TVRDfJW3tJnW0VnwjfVU0OsHIhftaknpS7G0RejtbXAboogRThvPa5j18CVv19a1OX2wwjRQyQkFpdGX_78ShstQPpSAtZRYzjvqP7Fm-x0OALIly2-rDbND74-5zglplkp8NUZ0WTpMb1WwMA4V7B1wzCxKOfn2aBf-hu8CgBGNOq2se3XcQAhSj8qwR76V_TqM2gdF_kzDNgBnJchdayyT74PrJzlWHB4M3gP-K-ahlLYMCl9Fkh96fL8aucKgFOpp3Gikgx-RalYNGBHLYUpbeyinCaU1UPvGKTJfdMRSPD4crtMwSKdy3ht_FQkT2TrRvIg22PhRQRSf6E8Xr12SO4tDYfjqVSFqYmrrIXuR_LoguUfyITC_wm275hui0JgBCtZov5EhohwHs4W71ORqDtvysDDQ=w600-h600-no)

With the hardware and software working, we now come to what really matters. Why did we put all this stuff together?

🐙to learn to code

There is no better way to teach young children to code than [Scratch](https://scratch.mit.edu/).

> With Scratch, you can program your own interactive stories, games, and animations — and share your creations with others in the online community.
>
> Scratch is a project of the Lifelong Kindergarten Group at the MIT Media Lab. It is provided free of charge.
>
> -- Scratch About Page

[Lynda has a great intro to Scratch course](https://www.lynda.com/Scratch-tutorials/Scratch-Programming-Language-Basics/476623-2.html?srchtrk=index%3a1%0alinktypeid%3a2%0aq%3ascratch%0apage%3a1%0as%3arelevance%0asa%3atrue%0aproducttypeid%3a2) that the boys and I went through. It was a lot of fun. Some things we learned:

- patience
- backdrops and sprites
- animating objects
- reacting to events
- changing sprite costumes
- build a game
- share your game with other Scratch coders

![lynda](./scratch.png)

## Conclusion

My boys enjoyed the Raspberry Pi boot camp, we lovingly called **_Daddy Camp_**.

> Pro-tip: Anytime you do an activity with your children in the summer just add camp to the end of it. You'll feel like your saving money.

We did a lot during Daddy Camp:

- build a raspberry pi
- hook up the peripherals
- install an operating system
- learn to code in Scratch

It was a success and I could clearly see that my boys enjoyed building stuff. I want to instill a creator's heart in them.

Best of all, we spend quality time together.
