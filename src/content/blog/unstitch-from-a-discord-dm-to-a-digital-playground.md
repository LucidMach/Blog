---
title: "Unstitch: Revolutionising Upcycling with Tessellation"
description: "UI/UX design, product engineering, business strategy, and a 3D immersive web experience, all in service of Yi Jing Ang's tessellation-based design system for upcycled fashion."
pubDate: "Jul 11 2026"
type: "UX"
heroImage: "/unstitch/hero.jpg"
---

## One Square, Endless Possibilities

**90% of Australian textiles end up in the landfill or get shipped offshore.** most "recycled" fashion just delays that trip by a few years, it doesn't actually stop it.

<center>

![one of the finished bags, built entirely out of tessellated fabric units](/unstitch/hero.jpg)

</center>

I met Yi Jing on a random wednesday through a friend, she'd been looking for someone who could build a 3D web experiences. she wanted someone to build a digital playground / simulation of a concept she was play around and testing - cutting old cloths into tessalted unit that can join up to form new cloth items

| think lego but with fabric

that's where the threejs came in, and that's how I came in.

## Six Months of Coffee

what followed was about six months of meeting up, mostly libraries and campus corners, trying to take her idea from "cool showcase exhibit" to something that can make us actual money.

I went in expecting to write threejs and but mostly ended up doing a lot of product design and business strategy instead which, while was not what I signed up for... but I had so much fun and learnings. it was her idea and her research into materials and manufacturing, I just tried to make sure the business and the digital side around could hold up, excite and hook people into our ambitions.

she told me at some point that she was glad I turned out to be more than just an engineer, someone who actually cared how the product felt to use and not just whether the code ran.

## The Iterations

we went through a lot of versions of a lot of things before anything felt right:

- a **landing page** that had to explain tessellated upcycling to someone who'd genuinely never heard of it before
- an **EOI (expression of interest)** flow, since this was still pre-manufacturing and we needed real demand signal before committing to anything physical
- a **documentation journey** walking people through how a pile of old clothes actually becomes a bag
- a **collection page** for the work itself, by people who tried out our prototypes... the interesting things they built - the physical creations of our community.

each of these went through a bunch of rounds of "does this actually make sense to someone seeing it for the first time." we killed features and whole pages we personally thought were clever more than once, because they didn't hold up against that one question.

along the way the brand found its shape too, **Unstitch**, the logo distills the tessellated unit pattern into a single mark, and it even got its own mascot.

<center>

![Unstitch logo](/unstitch/logo.png)
![Unstitch mascot](/unstitch/mascot.png)

</center>

## Scanning the Bags

somewhere in the middle of all this I started playing with **gaussian splats** as a way to bring Yi Jing's physical prototypes into the digital world. modelling the bags by hand would've taken soo long and not to mention loosing all the irregularity and texture that makes upcycled fabric feel, so instead we scanned her real, hand-assembled totes and reconstructed them as splats.

the early scans were rough, like really rough. reconstructing a soft, irregular, textured object like a felt-and-fabric tote is a much harder problem than scanning something rigid, most gaussian splatting pipelines are tuned for hard surfaces, not fuzzy tessellated wool.

<center>

![an early, mid-reconstruction gaussian splat scan of one of the tote prototypes, still full of holes and floating geometry](/unstitch/raw-scan.jpg)

</center>

## The Navigation

One thing I'm really proud of / think is really clever is the navigation system on our website... which inherently gets the user used to the idea of the tessellation way before they are introduced to it.

<center>

![the tessellated bag render dissolving into the Home / Work / PlayGround navigation tiles](/unstitch/home-nav.gif)

</center>

## The Digital Playground

all of it, the pipeline, the prototypes, the brand, the splats, landed in what we ended up calling the digital playground: a threejs-based space where you can see the tessellated units and construct the bags into any shape and dimension you can imagine... ofc this whole process would be soo much more fun and different in real life but the digital playground would be quick hook to loop our potential customers into our ecosystem

<center>

![dragging the fold-angle slider to rotate a selected tessellated panel, with the live degree readout updating in real time](/unstitch/fold-slider.gif)

</center>

another part I'm most proud of, interaction-design-wise, is the history scrubber on the toolbar. undo/redo is table stakes, sure, but we turned the history itself into a little dot-trail you can see and scrub through directly, and the delete button only turns red and shows up once there's actually something selected to delete. small bit of restraint, don't show someone a trash can when there's nothing to throw away, and it came directly out of one of those "does this actually make sense to someone seeing it for the first time" sessions.

<center>

![the undo/redo toolbar with its dot-trail history scrubber, and the delete button appearing only when something is selected](/unstitch/history-toolbar.gif)

</center>

put together in the actual canvas, it looks like this: select a panel, drag the slider, watch the fold happen, scrub back through history if you don't like where it landed.

<center>

![the full playground canvas: selecting a tessellated panel, adjusting its fold angle, and stepping back through the undo history](/unstitch/playground-tool.gif)

</center>

none of that toolbar was anywhere near as simple as the gif makes it look, ngl. undo/redo alone took a few passes, our first version let you undo but not redo the same action afterward, which is a genuinely confusing thing to run into as a user and took way longer than it should've to track down. folding had its own long tail of bugs: ghost tiles left behind after a fold, nodes that needed cleaning up mid-fold, and eventually root-node folding, where you select an arc on the base tile itself and fold from there, which needed its own prompt-to-select-an-arc flow plus smooth transitions so the model didn't just pop between states. we capped version history at five moves instead of going unbounded, added local-cache persistence so refreshing the page didn't nuke your work, and stuck a short "how to use this" hint directly in the playground instead of burying it in a docs page nobody would read before touching the tool.

we also swapped the original three.js loading screen for a lighter, sprite-based one after the showcase, partly for load performance, and partly because a fancy 3D loader was exactly the kind of "we thought it was clever" feature that didn't earn its place. and we added a credits entry to the nav menu, small thing, but Yi Jing's name belongs on every surface of this product, not just the pitch deck.

## What This Taught Me

if you'd asked me a year ago what "product engineering" meant, I'd have said something about full-stack skills and shipping fast. I don't think that's wrong, it's just incomplete.

Unstitch is the project where I actually felt all four parts of the job at once: whether it looks and feels right (UI/UX), whether it holds up as software (engineering), whether it makes sense as a business someone could actually fund and run (the pricing, the funnel, the EOI logic), and whether the 3D web experience does its one job of making an untested idea feel real before a single unit gets manufactured. none of those four are optional if you're trying to prove a concept like this actually works, and honestly it was a good reminder that the ideas I'm proudest to have built for aren't always mine. sometimes the job is just helping someone else's idea hold up, across all four of those, as well in software as it already does on paper.

all credit for "one square, endless possibilities" goes to Yi Jing Ang, go check out more of her work at [yijingang.com](https://www.yijingang.com/) 🧵
