---
title: "Firebase Auth | Understanding The Auth"
description: "the most important step for any machine learning project"
pubDate: "July 13 2021"
type: "Dev"
heroImage: "https://res.cloudinary.com/practicaldev/image/fetch/s--5rRax6AX--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6zcfwcqa1ekb2hsz1v8j.png"
---

> NOTE: This blog post assumes that you are at-least familiar with setting up firebase SDK
> If you don't I'd recommend reading my blog on [firebase firestore](https://dev.to/lucidmach/the-20-firebase-that-ll-do-80-of-the-task-a-firestore-cheatsheet-304p) first

If you've built an application, you've probably had to deal with authentication and authorization

Contrary to Popular Belief
`authentication !== authorization`

## Difference Between Authentication and Authorization

Consider A School
![School](http://www.pngall.com/wp-content/uploads/2018/04/School-PNG-Pic.png)

The School has a Principal
![Principal](https://image.flaticon.com/icons/png/512/1999/1999321.png)
He Decides

1. If a Student Joins the School
2. If a Student Gets Debarred
3. If a Student Gets Promoted (Despite Failing Tests)
4. If a Student Gets Demoted
   ...

The School also has a Security Guard
![Security](https://image.flaticon.com/icons/png/512/2124/2124268.png)
He Decides

1. If/When a Person can Enter the Campus
2. If/When a Person can Leave the Campus
   ...

Now as an Analogy
`Authentication: Principal`
`Authorization: Security Guard`

## Authentication

### What is Authentication

The Process of Verifying the Identity of a User

### Steps in Authentication

3. Creating An Account
4. Verifying An Account Email Address
5. Login/Sign-In
6. Password Recovery
7. Sign Out

### Firebase Authentication

#### 1. Creating An Account

```
firebase.auth().createUserWithEmailAndPassword(
  email,
  password
);
```

> NOTE: You Receive a Promise from any Function from Firebase

#### 2. SignOut

```
firebase.auth().signOut()
```

> NOTE: Firebase removes the token stored on the client's localStorage (indexdb to be precise). It'll talk about it in detail in `Authorization`

#### 3. Login

```
firebase.auth().signInWithEmailAndPassword(
  email,
  password
)
```

#### 4. Verifying An Account Email

```
// sends a pre-templated message to a specified email address
firebase.auth().sendEmailVerification(
  email,
);
```

#### 5. Password Recovery

```
firebase.auth().sendPasswordResetEmail(
  email
);
```

## Authorization

### What is Authorization

The Process of Controlling Access to an Asset

### How Does Firebase Authorize

1. When Ever A User's Auth State Changes
1. It Updates A User Token
   > Very Similar To JWT but not restricted to web application
1. It Stores the Token in the browser's indexDB (and not in the cookies) so it has a more controllable timeline
1. If A Valid User Token is Present, A User is allowed to Access the Resource

#### Accessing User Token / Checking Auth State

```
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.uid;
  }
});
```
