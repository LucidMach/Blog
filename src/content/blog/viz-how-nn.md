---
title: "How Neurons Network to Learn (almost) Anything"
description: "a breakdown on why Neural Networks can learn almost anything according to universal approximation theorem"
pubDate: "Feb 28 2024"
type: "ML"
heroImage: "/viz-how-nn/hero.png"
---

so... neural networks are now at the core of every cool new AI product from "vizcom" to "stable diffusion" to "chatgpt" to "sora" to "gemini" and the reason for that is **Neural Networks can Learn (almost) Anything**

this blog post is intended to be a breakdown on the **how**, which involves diving into understanding how neurons form networks to learn. Most "How do Neural Network Work" resourses online focus on explaining backpropagation, understandable because backprop is pretty complication to get your head wrapped around

# So How do Neural Networks Learn

there are 3 pieces you'll need to understand to understand how neural networks learn

1. Neurons
1. How Neurons Network to Learn [Universal Approximation Theorem]
1. Backpropagation

## Neurons

y'all prolly already know this pretty well so i'm going to skim through ASAP

<center>

![neuron](/viz-how-nn/nn.png)

</center>

> note: b is basically w0

a neuron is a mathematical model designed to make decisions in a very similar fashion to the biological neuron, There are 3 things you **need** to know about it

1. **input**: _sums up_ all of it's _input values_
2. **activation function**: a function that _activates_ the neuron's _decision_ when the sum of inputs _crosses a threshold_
3. **output**: the decision on the neuron, 1 implies yes, 0 implies no
4. **weights**: the importance a input to a neuron
5. **bias**: the importance of the neuron in the network

<center>

![neuron](/viz-how-nn/formula.png)

</center>

> there's a lot of cool things to discuss when it comes to the intution behind activation functions, a separate blog post on it maybe....

# How Neurons Network to Learn

let's try to understand what actually happens when 2 neurons form a network, and how they learn...

<center>

![neuron](/viz-how-nn/nn.png)
a neuron (a visual representation)

</center>

this is a neuron as we know it, but actually it is better to look at it as the graph of the function it represents

<center>

![neuron](/viz-how-nn/formula.png)
a neuron (the function it represents)

assuming g(x) is a step function
![neuron](/viz-how-nn/nn-graph.png)
a neuron (the graph output of the function it represents)

</center>

## What Happens When 2 Neurons form a Network

assume 2 neurons with a step activation function

<center>

![neuron](/viz-how-nn/n1,n2.png)

</center>

now let's try to visualize a neural network out of these 2 neurons... we can do this by introducing another neuron

<center>

![neuron](/viz-how-nn/n1+n2.png)

</center>

we can control the output of the network by tweaking the value of w11 and w21

let's say b = 0 for simplicity purposes

<center>

![neuron](/viz-how-nn/1+1.png)
w11 = 1, w21 = 1 just adds both the graphs based on the principle of superposition
![neuron](/viz-how-nn/1-1.png)
w21 = -1 inverts the graphs from neuron2 and adds the graph of neuron1 based on the principle of superposition
![neuron](/viz-how-nn/-1+1.png)
w11 = -1 inverts the graphs from neuron1 and adds the graph of neuron2 based on the principle of superposition

</center>

> note: weight value basically just scales the function of a neuron

<details>
<summary>try drawing the graph for w11 = 1.5 and w21 = -0.5 <span class="font-bold">[click to reveal answer]</span></summary>

![neuron](/viz-how-nn/hw.png)

</details>

so when neural networks learn patterns, what they do that is, tweaking each the weights and biases of neuron so that the graph output traces the pattern to be learnt

in essense when neural networks learn they're slowly trying to approximate functions

<center>

![UAF GIF](/viz-how-nn/UAF.gif)

[Credits: Hugo Mougard on YouTube](https://youtu.be/Ln8pV1AXAgQ)

</center>

this way, neural networks can learn anything by **approximately** tracing the mathematical representation of what we're trying to teach the network...

> a neural network with at least one hidden layer of a sufficient number of neurons, and a non-linear activation function can approximate any continuous function to an arbitrary level of accuracy

# Back Propagation

the final piece in grasping neural networks...
with UAT, we understood what/how tweaking weights and biases help the neural network learn any pattern

now with Back Propagation, we shall understand how a neural network automatically tweaks it's own weights and biases to learn the pattern
