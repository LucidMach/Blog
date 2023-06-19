---
title: 'The Fundamental "Building Block" of Machine Learning'
description: "the data structure that powers machine learning"
pubDate: "June 19 2022"
heroImage: "/tensors/hero.png"
---

> the ~science~ math of taking in real world info, converting it into numbers and then ~finding~ learning a pattern out of it

there are 3 stages in any machine learning algorithm

<centre>

![](/tensors/3-steps.png)

</centre>

while the **real-world data** can have **any structure**,

machines require data to be encoded into numbers, this numberical encoding is a data structure called a **tensor**

> machine learning algorithms essentialy modify and process these tensors as they learn patterns from the data (tensors)

_for a little more reading on the concept of what n-dimensions represent, check out my previous blog post on [matrix (2d tensors) multiplication](https://ziro2mach.com/blog/matrix-multiplication/)_

> a tensor is an n-dimentional array where each dimension holds different parameters values for each value in the array

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

# 3 Important Attributes of a Tensor

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
