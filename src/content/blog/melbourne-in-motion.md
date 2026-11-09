---
title: "Melbourne in Motion: a Digital Twin Born out of a Notion Hackathon"
description: "how a Best Technical Implementation win at the Notion x Vercel AI Agent Hackathon - a bi-directional Dijkstra router over Melbourne's GTFS + real-time PTV data - turned into a monochrome 3D digital twin of the whole transit network"
pubDate: "Nov 9 2026"
type: "Data"
heroImage: "/melbourne-in-motion/hero.gif"
---

## Every Melburnian's Villain Origin Story

if you've lived in Melbourne long enough, you've had this exact moment: you're standing on a platform, you checked the app, it said the train was "on time," and then it just... wasn't. no notification, no warning, nothing. you just stood there watching the countdown reset

every single Melburnian has a version of this story, usually about the one route they take every single day

so when **Vivek**, **Nathan**, **Karthick** and i sat down for the **Notion x Vercel AI Agent Hackathon** on Friday, 21 Aug 2026, we didn't have to brainstorm very hard for a problem worth solving

## The Pitch

the idea was simple to say and annoying to build: a feature inside Notion Calendar that actually understood your commute. not just "here's your 9am meeting," but "here's your 9am meeting, and the 86 tram you usually take is running 12 minutes late, so leave now instead of in 10"

calendars know when you need to be somewhere. they just have never bothered to ask how you're going to get there, or whether getting there today is going to go the way it usually does

## Teaching a Calendar to Read Timetables

getting from "wouldn't it be cool if" to an actual working feature meant building a full routing backend from scratch, in a weekend, on top of Melbourne's public transport network

<center>

![the finished digital twin: trains moving live along Melbourne's rail corridors, rendered over a monochrome extruded city model](/melbourne-in-motion/hero.gif)

</center>

we pulled in PTV's GTFS schedule data for the static shape of the network (stops, routes, timetables) and layered the real-time API on top of it for live vehicle positions and actual delays. to actually answer "what's my fastest way there, right now, accounting for what's currently running late," we implemented **bi-directional Dijkstra** over the whole network graph, searching outward from both the origin and the destination at once to cut down the search space on a graph that size

it was very much a proof of concept, held together by hackathon-grade duct tape, but it worked end to end, and it answered a question every Melburnian has silently screamed at their phone at least once

we walked away with **Best Technical Implementation**

## The Itch That Followed

the hackathon ended, the adrenaline wore off, but one part of the project wouldn't leave me alone: while we were building the routing engine, i'd thrown together some rough visualisations just to debug the thing, to actually *see* the graph search happening instead of staring at coordinates in a console

and it looked way cooler than a debug tool has any right to

so i kept going. what if, instead of a tiny debug view, there was a real digital twin of the entire PTV network? every train, every tram, moving live, rendered over an actual 3D model of the city

<center>

![every train and tram rendered live, moving along real street and rail geometry over Melbourne's CBD](/melbourne-in-motion/network-pulse.gif)

</center>

i put an embarrassing number of hours into this part specifically, the data visualisation and the feel of actually using it. extruded buildings, trees, landmarks, all in this quiet monochrome palette, with each line's trains and trams picked out in their real PTV colours, gliding along the actual road and rail geometry instead of some abstracted line graph. a time scrubber up top lets you pull the whole network back or forward through the day instead of only ever watching it live

## Line by Line, Train by Train

the whole point of a digital twin is that you can drill in, so that's what the UI is built around. the sidebar lists every metro line with how many trains are currently running on it, live. tap a line and it unfolds into its full ordered station list, interchanges and all

<center>

![the line sidebar expanding into a full station list, then a live train's info card with its line, proximity, service state, and trip ID](/melbourne-in-motion/line-explorer.gif)

</center>

tap an actual train or tram on the map and you get a live card for that specific vehicle: which line it's on, how far away it is, its current service state, its trip ID, plus a focus camera button that flies you to it and a highlight route button that traces its whole path across the city. it's the difference between looking at a network and being able to interrogate it

## Ask It Anything

you shouldn't have to already know a station's exact name to find it, so the search bar understands stations, stops, and landmarks interchangeably. type "southern cross" or "acmi" and it searches the whole transit network, shows a loading state while it works, and then flies the camera straight to the result

<center>

![typing "acmi" into the search bar, the network search loading, and the camera flying to the result](/melbourne-in-motion/search.gif)

</center>

## A Time Machine, Not Just a Map

a static snapshot of "the network right now" gets boring fast, and it also misses the whole point of a digital twin, which is that it should be able to show you *any* moment, not just this one. so the time readout up top doubles as a scrubber: drag it and you pull the entire network, every train, every tram, backward or forward through the day

drag it late enough and the little sun icon flips to a moon, the whole scene reading as night instead of just a label saying so

<center>

![dragging the time scrubber across the full day, the sun icon flipping to a moon past dusk, before settling back on a chosen hour](/melbourne-in-motion/time-scrubber.gif)

</center>

## The Bill Arrives

here's the problem: the thing that made this genuinely useful, the real-time delay-aware routing, the bi-directional Dijkstra engine querying live positions constantly, was also the thing that cost actual money to keep running. and this was never a project trying to make money, it was a hackathon prototype that grew a second head

the ironic part is that the expensive routing backend wasn't even what people reacted to most. everyone who saw this project lit up over the digital twin itself, the simulation, watching the whole city's transit network breathe in real time. that was the actual marketing leverage, not the Dijkstra implementation nobody but me cared about the internals of

so the honest move was obvious: keep the part people actually connect with, let go of the part i can't justify paying for indefinitely

## A Dream Called Notion Maps

if i let myself dream about where this could actually go, it's not "I host my own routing backend forever." it's Notion themselves picking this up, folding delay-aware commute intelligence directly into Notion Calendar, or going further and building something like a **Notion Maps**

that's a big dream for a weekend hackathon project, probably too big. but the hackathon proved the concept works, and the digital twin proved it's worth looking at. so for now it lives as what it honestly is

## What's Live Now

i stripped out the expensive moving parts, the live routing backend and the constant real-time API calls, and kept the digital twin: the simulation, the visualisation, the interaction design i'm genuinely proud of. deployed it the same way everything else of mine ends up live, my own GitHub plus Vercel

[check out Melbourne in Motion](https://melbourneinmotion.vercel.app/), the whole network, live, in your browser

[View on GitHub](https://github.com/LucidMach/Motion)

huge credit to **Vivek**, **Nathan**, and **Karthick** for building the original hackathon engine with me, this whole digital twin only exists because that weekend worked
