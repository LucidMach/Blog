---
title: "How I Built a Meme Bot for Instagram"
description: "the most important step for any machine learning project"
pubDate: "July 17 2022"
type: "Dev"
heroImage: "https://res.cloudinary.com/practicaldev/image/fetch/s--Uk7tuMu8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/g18b2sintsiami63n4wo.png"
---

> **build** your own instagram bot from **scratch** (or) **set** one **up** in like **10s** for free

a brief overview of this blog post:
{% embed https://www.youtube.com/watch?v=Wr-6jx4DILA %}

## Introduction

Imagine you have a **cool meme page** on _instagram_ with about a **1M+ followers** and the best part - **you never** really need to **interfere** with it...
![for real](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/eefd4ew38ryyrfk6m5nk.png)

not kidding... but well _there sure is a **catch** here_ cuz otherwise 1M+ followers would not longer be a feat anymore:
![maji ka yo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xfqpvt01di70r4pnze17.png)

**any page** on instagram/social media in general has got **2 aspects** to it:

1. **content creation** 🎨
2. **marketing** 📢

this **bot** system has got your back **for content creation** and **you**'ve gotta take care of the **marketing** and making sure the page grows...

here's an example of a successfully automated meme page w/ poor marketing: [@taewonsu](https://www.instagram.com/taewonsu/)

and I've really gotta mention **I absolutely suck at marketing** and hence...
![treasure](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8pmo7xyan1vsfc6gx2vd.png)
and yea obviously [@taewonsu](https://www.instagram.com/taewonsu/) is my automated instagram meme page

---

## So What Exactly Does The Bot Do

doesn't matter if you're a human or a bot(AI), **creating memes** people ❤️ is **tough**

but... **there exists reddit**, the front page of the internet
![reddit](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0yradeckntcd0fzbsu1b.png)
this is where **memes first hit the internet** and then they _trickle down to instagram_/facebook/twitter/discord

and most **people** shamelessly just **steal memes** from **reddit** (i.e. they do not credit the original creator of the meme)

that however that doesn't apply to a **bot** so... it'll **will credit the original** `u/creator` of the meme and then just post the meme to our page
![big brain time](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/n5ns03l6l9nje84nu60b.png)

---

## Creating Your Own Bot

![Red Pill Blue Pill](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/avmp3hvp3imkifado5b4.png)

This is your last chance, after this there's no turning back.

1. you take the **blue pill...** I give you the easy way... **setting up a meme bot** from my source code.
2. you take the **red pill...** I show you how the bot works and how you can build your **bot from scratch**.

## Blue Pill

{% embed https://youtu.be/Q9vDaU8piKc %}

1. **clone** this repository off [github](https://github.com/LucidMach/taewonsu)
2. create an instance on **heroku** (or) whatever
3. **configure** the environment **variables** for your bot
4. **GG**

## Red Pill

the bot does 3 thing:

1. **scrape** for **top memes** of the **day** in the specified `r/subreddit`
2. **check** if a meme has been previously **posted**
3. **post** the **unique** memes to `instagram`

### 1. Scraping

working with reddit's API has been an absolute pleasure
![mua](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ivp6qn9a9lfadei6bmyt.png)
let's say the URL for top content in a subreddit say `r/animemes` is `https://www.reddit.com/r/Animemes/top/`

then the endpoint for the API would be `https://www.reddit.com/r/Animemes/top.json`

so fetching the top 3 memes of the day would be:

```
// fetching new memes from reddit
const res = await axios.get(`https://www.reddit.com/r/${subreddit}/top.json?limit=${top_x ? top_x : 3}`);
animemes = res.data.data.children;
```

### 2. Unique

when we're posting a bunch of meme's per day it'll be pretty likely that we may re-post something

so the bot maintains an hashmap, where the key is the `id` of the meme in reddit's database and the value is the meme data

when ever it gets a new meme, it quickly checks if the id exists in the hashmap, if it doesn't the bot posts the meme and then adds the meme to the hashmap

```
// fetching past memes
const raw_pa = fs.readFileSync(posted_animemes_location);
const posted_animemes: animeme_in_json = JSON.parse(raw_pa.toString());

// cross-referencing a new meme
if (posted_animemes[animeme.data.id]) {
  console.log("seen this!");
  return null;
}
```

### 3. Posting

while building the bot, I was pleasantly surprised at how less bug I was running into and I'm not gonna lie it did feal really good... and then instagram API happened
![regret](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/p94y4mkpk229yjvmfi5o.png)
interacting with instagram's API was an absolute pain in the ass... spent like 3 days and I still couldn't properly set up the access tokens required

luckily I found a god send [instagram-private-api](https://www.npmjs.com/package/instagram-private-api)

instagram-private-api is basically a **typescript** 🤩 wrapper over instagram's private API [the endpoints you'd find if you inspected the network panel of your browser's dev tools]
![network](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/x0be9f4x5r9xqhinnjr8.png)
instagram-private-api greatly sped up and made the developer experience just way more greater and I was able to implement the auto post to insta reletively quickly

```
// logging into instagram
try {
  const auth = await ig.account.login(ig_uname, ig_pass);
  if (!auth.pk) return "LOGIN FAILED";
} catch (error) {
  console.log(error);
  return "LOGIN BLOCKED";
}

// uploading an meme
try {
  const publishResult = await ig.publish.photo({
    file: imageBuffer,
    caption: `credits: u/${animeme_to_post.author}\n${animeme_to_post.title} ¯\\_(ツ)_/¯\n.\n.\n.\n.\n.\n#${hashtags}`,
  });
} catch (error) {
  console.log("work on fixing that image size thing you sucker");
}
```

the best thing here is since we're basically using instagram-private-api, instagram can't really recognize us a bot
![mission accomplished](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/omqo1itugbw2ip30ozek.png)

---

and that's how I built an automated instagram meme page from scratch

If You ❤️ This Blog Post
Be Sure To Drop a DM on [Twitter](https://twitter.com/lucidmach)

also here're all the links throughout the blog post
**og automated bot @taewonsu:** [https://www.instagram.com/taewonsu/](https://www.instagram.com/taewonsu/)
**source code on github:** [https://github.com/LucidMach/taewonsu](https://github.com/LucidMach/taewonsu)
**my twitter:** [https://twitter.com/lucidmach](https://twitter.com/lucidmach)

✌️,
LucidMach
