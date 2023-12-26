---
title: "You've Gotta Check Out SnowPack..."
description: "the most important step for any machine learning project"
pubDate: "January 1 2022"
type: "Dev"
heroImage: "https://res.cloudinary.com/practicaldev/image/fetch/s--Ja92Nd7f--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/w1uoelbsn0t3mwm6ubi2.png"
---

## Introduction

So like most 2020 developers I used to give 0 fucks about bundlers...

I mean **react/next/svelte takes care of it** for us right

but then, I started doing this course called [threejs journey](https://threejs-journey.com/) by [brunosimon](https://bruno-simon.com/) in which bruno makes us understand why bundlers are important

![node_modules meme](https://pbs.twimg.com/media/FH_p4ihUUAEAXSQ?format=jpg&name=900x900)
TL;DR helps client import node_modules files that are stored on the server

## WebPack

The world's most popular javascript bundler "webpack" has a bunch of disadvantages

1. It is pretty **complex**, for context and it took me 2 days to understand and be able to configure webpack on my own
2. It is kinda really **slow** cuz it rebuilds and rebundles the files for every change
   _[especially if you want to use typescript]_

### Here's Recordings of WebPack

Time to Initial Load: **35s**
{% youtube ZaX9vVwpEsA %}
Time to Load Changes: **20s**
{% youtube zaSyyna3RTI %}

## Enter Snowpack

Snowpackjs has a fundamentally different approach to bundling...
It builds each file and caches it for future use, while webpack rebuilds and rebundles every single time
![Help](https://www.snowpack.dev/img/snowpack-unbundled-example-3.png)

### Bonus

Snowpack is _**super easy** to configure_
here's the config I used in the below test

```
module.exports = {
  mount: {
    src: { url: "/" },
    public: { url: "/", static: true },
  },
};
```

it mounts files in src, public dir to "/" (root directory of served content)

### Here's Recordings of Snowpack

Time to Initial Load: **20s**
{% youtube L7sIkfxBHbg %}
Time to Load Changes: **14ms** 😱
![screenshot](https://pbs.twimg.com/media/FH_vdR2UUAIDtNp?format=jpg&name=900x900)

## Thanks

if you ❤️ this blog post... I'd ❤️ to tell you that this is the blogified version of the following thread
{% twitter 1477165287384305665 %}
