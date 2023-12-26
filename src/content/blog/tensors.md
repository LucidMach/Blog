---
title: 'The Fundamental "Building Block" of Machine Learning'
description: "the data structure that powers machine learning"
pubDate: "June 19 2023"
type: "ML"
heroImage: "/tensors/hero.png"
---

> the ~science~ math of taking in real world info, converting it into numbers and then ~finding~ learning a pattern out of it

there are 3 stages in any machine learning algorithm

<centre>

![](/tensors/3-steps.png)

</centre>

while the **real-world data** can have **any structure**,
in machine learning, the data is generally encoded/represented using a data structore called **tensor**

## what is a tensor?

> a tensor is an n-dimentional array where each dimension holds different parameters values for each value in the array

1. a scalar is a 0d tensor
2. an array is a 1d tensor
3. a matrix is a [2d tensor](https://ziro2mach.com/blog/matrix-multiplication)

## what do extra dimensions represent?

consider a matrix (or) **2d tensor**, think of a **matrix** to be an _excel/SQL **table**_

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

and so on...

## Tensors in Action

let's take an example:

a image for a computer vision focused machine learning model

<center>

![](/data-pre-processing/image2layers.png)
_image representation_
![](/tensors/img2tensor.png)
_image to tensor conversion_

</center>

this is a 3 dimensional tensor:

1. the **1st dimension** represents the **color channel**

2. the **2nd dimension** represents **rows** of pixels in each color channel

3. the **3rd dimension** represents the **individual pixels** in each row

> fun fact: google's machine learning framework is named tensorflow because each ML algorithm is a different flow of tensors 🤪

# 3 Important Attributes of a Tensor

now that we understand what tensors are, there are 3 important parameters of a tensor that you'll need to keep in mind while working with tensors

all 3 attributes are usually the causes for most errors you'll face as a machine/deep learning engineer

## 1. Shape

> the length of each dimension of arrays gives us the shape of a tensor

<center>

![](/tensors/ndim1.png)

</center>

so the lengths of the dimensions of the array are:

1. 3
2. height of the picture in pixels
3. width of the picture in pixels

so the shape of the tensor is **(3 x h x w)**

> important because the most common tensor operation (matrix multiplication) requires the tensors to be of certain shapes

## 2. Data Type

the data type of each of the element in the tensor, in pytorch it is usually float32 (or) a 32 bit float

some possible values:

1. float16
2. float32
3. float64

> important because tensor operations can only happen between compatible data typed tensors

## 3. Device

the device i,e processing unit where the tensor is stored.

possible values:

1. cpu
2. cuda (gpu)
3. mps (apple silicon gpu/neural engine )

> important because tensor operations can only happen between tensors living on the same device
