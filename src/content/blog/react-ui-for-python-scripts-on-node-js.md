---
title: "React UI for Python Scripts on Node.JS"
description: "the most important step for any machine learning project"
pubDate: "August 5 2021"
heroImage: "/data-pre-processing/dataprepro.png"
---

If you are familiar with **node.js**, you know that it is

1. Ultra Fast ⚡
2. Ultra Scalable ⚖️
3. Ultra Powerful 💥
4. Ultra Simple 😁

and **python** has great **scientific computing libraries** [NumPy,Pandas,etc] _that make it the go to choice for academics, data scientists, deep learning engineers, etc_.

<hr/>

Some time ago, I wanted to _explore **computer vision**, something that I had been really fascinated_ for quite a while.

So I started learning CV and wrote _a python script that would take an **image** and **remove color channels** to make it look like as if a **color filter** had been applied to it_.

It was **super cool** and I wanted to make a fun little **website/webUI** out of it so I could **share** it to the rest of the **world**.

Being a self-taught _MERN Stack_ Developer, I started to research upon how one could _combine python and javascript_.

<hr/>

_A Week or Two Later_, I Did It.

And this blog is a documentation of how I solved this challenge.

I have also including here, the full code I used to deploy my application to **Heroku**
{% youtube i1QW52spBD4 %}
Live Deployment: [https://color-filter.netlify.app](https://color-filter.netlify.app)
Source Code: [https://github.com/LucidMach/ColorFilter](https://github.com/LucidMach/ColorFilter)

<hr/>

## How Does It Work

The Projecct has 4 phases

1. Webcam -> React -> NodeJS
2. NodeJS Py Child Process
3. Actual Python Program
4. NodeJS -> React -> Canvas

## Phase 1: Webcam -> React -> NodeJS

![P1](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8nq96ysu8k82w318mwn9.png)

We begin by first extracting an image from the webcam, we can use plain HTML5's `navigator.getUserMedia API` but there's an react package that simplifies the whole process.

```
yarn add react-webcam
```

we can use `getScreenshot({width: 1920, height: 1080})` to take a **1080p snapshot** of the user.

🔗: [React-WebCam Docs](https://www.npmjs.com/package/react-webcam)

Now that we have a snapshot (as a **base64** string), we've to send it to the server

> Any **browser** can **only** run **javascript** on the client, so we've to run **python on the server**

we make a post request

```
axios.post(url, { image: imageSrc, color: selectedColor })
```

> I also send the selected color, as I need it for the application that I'm building

**By default** the server(bodyParser middleware) **limits** the size of data it can get(post) to **1MB** and pictures are usually way big

> Unless you used an image optimizer like I did in a [previous project](https://github.com/LucidMach/Shrimkage)

Let's Push the Limits

```
app.use(bodyParser.json({ limit: "5mb" }));
```

Also we need to extract the image from the base64 string

Example base64 PNG String
`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKsAAADVCAMAAAAfHvCaAAAAGFBMVEVY`

Actual base64 Image
`iVBORw0KGgoAAAANSUhEUgAAAKsAAADVCAMAAAAfHvCaAAAAGFBMVEVY`

```
const base64Image = req.body.image.split(";base64,").pop();
```

## Phase 2: NodeJS Py Child Process

![P2](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0g69527yrxarpuz24uel.png)
Now that we have the image back on the server, we need to run the python script

If you've ever _passed parameters(**argv**) to a python script / built a CLI tool_, what we're going to be doing is very similar

Before that let's save the image temporarily cuz we can't pass images as argv(script parameter)

```
const fs = require("fs");

fs.writeFileSync("input/image.png", base64Image, { encoding: "base64" });
```

Now, we spawn a python child process
we do this my representing terminal commands to an array

```
const { spawn } = require("child_process");

const py = spawn("python", ["color-filter.py", body.color]);
```

Every python script probabily sends data back to the terminal/console

To read py console log, we create a callback function

```
var data2send

py.stdout.on("data", (data) => {
    data2send = data.toString();
});

console.log(data2send);
```

## Phase 3: Actual Python Program

![P3](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ogbqfc1nxltahppnlmn9.png)
The python script gets executed, in my case it's a numpy script that conditionally removes color channels

If you're interested you can check out the [source-code](https://github.com/LucidMach/ColorFilter) on github

## Phase 4: NodeJS -> React -> Canvas

![P4](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/sizrt30a4f3krm5csl9f.png)

now when the py child process terminates we need to encode the image back to base64 and send back a response

we can do that by latching a callback to when the child process ends

```
py.on("close", () => {
  // Adding Heading and converting image to base64
  const image = `data:image/png;base64,${fs.readFileSync("output/image.png", {
    encoding: "base64",
  })}`;

  // sending image to client
    res.json({ image });
  });
```

## BONUS PHASE: Heroku Deployment

This most important part of any project

It no longer only "works on your machine"
![wmm](https://img.devrant.com/devrant/rant/r_54040_zGEQB.jpg)

The process is basically the exact same as you deploy vanilla node apps + config for python childprocess

1. Standard Deploy Node to Heroku
   [Heroku Node App Deployment Docs](https://devcenter.heroku.com/articles/getting-started-with-nodejs)

2. Add Python Packages
   In the JavaScript World we have a `package.json` which tells every node instance all the packages required to run

We make something similar for python called `requirements.txt` to replicate that behavior.

It would look sorta like a `.gitignore` file

```
// requirements.txt

numpy
cv2
matplotlib
```

when Heroku notices the `requirements.txt` file it runs `pip install -r requirements.txt`, hence installing all the required packages

3. Configure Buildpacks
   [Heroku Node App Deployment Docs](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
   Here's the TL:DR; version

```
// terminal


// This command will set your default buildpack to Node.js
heroku buildpacks:set heroku/nodejs

// This command will set it up so that the Heroku Python buildpack will run first
heroku buildpacks:add --index 1 heroku/python
```

If You ❤️ This Blog Post
Be Sure To Drop a DM on [Twitter](https://twitter.com/lucidmach)

✌️,
LucidMach
