---
title: "The Battle of The NoSQL Databases | When To Use What"
description: "why machine learning is tough to get into"
pubDate: "June 19 2021"
type: "Dev"
heroImage: "/problem-with-ml.png"
---

Let’s start from the very beginning….

**What is a database?**

It’s just a base/place for data, it's as simple as that.

However, the bigger question is “why can’t you use something like an excel sheet to store data?”

The answer is yes you can **but** it depends more on what you’re trying to do

An **excel sheet** is **perfect** if **you**’re the **only person using**/updating the data, now when you scale up to **more than** say **3 people** (in different locations), try **to** have the excel file **store** the most **up-to-date** data as possible, you’ll see exactly why the **excel file** is a **terrible** idea.

**What are the different types of databases?**

Traditionally people used something called **Structured Query Language** (SQL, [🔊](https://emojipedia.org/speaker-high-volume/#:~:text=A%20speaker%20cone%20displayed%20with,to%20Emoji%201.0%20in%202015.): sequel), It basically created **commands** to do what you would to in an **excel table**.

example: if you wanted to insert a row into the table, instead of opening the table and manually entering values to the table, you would now do

    INSERT INTO table(column1, column2,...)

    VALUES (value1, value2,...);

TL;DR it kinda made excel programmable.

Present-day humanity, we have 2 main types of databases

1.  SQL: uses tables to store data

2.  NoSQL: uses key-value pairs to store data

![A Depiction of data in a NoSQL database](https://cdn-images-1.medium.com/max/2000/1*nmORrH0sI9zETbKi5SMwlQ.png)

Reading that you may be thinking why did humans bother to come up with NoSQL, it **seems easier** to **store** data in **tables** rather than in key-value pairs.

Well, on that you aren’t wrong, it is easier to store data in an SQL database disregarding the fact that you have to learn an entire language for it.

The **main problem** occurs when you’re looking to **scale** beyond 1000 people(ig), especially when the storage on the server(or pc in this case) is exhausted.

In **NoSQL**, you can do this very easily by **simply** just **splitting** data into n parts and **merging** it in **different systems** later,

unlike in **SQL** where **merging** is **complicated**, you have to create a pre-defined schema(**blueprint**), share the blueprint and then split data, not to mention ensure your **index** for each row is **unique** especially for the new data that you add.

**The Major Players in the NoSQL Battleground**

So for the average developer, while choosing a NoSQL database, typically has 2 choices:

1.  **Firestore**

2.  **MongoDB**

3.  … ( There is always a 3rd option, you just may not know what it is [😂](https://emojipedia.org/face-with-tears-of-joy/))

**Let’s Talk About MongoDB**

This is a pretty well-established database and it’s currently the database of choice for most people (excluding me), but that is obviously because they have their needs.

MongoDB came out in 2009, and it was basically the only noSQL database easily available for public use at that time.

That led to the butterfly effect that made it so well established, but that doesn’t explain why no other database has overthrown it yet.

Now, when mongoDB came it was an offline database (it wasn’t on the cloud), but as the times changed it adapted to the changes, actually the community (fans that use+love+live it) ensured it adapted to changes.

The community came up with mLabs, a cloud-based mongoDB database.

mLabs is what turned out to become the present day’s mongoDB atlas

**Let’s Talk About Firestore**

Firestore is the flagship database of google’s BaaS [backend as a service] (pre-coded/setup server)

**QuickNote**: Firebase runs on top of GCP google’s IaaS [infrastructure as a service] ( the server hardware, uncoded/setup)

Most people think firebase is the database (due to a common ending “base”), but NO, firebase is a backend and offers a lot of additional services like hosting, authentication and analytics.

That is firestore’s key selling point right now.

Easy to use, free ( as long as you are in the free-tier ), with a lot of additional features

**When To Use MongoDB over Firestore**

Firestore comes under firebase, where you have 0 control over what you can configure/host there.

**Use Case: **When you need a server, where you plan to have custom-built APIs like

1.  ML model

2.  APIs that serve sensor data [eg: open weather map, etc.]

In this case, you already have and are paying for computation resources, so it’s most economical to stick to 1 service.

You could:

1.  host a local mongoDB instance in the server.

2.  connected to the cloud-hosted mongoDB Altas cluster.

**When To Use Firestore over MongoDB**

When the only central(server) resource that you’re using is a database, it’s more beneficial to use than mongoDB.

**Use Cases:** an app or a SPA(client-rendered web app)

Lemme place more emphasis on using firebase if the only additional resources you need is a database.
