---
title: "Data Pre-Processing"
description: "the most important step for any machine learning project"
pubDate: "June 14 2022"
heroImage: "/data-pre-processing/dataprepro.png"
---

perhaps the only thing about machine learning that's more important than machine learning itself is **data pre-processing** 🙃

that's cuz as defined before machine learning is:

> the ~science~ math of **taking in real world info**, converting it into numbers and then ~finding~ learning a pattern out of it

and **info** out in the **real world** brings along with it, ton of **noise**

# Example Data from the Real World

as an advocate of learning by getting your hands dirty, here's an example

there's something called the **russel's circumplex**

<center>

![](https://psu.pb.unizin.org/app/uploads/sites/251/2020/12/Screen-Shot-2021-02-03-at-1.41.51-PM.png)
source: the pennsylvania state university

</center>

somthing that helps **quantify emotions**

> the ~science~ math of **taking in real world info**, converting it into numbers and then ~finding~ learning a pattern out of it

cuz ML algorithms learn **best** when the data they work with is **continuous numbers** instead of traditional encoded classification data like

<center>

![](/public/data-pre-processing/class-emotion.png)

</center>

while the **class-ified data** does represent numbers, the numberical value of a class **doesn't always accurately represent** an emotion, while _russel's model gives an activation and an plesentness value that are already intensities of an emotion_

# Unclean Data

let's say we find a dataset with paramenters we are looking for

<center>

![](/public/data-pre-processing/unclean.png)

</center>

here the column **pic** represents an 3d array of red, green and blue pixel values of an image containing an emotion and the rest are pretty straight forward

<center>

![](/public/data-pre-processing/image2layers.png)

</center>

## Step - 1 : Splitting The Data

the whole goal of training an ML model is so that we could us it to actively predict output on unseen data/situations. a simple way of doing that is

<center>

![](/public/data-pre-processing/splitting.png)

</center>

the remaining 20% can be used to value the performance of the model developed

## Step - 2 : Dealing with Missing Data

notice that there's some missing data in the age column,
so there are 2 common ways of dealing with that missing data

#### 1. deleting entire rows if a required column is missing

<center>

![](/public/data-pre-processing/delete.png)

</center>

_note: works great for super ultra large datasets but since **more data = better**_...

#### 2. substituting the middle value of the column (depends on type of data)

<center>

![](/public/data-pre-processing/middle.png)

</center>

## Step - 3 : Dealing with Class Data

many a times, the data in datasets is class data and encoded class data might not always accurately represent the intensity of a parameter

there are 2 common ways of dealing with class data, lets take the gender column

#### 1. one hot encoding

<center>

![](/public/data-pre-processing/one-hot-encoding.png)

</center>

when **one column** is split **into number of class** columns, like _gender has 2 classes_: male and female, so the _gender columns gets split into a male column and female column_

#### 2. label encoding

<center>

![](/public/data-pre-processing/label-encoding.png)

</center>

for columns with binary classes, like true or false, male or female, yes or no, etc so that one of the class label is replaced with 0 and the other with 1

## Step - 4 : Feature Scaling

different columns usually represent different parameters, and not all paraneters have the same proportion. assuming a dataset of age and height, the age column has a range of 1 to 100, while the height column perhaps has a range of 100cm to 200cm

when we plot these values without scaling em to the same range it would look like

<center>

![](/public/data-pre-processing/unscaled.png)

</center>

and let's say we tried to find a line that best fit through the points it would look like

<center>

![](/public/data-pre-processing/line-unscaled.png)

</center>

however if we scaled the inputs to the same range, it would look like this

<center>

![](/public/data-pre-processing/line-scaled.png)

</center>

which even from a glance we can tell that the line better represents a model to predict such data

now feature scaling is commonly done using 2 methods

1.  normalization
2.  standardization

<center>

![](/public/data-pre-processing/norm-vs-stand.png)

</center>

where x is the current input we want to scale, here's an example of normalization on the dataset we were working on

<center>

![](/public/data-pre-processing/normalization.png)

</center>

this leaves us with a ready for training dataset

<center>

![](/public/data-pre-processing/clean-training.png)

</center>

## Step - 5 : Dealing with the Testing Data

we've done a lot of pre-processing on the training dataset, and testing data is going to look like the unclean training data

so we've to remember to

1. replace missing data with the middle value of **training data**
2. encode class data to match the **training data**
3. feature scale using parameters of the **training data**

> you get the point we've use the exact **same operation tools** used on the **training dataset** for the operation we would be doing on the **testing dataset**

yuppp data people shouldn't become doctors 😝

![](/public/data-pre-processing/clean-testing.png)

and with that we have testing data that is ready to be taken for a ride in our ML model
