---
title: "Why is Matrix Multiplication Done the Way it is Done"
description: "the intution behind performing a matrix multiplication operation"
pubDate: "June 17 2022"
heroImage: "/matrix-multiplication/hero.png"
---

matrix multiplication is something we've all done at some point.
<br/>
while some of y'all still do stuff that require matrix multiplication, most of y'all don't

none the less if you're reading this you're curious why we do
<center>

![](/matrix-multiplication/matmul.png)

</center>

answering that would need some digging into the **concept of matrix(s)**

`spoiler: it's really intuitive once you remember that matrices represent something`


here's a video version of this blog post [https://youtu.be/hVZD4OvlV3w](https://youtu.be/hVZD4OvlV3w)

# what does a matrix represent?

a matrix is a **2d tensor**

> a tensor is an n-dimentional array that holds different values for different parameters of the array

pretty sure that definition doesn't help  but **think** of a **matrix** to be an *excel/SQL **table*** 

let's take an example:
list of items in my bag,
converting that from a table to a matrix would look like:
<center>

![](/matrix-multiplication/table-1d.png)

</center>

this is technically an **array**, but to make this a matrix, let's add one dimension i.e, parameter to the array 


<center>

![](/matrix-multiplication/table-2d.png)

</center>

***ohh this is the computer science representation of a matrix by the way***

the math representation is pretty straight forward, remove the tables and draw those brackets 👀


<center>

![](/matrix-multiplication/math-matrix.png)

</center>

# what about matrix multiplication?

just remembering that the matrix represents something and performing normal multiplication keeping in mind the parameters should make you intuitively perform that pattern

don't believe em?? let's run through an example

here's the distances Suraj and Arjun travelled in the months of jan, feb and march and here's the petrol prizes for the months 

<center>

![](/matrix-multiplication/info.png)

</center>

now calculate the total money spent on petrol by both Suraj and Arjun **without thinking about matrices**

<center>

![](/matrix-multiplication/total.png)

</center>

now try with the matrix multiplication method

<center>

![](/matrix-multiplication/matmul-tot.png)

</center>

this is also **why the inner dimensions have to match**, i,e they have to be the same parameters to make sense in terms of what we are multiplying

<center>

![](/matrix-multiplication/dims.png)

</center>

> @ is the symbol for matrix multiplication in python

and why the shape of the result is the outer dimension