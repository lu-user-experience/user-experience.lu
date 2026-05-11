---
title: 'Everybody Rides a Bike. Nobody Knows How.'
description: "Don Norman's ideas didn't just influence design — they became invisible. And that invisibility is exactly the problem."
date: 2026-05-11
---

Think about the moment you learned to ride a bicycle. Someone probably held the back of the saddle. You wobbled. You fell. You got back on. And then — somewhere between the fear and the forward motion — something clicked. The bike stopped being an object you were fighting and became an extension of your body.

Now ask yourself: can you explain exactly how you balance on a bicycle?

Most people cannot. The knowledge is real — you can prove it every morning on your commute — but it is no longer accessible as knowledge. You’ve since forgotten the bruises, the fear, and the countless attempts. 

Now, it’s just something you do, without a second thought. Something similar happened to the design world and Don Norman.


The Man Who Named the Invisible
-------------------------------

In 1988, Donald Norman published _The Design of Everyday Things_. The book was a provocation disguised as a user manual. Norman argued that when people struggle with objects — a door that won't open, a stove dial that controls the wrong burner, a light switch that does nothing predictable — the fault is not with the people. It is with the design.

This was a radical idea at the time. Norman gave designers a new vocabulary: **affordances** (what an object communicates it can do), **signifiers** (signals that tell users where to act), **feedback** (responses that confirm an action worked), **constraints** (built-in limits that prevent wrong actions), **mappings** (logical relationships between controls and their effects), and perhaps most importantly for digital design, concepts like **learnability** — how quickly a new user can accomplish basic tasks — and **memorability** — whether a casual user can return to a product after a gap and still know what to do.

These weren't aesthetic preferences. They were cognitive principles rooted in how human perception and memory actually work. And they changed everything.

> The problem with truly good ideas is that they dissolve. They stop being ideas and start being air — everywhere, invisible, no longer attributed to anyone.


When an Idea Becomes Infrastructure
-----------------------------------

Over the following decade, Norman's concepts spread through design education, product teams, and software companies. They were taught in HCI programs. They were cited in usability research. They were written into style guides.

And then something strange happened: the citations disappeared. The source was forgotten. The vocabulary remained, but the reasoning behind it did not.

Norman himself revised the book in 2013, renaming "affordances" to "signifiers" to correct widespread misapplication — a sign that even his most cited concept had been distorted in transmission.

Today, if you walk into most product design teams and ask why the app has an onboarding flow, someone will say: "Because users need to learn how to use it." That is the Norman answer. But if you ask them what specifically _makes_ it learnable — what the cognitive theory behind that decision is, what they are actually calibrating for — the room goes quiet. The onboarding exists. The reason it exists has been forgotten.

This is what institutionalisation looks like. Not rejection. Not critique. Absorption without attribution. The idea becomes a practice. The practice becomes a default. The default becomes invisible. Nobody is wrong, exactly — they're applying the principle. But they're applying it on autopilot, without access to the underlying logic.


### 01 / Learnability

#### What it actually means

> A first-time user should be able to accomplish core tasks — not because they read documentation, but because the interface communicates its own logic.

_Just like riding a bike, you can learn it, with bruises or without._

### 02 / Memorability

#### What it actually means

> A returning user, after an absence, should be able to re-establish competence without relearning from scratch. The design carries memory for them.

_As with the bike, once you know how to ride, you remember, even after years._

### 03 / Affordance

#### What it actually means

> An object or interface element should communicate — through its form alone — what actions are possible with it. A button that looks tappable _is_ the signal.

_Two handles, two pedals and a saddle: each part invites its own action._

These are not checklists. They are lenses — ways of diagnosing design failures and making informed decisions. But stripped from their theoretical roots, they become, at best, cargo cult rituals.


The Implementations We Kept,  
the Ideas We Lost
------------------------------------------------

Walk through the outputs of modern UX practice and you find Norman's fingerprints everywhere — but rarely his reasoning.

### Onboarding flows

Onboarding is a Norman solution. It exists because learnability is not free — a new user needs their first encounter with a product to be scaffolded. But in the hands of modern growth-driven product teams, onboarding has been colonised by conversion metrics. Modal tooltips. Animated walkthroughs. Progress bars that say "You're 60% set up!" The question is no longer "does this help the user build a correct mental model?" The question is "does this increase activation rate?"

The implementation survived. The intention was quietly replaced.

### Error messages

Norman was emphatic about feedback — when something goes wrong, the system must tell the user what happened, why, and what to do next. Today, error handling is a UX discipline of its own. But the dominant practice is to soften error messages into emotional reassurance. "Oops! Something went wrong." "Hmm, we couldn't find that." The user feels held, briefly, then is left with no actual information. The message exists. 

The feedback principle it was meant to serve does not.

### Affordances and ghost buttons

Norman’s concept of affordance — the idea that design should visually communicate what actions are possible — has been systematically dismantled by the aesthetic preference for minimalism. Ghost buttons (outlines only, no fill), flat design with no depth cues, icon-only navigation bars with no labels, and links without underlines: all of these strip away the visual signals that tell a user “this is tappable, this is here for a reason.” 

The affordance has been designed out of them.

### Memorability and dark patterns

Memorability assumes a user who returns with goodwill. But modern apps are frequently redesigned not to remain memorable, but to re-engage. The subscription cancellation flow that is buried four layers deep. The cookie consent screen engineered to maximise accidental acceptance. The settings menu that moves with every update. 

These are Norman's principles, inverted — applied not to support the user's memory, but to exploit its limits.

#### Note on the bicycle

The bicycle analogy is precise in one uncomfortable way: when knowledge becomes embodied, we lose access to it under pressure. An experienced cyclist who falls will instinctively grab the handlebars and lean — correctly — without thinking. A designer who has absorbed Norman's vocabulary without its reasoning will, under deadline pressure, reach for the familiar pattern: add an onboarding tooltip, write a friendlier error message, simplify the visual design. The pattern fires. The reasoning doesn't.

The difference matters when the pattern doesn't fit. When a novel interface doesn't fit the template. When the error isn't a simple failure but a complex state. When the user isn't a novice encountering the product for the first time, but an expert who needs efficiency. Embodied knowledge fails in edge cases. Principled knowledge adapts.


How Modern UX Forgot What It Was Doing
--------------------------------------

There is a structural reason this happened, beyond ordinary forgetting. The professionalisation of UX coincided with the industrialisation of software product development. Design became a function. Functions are measured. Measurement demands proxies. And the proxies gradually became the goals.

Learnability became "time-to-activation." Memorability became "day-7 retention." Affordance became "click-through rate on primary CTA." These are not illegitimate measurements — but they are downstream effects, not root causes. Optimising for them without understanding the underlying principle is like training for a race by measuring your heart rate rather than your running mechanics. You'll optimise something. It might not be the right thing.

Meanwhile, design education shifted. Portfolio culture took over. The question students are trained to answer is not "what principle guided this decision?" but "what problem did this feature solve and how did you measure it?" The reasoning is subordinated to the narrative. The principle is never surfaced.

Norman's vocabulary is now part of the standard design lexicon — "we need better ~~affordances~~/signifiers here," "the learnability curve is too steep" — but the vocabulary is used decoratively, not analytically. Words that once carried precise cognitive meaning have softened into vibes.


> When everyone uses the word and no one can define it, the word is no longer doing cognitive work. It's doing social work — signalling membership in a group, not conveying an idea.


Why This Matters Now
--------------------

The stakes of forgotten reasoning have never been higher. The products being designed today are not door handles and light switches. They are medical interfaces, financial tools, social systems, AI interactions. The cost of a design that fails learnability isn't frustration with a teapot. It's a patient who misunderstands a dosage interface. A user who can't understand why an AI system behaved as it did. A voter who cannot confidently navigate a ballot.

And the new design challenges we face — voice interfaces, AI assistants, augmented reality overlays — don't have established pattern libraries to borrow from. The templates don't exist yet. This is precisely the territory where you cannot ride on muscle memory. You need the principle, not the implementation.

How do you signal affordance in a voice interface, where there is no visual form? How do you build learnability into an AI assistant whose responses are inherently unpredictable? How do you support memorability in an AR overlay that vanishes when you blink? These questions cannot be answered by reaching for an onboarding modal or a friendlier error message. They require the underlying reasoning — Norman's original questions — reapplied from scratch.

Reclaiming the Source
---------------------

There is a practice in certain martial arts traditions of deliberately slowing down a mastered movement — returning to beginner form not because the master has forgotten, but because re-accessing the reasoning behind the movement sharpens what muscle memory smooths over. The principle is recovered by practising at the level of intentionality.

Something similar is available to designers. Not a rejection of pattern libraries and component systems — these are useful, and Don Norman himself would say so — but a discipline of tracing each pattern back to its principle. When you add an onboarding flow: why, specifically? What mental model are you building? How will you know if it worked? When you write an error message: what information does the user actually need, and what do you gain by softening it into warmth?

The question is not "what does our design system say?" but "what does a user's cognition require?" That is the Norman question. It was always the Norman question. It just got absorbed into the furniture.

You probably learned to ride a bicycle between the ages of four and eight. You have not forgotten how. But ask yourself: do you know _why_ you lean into a turn instead of away from it? Could you teach the physics to someone who'd never tried? Could you apply those same principles to riding a unicycle, or navigating a cargo bike, or steering in icy conditions?

That is what principles are for. Not the common case. 

But the unfamiliar one.