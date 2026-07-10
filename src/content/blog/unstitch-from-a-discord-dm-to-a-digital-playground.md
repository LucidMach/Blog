---
title: "Unstitch: Designing the Tessellation System Behind the Future of Upcycling"
description: "as UI/UX designer and product engineer on Unstitch, I helped turn a university showcase concept into a tessellation-based design system for upcycled fashion — a digital playground for a fundamentally new way to build products out of waste fabric."
pubDate: "Jul 11 2026"
type: "UX"
heroImage: "/unstitch/hero.jpg"
---

## A Random Wednesday

it started the way most interesting things start for me now... in a random discord server, on a random wednesday

a girl posted in the server looking for someone who could "do threejs stuff"

i don't know what it was exactly, maybe it was the vagueness of the ask, maybe it was just being in the right place at the right time, but i got excited. i said hi.

we got talking. a few messages in, we decided to just meet in person instead of continuing over text.

## The Idea

turns out she was prepping to exhibit at a university showcase. the concept: **upcycling old clothes into tessellated units** small, repeatable geometric pieces cut from fabric that used to be someone's jeans or shirt or bedsheet that could be woven together into entirely new items. bags, pouches, whatever you wanted to make out of them.

this is the part that actually got me excited, not the threejs. upcycling has always had a scale problem: every piece of waste fabric is a different size, shape, and condition, so every "upcycled" product ends up bespoke, slow, and expensive to make. tessellation solves that. by cutting everything down to a repeatable unit, you turn irregular waste into a standardized building block, something you can design *systems* around instead of one-off crafts. that's the actual unlock: tessellation is what makes upcycling composable, and composable is what makes it scalable. every bag still ends up a one-of-a-kind patchwork of someone else's old clothes, but the *process* of making one stops being a craft project and starts being a product line.

that reframing is what pulled me in as more than a threejs contractor. if the whole pitch is "tessellation turns waste into a design system," then the digital product has to prove that, not just render a bag.

<center>

![one of the finished bags, built entirely out of tessellated fabric units](/unstitch/hero.jpg)

</center>

she wanted someone to build a digital simulation of this whole process. that's where the threejs came in, and that's where i came in.

## Six Months of Coffee and Google Docs

what followed was about six months of meeting up, mostly coffee shops and campus corners, to figure out how to take this from "cool exhibition project" to something closer to a startup.

i went in expecting to write threejs and came out doing product design and business strategy instead, and that shift was deliberate, not incidental. tessellation is a systems idea, so someone had to actually own the system: the pricing model, who the customer even was (someone buying a bag? someone donating clothes? both, at different points in the same funnel?), and the information architecture for a website that had to explain a genuinely novel process to a stranger in about ten seconds before they bounced. nobody else on the project was going to make those calls, so i did.

she told me at some point that she was glad i turned out to be more than just an engineer, someone who cared about how the product looked and felt to use, not just whether the code ran. that's the distinction i try to design around now: writing the code is maybe a third of the job, the rest is deciding what the product should even be.

## The Iterations

we went through a lot of versions of a lot of things before anything felt right:

- a **landing page** that had to sell the idea of tessellated upcycling to someone who'd never heard of it
- an **EOI (expression of interest)** flow, since this was still pre-manufacturing and we needed to gauge real demand before committing to anything physical
- a **documentation journey** walking people through how a pile of old clothes actually becomes a bag
- a **collection page** for the work itself, so the physical prototypes had somewhere to live online

each of these went through multiple rounds of "does this actually make sense to someone seeing it for the first time." every review session we killed a feature or a page we personally thought was clever, because it didn't hold up against that question.

along the way the brand found its shape too: **Unstitch** the logo distills the tessellated unit pattern into a single mark, and it even got its own mascot.

<center>

![Unstitch logo](/unstitch/logo.png)
![Unstitch mascot](/unstitch/mascot.png)

</center>

## Scanning the Bags

somewhere in the middle of all this i started playing with **gaussian splats** as a way to bring the physical prototypes into the digital world. instead of modelling the bags by hand, which would've meant losing all the irregularity and texture that makes upcycled fabric actually look upcycled, we scanned the real bags and reconstructed them as splats.

the early scans were rough. reconstructing a soft, irregular, textured object like a felt-and-fabric tote is a much harder problem than scanning something rigid, most gaussian splatting pipelines are tuned for hard surfaces, not fuzzy tessellated wool.

<center>

![an early, mid-reconstruction gaussian splat scan of one of the tote prototypes, still full of holes and floating geometry](/unstitch/raw-scan.jpg)

</center>

that's an early pass, taken straight off the capture screen. getting from that to something clean enough to actually render in a browser took a lot of iteration on capture technique alone: lighting, camera paths, how many photos, how slow to move around the object.

## The Digital Playground

all of it, the pipeline, the prototypes, the brand, the splats, landed in what we ended up calling the digital playground: a threejs-based space where you can see the tessellated units and the bags they build up into the way you'd see them in person.

this is where the "upcycling as a design system" thesis had to actually hold up. it's easy to say tessellation makes upcycled fashion scalable, it's a different thing to build an interface that lets someone configure a product out of standardized fabric units the same way they'd configure furniture or sneakers. the playground is the proof: a real, direct-manipulation configurator for a product category that's historically been one-off and un-configurable by design.

the tessellation motif doesn't just live in the product, it's load-bearing in the interface too. the site's own navigation is three diamond tiles that fall into place on load, "Home," "Work," "PlayGround", which is the same tessellated-unit shape the whole brand is built around, just repurposed as a nav bar. it's a small thing, but it means the idea is legible before you've read a word of copy.

<center>

![the tessellated bag render dissolving into the Home / Work / PlayGround navigation tiles](/unstitch/home-nav.gif)

</center>

the playground itself is where that idea becomes a tool. it's an orthographic, top-down workspace where each tessellated unit is a draggable panel you can fold relative to its neighbour, dragging a fold-angle slider rotates the selected panel in real time and the numeric degree readout updates alongside it, so you're never guessing what "-52°" looks like before you commit to it.

<center>

![dragging the fold-angle slider to rotate a selected tessellated panel, with the live degree readout updating in real time](/unstitch/fold-slider.gif)

</center>

the part i'm most proud of, interaction-design-wise, is the history scrubber on the toolbar. undo/redo is table stakes, but we turned the history itself into a little dot-trail you can see and scrub through directly, and the destructive action (delete) only turns red and appears once there's actually something selected to delete. it's a small bit of restraint, don't show a trash can when there's nothing to throw away, that came directly out of one of those "does this make sense to someone seeing it for the first time" review sessions.

<center>

![the undo/redo toolbar with its dot-trail history scrubber, and the delete button appearing only when something is selected](/unstitch/history-toolbar.gif)

</center>

put together in the actual canvas, it looks like this: select a panel, drag the slider, watch the fold happen, scrub back through history if you don't like where it landed.

<center>

![the full playground canvas: selecting a tessellated panel, adjusting its fold angle, and stepping back through the undo history](/unstitch/playground-tool.gif)

</center>

## What This Taught Me

if you'd asked me a year ago what "product engineering" meant, i'd have said something about full-stack skills and shipping fast. i don't think that's wrong, but it's incomplete.

Unstitch is the project that turned that into a conviction: tessellation isn't just a nice pattern for upcycled fashion, it's the mechanism that makes upcycling viable at any real scale, and proving that took as much UI/UX design as it did engineering. sitting in on the business conversations i wasn't technically needed for, caring about the words on a landing page as much as the render loop, building an interface that could actually stand in as evidence for the whole business idea, that's the work, not a side effect of it.

that's the version of "product engineer" i'm actually building toward, someone who designs the system and ships it too.
