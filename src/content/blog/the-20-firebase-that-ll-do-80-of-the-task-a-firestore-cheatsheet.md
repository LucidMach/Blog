---
title: "Essential FireStore | CheatSheet/Tutorial"
description: "the most important step for any machine learning project"
pubDate: "June 20 2021"
type: "Dev"
heroImage: "/data-pre-processing/dataprepro.png"
---

In the [prequel to this blog](https://dev.to/lucidmach/the-battle-of-the-nosql-databases-when-to-use-what-1e2o), we took a look at the concept of databases (noSQL to be more specific).

> NOTE: FIRESTORE is a DATABASE as a Service(DaaS 😅), while FIREBASE is a BACKEND as a Service(BaaS)

In this blog, we’ll learn how to use firebase firestore in projects.
We’ll set up firestore as the database for a todo-list web app, without diving into the UI part [no HTML/JSX, CSS].

## Installation

The 1st thing to do before we jump in is obviously installing firebase and firestore.

We have 2 ways of doing this

1. **Browser:** adding firebase and firestore as links inside file.html

```
<head>
  <script src="[https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js](https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js)"></script>
  <script src="[https://www.gstatic.com/firebasejs/8.6.1/firebase-firestore.js](https://www.gstatic.com/firebasejs/8.6.1/firebase-firestore.js)"></script>
</head>
```

2. **Server**: install it through npm/yarn (if you use react/node.js)

```
// in the terminal
npm install firebase

// in a js file
const firebase = require("firebase");
require('firebase/auth');
require('firebase/database');
```

## Initializations

Now, that we’ve installed firebase, we’ve to connect it to the cloud(initialization).

This is done by copying API keys…, etc into the project.

You can get all the config details from the project settings page

![A ScreenShot of Configurations for Web](https://cdn-images-1.medium.com/max/3840/1*3eaKV6rYP63f570NVs1vqA.png)

To initialise firebase we paste the config into `<script>` or a javascript file

```
    const firebaseConfig = {
        apiKey: "AIzaSyBSABaeBTG4mteo-FrDtO-8qOIAxCX6yug",
        authDomain: "lucid-fireship-basics.firebaseapp.com",
        projectId: "lucid-fireship-basics",
        storageBucket: "lucid-fireship-basics.appspot.com",
        messagingSenderId: "316115989732",
        appId: "1:316115989732:web:935a8eefaca4bd9512a8f1",
        measurementId: "G-1V9QBWT3MG",
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
```

Now we make an instance of firestore into a variable, so we reduce a few keystrokes every time we interact with firestore [😂](https://emojipedia.org/face-with-tears-of-joy/)

`const db = firebase.firestore();`

before we can start doing anything with the database, we need to understand the data model (how data is stored in firestore)

## **Firestore Data Model**

Firestore see’s data as collections of documents, and a collection can store sub-collections too.

It’s like “file explorer”, you can create folders and store documents or folders in it.

> **ANALOGY:**
> collections = folders
> documents = files (eg: json)

![a idk what this is but i hope you're not reading this](https://cdn-images-1.medium.com/max/2000/0*K8FscB7M3IT3UbGT.png)

## **CRUD operations with firestore**

Now whenever we deal with any form of database, we can basically do 4 kinds of operations

1. **Create Documents**

1. **Read Documents**

1. **Update Documents**

1. **Delete Documents**

But before we can perform a CRUD operation, we need to select a collection to work with.

```
// to reduce a few keystokes to access the todos collection
const todos = db.collection("todos")
```

## 1. Create Documents

The documents stored would be converted to JSON so you’ve to follow an object-like structure.

> NOTE: if you’ve done some python, it’s like a dictionary in python

```
doc = {name:"clap this article"};
todos.add(doc);

// or
db.collection("todos").add({name:"clap this article"});
```

## 2. Read Documents

**2.1 To quickly get all the documents inside a collection.**

```
db.collection("todos").get().then(snapshot=>snapshot.docs.forEach(doc=>console.log(doc.data())))
```

now, that might seem complicated but its actually really simple

1. It takes a screenshot of the current state of collection

1. From the screenshot, we extract the docs stored in the collection

1. The forEach is a for loop that console logs data stored in every doc
   > NOTE: => is an syntax for [arrow function](https://www.w3schools.com/js/js_arrow_function.asp)

**2.2 To get a specific document.**

```
const docid = "sfdagerfkajilf";
db.collection("todos").doc(docid);
```

Now when we add a doc to a collection, firestore generates a random id and uses it as the name of a doc
To fetch a certain doc, we need to specify the id

## 3. Update Documents

While updating a document, we can

**3.1. Reset the Whole Document**

> when the document has only 1 key in the document(object), it doesn't matter which one you use

```
    db.collection("todos").doc("dagfshdjhkdfagsh").set({
      task1: "follow LucidMach on medium",
      task2: "share this article to everyone"
    });
```

**3.2. Modify a Part of the Document**

```
    db.collection("todos").doc("afdghrujfkhotdf").update({
      task2: "follow LucidMach on twitter"
    });
```

notice that, on using .update(), we only change the specified part of the document, so the unspecified doesn’t change,

so task1 remains as follow LucidMach on medium so don’t forget to do both of them 😜

## 4. Delete Documents

This operation is very similar to updating a document, you need to specify a doc id

`db.collection("todos").doc("afdghrujfkhotdf").delete()`

## **Final Words**

No, I’m not dying 😜, but if you’re reading this line,

I appreciate the time spent reading this post. I hope this helps/serves as a cheat sheet for whenever may you need it

✌, LucidMach

Come HangOut With Me

[Twitter](https://twitter.com/LucidMach)

[YouTube](https://www.youtube.com/channel/UCeiqLNsKT95FGM8obq1GH4g)

[Instagram](https://www.instagram.com/lucidmach/)
