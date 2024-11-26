---
title: "How to build more intelligent AI"
description: "a breakdown on how Transformers work + explaining why AI is over rated + my thoughts on how to build more intelligent AI"
pubDate: "Oct 24 2024"
type: "ML"
heroImage: "/llms-wont-take-your-jobs/hero.png"
# views: 159
---

all LLMs are overhyped... chatGPT, perplexity, claude, llama3, mistral, mixtral and wizardLM2 [my favorite LLM btw]

## Part 0 : LLMs won't Take "YOUR" Job Away

not now, not anytime soon and definetely not by chatGPT

![GPTransformers](/llms-wont-take-your-jobs/gpt.png)

this is a ELi5 [explain like i'm 5] deep dive into how "Transformers" work

> remember all LLM are simply just most advanced "autocomplete" algorithms

<!-- ![prime](/llms-wont-take-your-jobs/prime.jpg) -->

<!-- no not these kinds of transformers... this kinda transformer 👇 -->

## Part 1 : How do Transformers Work

this guide is going to skip over the fundamentals of [how neural networks can learn almost anything...](/blog/viz-how-nn/)

> PS: I recommend you read [this blog post](/blog/viz-how-nn/) for an intuitive understanding of neural networks

Transformers have 3 major components:

![](/llms-wont-take-your-jobs/transformers.png)

### Embedding

all computer algorithms understand numbers... okay atleast numbers in binary

but whenever you interact with an LLM you talk in words... or tokens to be more precise

![](/llms-wont-take-your-jobs/tokens.png)

for the LLM to show any signs of intelligence... it needs to be able to understand relationships between 2 tokens and since computers are good with math we do this by plotting the tokens as vectors on a graph

![](/llms-wont-take-your-jobs/embedding.png)

> words with similar meaning have similar direction
>
> words with similar intensity have similar magnitute

now imagine having a pre-plotted graph for billions of tokens...

so for each token the transformer looks up the corresponding embedding

### Attention

if you've followed deep learning for even a while.. chances are you've heard of the famous google paper "Attention is all you need"

<center>

![](https://nlp.seas.harvard.edu/images/the-annotated-transformer_0_0.png)

</center>

in language, the meaning of the word often varies with the context that it is used in...

separately the term "a leap of faith" would have embeddings like

![](/llms-wont-take-your-jobs/a_leap_of_faith.png)

but clearly individual embeddings does not contain the whole scemantic meaning of the whole phrase

with some simple [matrix multiplication magic](/blog/matrix-multiplication.md) the transformer just concatinates the contextual meaning of the whole phrase into an embedded token

![](/llms-wont-take-your-jobs/aLeapOfFaith.png)

### Unembedding

now that the LLM has a contextual understanding of the phrase... next is using a classic statistical algorithm AKA neural networks which is trained on huge data to figure out

1. if or not will a next word be present
2. what could the next word be based on all the training data that it has seen

![](/llms-wont-take-your-jobs/unembedding.png)

LLM chatbots do this on prompt you give it... over and over until the next word the LLM predicts is a [NULL](https://www.reddit.com/r/learnprogramming/comments/1dw3gnc/what_is_null/)

## Part 2 - How does chatGPT helps me with my homework

if you think about it... after you've understood how transformers work... you might say that LLMs are basically just autocomplete

but you've gotten a lot of assistance from chatGPT... it knows how to solve every problem... it knows everything... or atleast it seems to know everything

lemme ask you a question...

![](/llms-wont-take-your-jobs/analogy.png)

let's say you wanted pizza (prompt) and you went to a pizzeria (chatGPT), which of below is most suited to be the LLM?

1. waiter
2. chef
3. raw food

<details>
<summary>Click for Answer</summary>
<br>
1. waiter is the LLM
<br>
2. chef doesn't belong in a pizzeria [eg: the blog author who wrote an article on question you asked chatGPT]
<br>
3. raw food is the enormous raw data available on the internet 
</details>

## Part 3 - How to build more intelligent AI

now that we have established that current state of the art AI - LLMs like chatGPT are basically autocomplete machines

> what is intelligence?
>
> the ability of a system/entity to make a mental map of every input it has experienced
> PS: maps have O(1) to lookup something

Humans possess intelligence across 21 dimensions [[Fun Fact: humans have 21 not 5 senses]](https://www.sensorytrust.org.uk/blog/how-many-senses-do-we-have).

Robots will max demonstrate intelligence in four dimensions [visual, auditory, textual and motor-encoding].

LLMs have only recently expanded to two dimensions [image and textual].

TL;DR research invested in **Embedding Systems** will give 100x returns
