---
title: 'Appreciating the "Learning Problem"'
description: "AI is all hype, but AI doesn't really know what it is doing and hence AI deserves appriciation"
pubDate: "Dec 28 2023"
type: "ML"
heroImage: "/appr-ml/hero.png"
---

so... let's play a game !!!

i'll show you a series of patterns, and each pattern maps to a value of either 0 or 1

<center>

![](/appr-ml/puzzle.png)

</center>

now consider this pattern, which number would this pattern map to?

<center>

![](/appr-ml/question.png)

</center>

if you said 0 you're probabily right

if you said 1 you're also probabily right

¯\\\_(ツ)\_/¯

the point here is that whatever your guess was...

1. you had no idea what each of the tiles represented
2. you had no idea what the co-relation between the tiles was
3. you had no idea what 0 or 1 represents

basically **you had no idea what you we're doing** and you find a pattern and make a (educated) guess

just like AI and this guy here

<center>

![](https://i.imgflip.com/2ji8hx.jpg?a473208)

</center>

> he has 0 understanding of what the puzzle means and what his guess means, but he made the correct guess

## The Learning Problem

the game we just played right now, is presicely what every **ML/DL/RL/AI** algorithm does

1. take data that has been cleaned/processed (into a puzzle)
2. find a pattern in the data
3. use the pattern on new data (it has never seen before)
4. hope it gets appriciated

but keep in mind that not every problem can be solved this way

because...

1. not every problem has (enough) data on it
2. not every data has a pattern in it

some of them also/already have a (not so) simple mathematical answer to them, you don't need rely to finding patterns

but for the rest, they can probabily (maybe not efficiently) be solved by having **a computer find a pattern** AKA **learning from data**

## How does a Computer Learn from Data

short answer, you solve the learning problem 😝

long answer to solve any **learning problem** (ML, DL, RL)👇

<center>

![](/appr-ml/learning-from-data.png)

</center>

1. **unknown solution:** think of this the true pattern/source of all the data we have
2. **training data:** data that we have collected and processed so a computer can find a pattern
3. **learning algorithm:** the actual algorithm that refines a model so the model learns from the data
   > eg: Perceptron Learning Algorithm, Backpropagation Algorithm, etc
4. **hypothesis set:** a set of all possible models that can find a solution
   > eg: Perceptron, Neural Networks, etc
5. **final hypothesis solution:** a pattern with the heighest accuracy

while this **IS** the long answer to solve any **learning problem**

this long answer lacks details...
the details which would be dealt with in the forthcoming blog articles
