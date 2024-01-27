---
title: "Overcoming my DoomScrolling Addiction [Reels and Shorts]"
description: "configuring ublock orgin to treat 'reels' and 'shorts' as 'ads'"
pubDate: "January 26 2024"
type: "Misc"
heroImage: "/digital-minimalism/hero.png"
---

consider this...
you're working on a project that you've been pretty excited about for a while

now...
you are someone who keeps your phone on **battery saver/DND mode** when you're working but you forgot to this time...

and you get a notification on your phone

<center>

![img](https://static1.srcdn.com/wordpress/wp-content/uploads/2020/07/Instagram-notification.jpg)

</center>

it's from a childhood friend of yours, someone who you haven't had a conversation with for a while now

you reply to them and also **habitually** click on the "reels" icon

<center>

![5 mins](https://media.vlipsy.com/vlips/K4QjsNmc/preview-small.jpg)

</center>

BOOOM 180 minutes pass by and you remember you had something you wanted to work on

## You're not alone

I'm someone whose tried everything out there that didn't work to prevent this from happening again ranging from:

1. uninstalling insta [only to later eventually install it]
2. increase my willpower [failed miserably]
3. shifting to the web version [but needing to install it everytime I want to post something on stories]

all these attempts made me think deep on why this was happening and the answer was... the existence of this stupid little icon

<center>

![reels](https://user-images.githubusercontent.com/74430503/194645762-add49df5-1bc9-4a04-801f-2b32bcb79df3.png)

</center>

## Removing the Problem

I initially tried to see if I could make a mod APK where the whole reels section wouldn't be there but

<center>

![drag](https://media1.tenor.com/m/BiiTsQ_0j7AAAAAC/mendokusai-what-a-drag.gif)

</center>

and then I remembered how adblockers work... they identify ads in a website and not render them... so what if I could configure an adblocker to treat the icon as an ad

<center>

![shrugiee](https://image.spreadshirtmedia.net/image-server/v1/compositions/T6A1PA5835PT17X30Y120D157209553W24979H5975/views/1,width=550,height=550,appearanceId=1,backgroundColor=FFFFFF,noPt=true/shruggie-emoji-mens-t-shirt.jpg)

</center>

after surfing reddit for less than 3 minutes [at least in my head]... I found a someone who configured their ublock origin [the best adblocker] to treat youtube's shorts icon as an **ad**

## Implementing a Fix

I am a long term user of brave, and I knew that brave's inbuilt adblocker uses a lot of similar components of ublock origin...

so I went ahead to `brave://adblock`

<center>

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/p93wrjvhole7m98l9f0f.jpg)

</center>

and copy-pasted the following into custom filters

```
! Hide Reels Icon Desktop
instagram.com##a[href="/reels/"]:upward(3)

! Hide Reels Icon Mobile
instagram.com##a[href="/reels/"]
```

my instagram through brave didn't have the reels icon

<center>

![gta](https://i.imgflip.com/3wp5du.jpg?a473688)

</center>

> for a filter list to completely remove shorts copy-paste > this [list](https://github.com/LucidMach/brave-for-productivity)
