---
title: "The 20% Optimization That Improves 80% Web Performance"
description: "the most important step for any machine learning project"
pubDate: "July 27 2021"
type: "Dev"
heroImage: "/data-pre-processing/dataprepro.png"
---

In today's ultra fast paced world,
3 Seconds of a not-yet-loaded-website is more than enough for the user to click that close button
![3 secs](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/q7q0dmfz7u6tl0o6xu7i.png)

This is especially important if you're trying to build a web based startup.
Having an optimized website could lead to significantly more revenue

## Components of a WebSite

Anything on the Web has 3 main components

1. FrontEnd
2. BackEnd
3. Network

![Components](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/kcatsygvaziwho6m4gd0.png)
No Matter How Optimized the backend is (a common huge mistake kinda 😅)

End of the day it is the network that impacts 80% of a website's performance
![pareto](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5a969makrhacau9thdhb.png)
So by Pareto's Rule,
We focus on the **NETWORK**
![network](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pyb34cd0yiqn3imds01m.png) The network is what connects the _frontend_ to the _backend_.
Most sites make _**100s of requests** in the background_ as the site loads.

If each response carries a lot of data

1. The time for the data to reach the client increases
2. The time for each resource to render increases

`basically the website take forever to load`

### Solution

![Network](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/55d4nokjryu5t1be2tls.png)

1. Reduce the size of files by
1. Sending only what the user (and not the website needs) aka code splitting
1. Removing `whitespaces` or `uglifying` the file

> If you use webpack, this is automatically done for you
> **BONUS**: You could PWA and cache data on the client [But That Topic Is For Another Blog]

2. Reducing the size of images by optimizing them

## Reducing the size of images by optimizing them

### What does this mean?

We don't reduce the size by reducing resolution,
We reduce the size by reducing the scale of colors.

Let me explain,
![demo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/b5xqp4n2sbkwz24r5rca.png)
The human eye can't distinguish between #000000 and #010101.
So when we optimize images we're reducing the bits used to store color data of pixels

### How do we do that?

There are libraries that take care of this for us.

However we can't create a program to do this every time for every image so, I created a CLI Tool [My First CLI Application] called `Shirmkage` which stands for `shrink` + `image`.

You can check out/play around with the [source code](https://github.com/LucidMach/Shrimkage) on my github.

```
npm install -g shrimkage
```

Shrimkage makes optimizing images in bulk easy

You can use it directly in the terminal [that's what a CLI is tho 😅]

```
shrimkage folder
```

> The default level of reduction is 50 (/100). so if you want more optimization you can `shrimkage folder --level=10`

Shimkage also give you the option to apply optimizations to individual images

```
shrimkage file --path=./test.png
```

And That is The 20% Effort to gain an 80% increase in web performance
✌

If You ❤️ This,

Follow Me on [Twitter](https://twitter.com/LucidMach),

Where you can see updates on all my work [including blogs]

Also, Don't forget to DM Me
Let's have small dev talk
😁✌
