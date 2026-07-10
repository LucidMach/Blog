---
title: "Unstitch: Designing the Tessellation System Behind the Future of Upcycling"
description: "as UI/UX designer and product engineer, I partnered with industrial designer Yi Jing Ang to build the digital half of Unstitch — a tessellation-based design system for upcycled fashion, and the thesis behind it."
pubDate: "Jul 11 2026"
type: "UX"
heroImage: "/unstitch/hero.jpg"
---

## A Random Wednesday

it started the way most interesting things start for me now... in a random discord server, on a random wednesday

someone posted in the server looking for anyone who could "do threejs stuff." her name was **Yi Jing Ang**, an industrial designer who mostly goes by Astra.

i don't know what it was exactly, maybe it was the vagueness of the ask, maybe it was just being in the right place at the right time, but i got excited. i said hi.

we got talking. a few messages in, we decided to just meet in person instead of continuing over text.

## The Idea

Yi Jing was prepping to exhibit at a Monash University showcase, and the idea was already fully formed by the time i heard it, which is more than i can say for most people who reach out about "threejs stuff." her framing, not mine: **90% of Australian textiles end up in the landfill or get shipped offshore.** the fashion industry's version of recycling mostly just delays the landfill trip.

her answer to that was **Unstitch**: cut old clothes down to one repeatable geometric unit, a tessellated tile, and let people build entirely new products, bags first, out of the offcuts. her line for it, and it's a good one: **"one square, endless possibilities."**

what got me was how deliberately this sat at, in her words, **"the intersection of design, mathematics and business."** this wasn't a craft-fair upcycling project. it was a proposed manufacturing system: an 8-stage circular production pipeline meant to take unwanted textiles in one end and configurable products out the other, built to be adaptable from community workshops to corporate supply chains. tessellation was the mechanism that made that possible. every piece of waste fabric is a different size, shape, and condition, so ordinarily every "upcycled" product ends up bespoke, slow, and expensive to make one at a time. cut it down to a standard unit instead, and you turn irregular waste into a building block you can design *systems* around. every bag still ends up a one-of-a-kind patchwork of someone else's old clothes, but the *process* of making one stops being a craft project and starts being a product line.

<center>

![one of the finished bags, built entirely out of tessellated fabric units](/unstitch/hero.jpg)

</center>

Yi Jing wanted someone to build a digital simulation of this whole system. that's where the threejs came in, and that's where i came in, to build the digital proof of a thesis she'd already worked out.

## Six Months of Coffee and Google Docs

what followed was about six months of meeting up, mostly coffee shops and campus corners, to figure out how to take her idea from "showcase exhibit" to something closer to a startup.

i went in expecting to write threejs and came out doing product design and business strategy instead, working alongside Yi Jing's own research into materials, manufacturing, and circular design. we talked pricing models, we talked about who the actual customer was (someone buying a bag? someone donating clothes? both, at different points in the same funnel?), we talked information architecture for a website that had to explain her system to a stranger in about ten seconds before they bounced. she owned the thesis and the physical system; i owned making the digital side hold up to the same standard.

she told me at some point that she was glad i turned out to be more than just an engineer, someone who cared about how the product looked and felt to use, not just whether the code ran. that's the distinction i try to design around now: writing the code is maybe a third of the job, the rest is deciding what the product should even be, in service of someone else's vision, not instead of it.

## The Iterations

we went through a lot of versions of a lot of things before anything felt right:

- a **landing page** that had to sell Yi Jing's tessellated upcycling system to someone who'd never heard of it
- an **EOI (expression of interest)** flow, since this was still pre-manufacturing and we needed to gauge real demand before committing to anything physical
- a **documentation journey** walking people through how a pile of old clothes actually becomes a bag, true to her 8-stage circular process
- a **collection page** for the work itself, so the physical prototypes had somewhere to live online

each of these went through multiple rounds of "does this actually make sense to someone seeing it for the first time." every review session we killed a feature or a page we personally thought was clever, because it didn't hold up against that question.

along the way the brand found its shape too: **Unstitch**, Yi Jing's name for the system, the logo distills the tessellated unit pattern into a single mark, and it even got its own mascot.

<center>

![Unstitch logo](/unstitch/logo.png)
![Unstitch mascot](/unstitch/mascot.png)

</center>

## Scanning the Bags

somewhere in the middle of all this i started playing with **gaussian splats** as a way to bring Yi Jing's physical prototypes into the digital world. instead of modelling the bags by hand, which would've meant losing all the irregularity and texture that makes upcycled fabric actually look upcycled, we scanned her real, hand-assembled totes and reconstructed them as splats.

the early scans were rough. reconstructing a soft, irregular, textured object like a felt-and-fabric tote is a much harder problem than scanning something rigid, most gaussian splatting pipelines are tuned for hard surfaces, not fuzzy tessellated wool.

<center>

![an early, mid-reconstruction gaussian splat scan of one of the tote prototypes, still full of holes and floating geometry](/unstitch/raw-scan.jpg)

</center>

that's an early pass, taken straight off the capture screen. getting from that to something clean enough to actually render in a browser took a lot of iteration on capture technique alone: lighting, camera paths, how many photos, how slow to move around the object.

## The Digital Playground

all of it, the pipeline, the prototypes, the brand, the splats, landed in what we ended up calling the digital playground: a threejs-based space where you can see the tessellated units and the bags they build up into the way you'd see them in person.

this is where Yi Jing's "one square, endless possibilities" thesis had to actually hold up as software. it's easy to say tessellation makes upcycled fashion scalable, it's a different thing to build an interface that lets someone configure a product out of standardized fabric units the same way they'd configure furniture or sneakers. the playground is the proof: a real, direct-manipulation configurator for a product category that's historically been one-off and un-configurable by design.

the tessellation motif doesn't just live in the product, it's load-bearing in the interface too. the site's own navigation is three diamond tiles that fall into place on load, "Home," "Work," "PlayGround", which is the same tessellated-unit shape the whole brand is built around, just repurposed as a nav bar. it's a small thing, but it means her idea is legible before you've read a word of copy.

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

none of that toolbar was as simple as the gif makes it look. undo/redo alone took multiple passes, our first version let you undo but not redo the same action afterward, which is a genuinely confusing thing to hit as a user and took a while to actually track down. folding had its own long tail of bugs: ghost tiles left behind after a fold, nodes that needed cleaning up mid-fold, and eventually root-node folding, where you select an arc on the base tile itself and fold from there, which needed its own prompt-to-select-an-arc flow and smooth transitions so the model didn't just pop between states. we capped version history at five moves rather than unbounded, added local-cache persistence so refreshing the page didn't nuke your work, and put a short "how to use this" hint directly in the playground rather than burying it in a docs page nobody would read before touching the tool.

we also swapped the original three.js loading screen for a lighter, sprite-based one after the showcase, partly for load performance, but also because a fancy 3D loader was exactly the kind of "we thought it was clever" feature that didn't earn its place. and we added a credits entry to the nav menu, a small thing, but the kind of small thing that matters: Yi Jing's name belongs on every surface of this product, not just the pitch deck.

## What This Taught Me

if you'd asked me a year ago what "product engineering" meant, i'd have said something about full-stack skills and shipping fast. i don't think that's wrong, but it's incomplete.

Unstitch is the project that turned that into a conviction, and it's Yi Jing's thesis, not mine, that made me believe it: tessellation isn't just a nice pattern for upcycled fashion, it's the mechanism that makes upcycling viable at any real scale. proving that took as much UI/UX design as it did engineering, and it took someone with her research into materials and circular manufacturing to give the digital work something true to actually prove. sitting in on the business conversations i wasn't technically needed for, caring about the words on a landing page as much as the render loop, building an interface that could stand in as evidence for someone else's vision, that's the work, not a side effect of it.

that's the version of "product engineer" i'm actually building toward: someone who can take somebody else's system, understand it well enough to earn a say in it, and help ship the version that proves it works. all credit for the "one square, endless possibilities" idea belongs to Yi Jing Ang, you can see more of her work at [yijingang.com](https://www.yijingang.com/).
