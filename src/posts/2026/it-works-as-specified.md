---
title: "It Works As Specified (And Nobody Can Use It)"
description: "Most product disagreements aren't really about the product. They're about an unspoken philosophical disagreement over what software fundamentally is — and one of the two 'worldviews' is a comfortable fiction that mostly fails and gets praised for it anyway."
date: 2026-06-05
---

A few years ago I watched a colleague build a CRM. He scoped it carefully. He chose the platform, negotiated the licenses — expensive ones — configured the workflows, integrated it cleanly with the existing stack, and delivered on time. The project closed green. He was praised in the all-hands. Management moved on to the next initiative.

Nobody used it.

Not "adoption was slow." Not "we're still iterating on onboarding." Nobody. Used. It. The sales team kept their spreadsheets. The account managers kept their inboxes. The licenses renewed automatically for another year, and then another. Management didn't have time to promote it. The users it had ostensibly been built for either didn't exist yet or had no reason to abandon their existing workflow. And here's the part that still bothers me: by the standards his organization used to evaluate engineers, my colleague had done excellent work. He'd taken a requirement, translated it into a working system, shipped on schedule, stayed within budget. If you'd asked him whether the project was a success, he would have said yes — and he would have been right, given his definition of success.

If you'd asked whether the company got any value out of it, the answer was no — and that would also have been right, given a different definition.

Both answers were true at the same time.

## The Project That Worked And Got Punished For It

Years later I led a different kind of project. We took our time with it. We tested with real users before we shipped, redesigned things that didn't work the first time, and made it accessible in ways that weren't strictly required but mattered. When we finally launched, people used it. The support queue stayed quiet. The thing did what it was supposed to do, for the people it was supposed to do it for.

Management was unhappy.

Not because the project failed — by every measure I cared about, it had worked. They were unhappy because it had been late, and because somewhere along the way they had felt like they'd lost control of it. The fact that we'd come in under budget didn't seem to register. The fact that it was being used didn't change the conversation. What got remembered was the slipped timeline and the feeling of opacity.

Both projects taught me the same thing, from opposite directions. The CRM was praised because it ticked the boxes that were easy to see. This one was criticized because it didn't tick those same boxes — even though it had quietly done the harder thing underneath. The boxes were the same in both cases. The reality the boxes were measuring was not.

## Two Worldviews

Most product disagreements aren't really about the product. They're about an unspoken philosophical disagreement over what software fundamentally *is*. Until teams name this divide explicitly, they keep talking past each other in retros, sprint planning, and design reviews — each side convinced the other is being unreasonable.

There are two worldviews at work.

The first treats software as an evolving conversation. Requirements are incomplete and often misunderstood. Users don't fully know what they want until they interact with something concrete. Iteration, prototypes, usability testing, and feedback loops aren't overhead — they're how the requirements are *discovered*. The product includes the experience of using it, not just the implementation. This mindset lives in agile development, human-centered design, product design, lean startup thinking, and UX research.

The second treats software as specification fulfillment. The goal is correctness relative to the request. If users struggle, that's a separate problem, possibly outside the scope. Usability is secondary to precision, architecture, performance, or conceptual purity. A product is "done" if it matches the stated requirements. This mindset lives in traditional engineering cultures, contract and specification-driven development, large enterprise IT, and technically purist cultures.

This is the frame the industry uses to talk about itself. Two valid traditions, each with strengths and weaknesses, the wisdom being to integrate them. It's the frame I was going to give you. It's the frame most posts on this topic give you.

I want to keep it in your head for a few more sections, because the actual argument of this post requires you to first see why the frame is reassuring — and then watch it break.

## What Each Side Is Afraid Of

The reason these worldviews collide so hard is that each is defending against a real failure mode it has seen up close.

The iterative camp has watched teams ship technically perfect products that nobody wanted. They've seen engineering teams build elegant systems answering questions no user was asking, then act surprised when the thing sat unused. They fear hidden assumptions, brittle requirements, and the slow horror of finishing a project and realizing the whole premise was wrong.

The specification camp has watched something equally painful — teams iterating forever, chasing every piece of subjective feedback, losing architectural coherence with each pivot, until what ships is a tangle nobody can maintain and nobody fully understands. They fear scope drift, design by committee, and the slow corrosion of technical integrity by a thousand small accommodations.

Both fears are legitimate.

## The Translation Problem

Once you see the split, the daily friction makes sense. The same sentences mean different things to different people.

The designer says, "users can't use this." What they mean is that the product, in the only sense of the word that matters to them, doesn't work. What the engineer hears is, "you failed technically." Which is offensive, because by the engineer's definition of the product, it works exactly as specified.

The engineer says, "it does exactly what was requested." What they mean is that they delivered on the contract they were given. What the designer hears is, "I don't care whether humans succeed with this." Which is offensive, because by the designer's definition of the product, the humans *are* the point.

Neither person said what the other heard. But neither person can quite explain why they're so frustrated, because the disagreement they're actually having lives one level deeper than the conversation they're actually having.


## The Frame Is Wrong

Here's the thing nobody likes to say out loud: **software-as-conversation isn't one of two equally valid worldviews. It's the only one that has ever actually worked.**

The specification worldview is a story. It's the story organizations tell themselves about how rigorous software gets built. The story is comforting because it implies that you can define the thing in advance, hand it down, and get back what you ordered — that the hard, messy, expensive work of discovering what's actually needed can be skipped by being disciplined enough at the start.

In practice, this almost never produces software that works. It produces Hertz vs Accenture — a years-long, hundreds-of-millions-of-dollars enterprise project that ended in litigation, where the dispute was essentially about whether the delivered software matched the specification, which is exactly the wrong question because the specification itself was the failure. It produces the long catalog of failed government IT rollouts. It produces my colleague's CRM. The pattern is so consistent that we have an entire genre of post-mortem journalism devoted to it, and every entry in the genre tells the same story: requirements were defined, requirements were met, the software was useless, everyone involved disclaimed responsibility.

"I built what was specified" is not a defense. It is the defining sentence of an entire mode of professional abdication. The engineer's version is "I built what was specified." The consultancy's version is "we delivered against the statement of work." The manager's version is "the project closed green." All three are the same sentence: *I did my job, the failure is somebody else's.* The remarkable thing about this sentence is that, inside the organization, it usually works. Everyone who said it gets paid. Everyone who said it gets promoted. The only party harmed is the company itself, or the user, or whoever actually needed the software to do something useful — and those parties usually have no seat at the table when the project is declared a success.

What I called "specification fulfillment" earlier in this post isn't a philosophy of engineering. It's an organizational arrangement in which responsibility for whether-the-thing-works has been distributed so thinly that nobody owns it. The "worldview" framing is the ideological cover. It lets people who are doing harm describe their work as principled.

## The Awkward Example

If you want to know how powerful software-as-conversation actually is, look at the most successful application of it in human history: the social media feed.

Big tech does not write specifications and hand them to engineers. Big tech runs the tightest, fastest, most ruthless iterative loop ever built. Every interaction is feedback. Every scroll, every pause, every tap, every moment of attention is data flowing back into a system that adjusts itself in response, billions of times per day, across billions of users. The product is not designed once and shipped. It is being designed continuously, in real time, by an apparatus that has no equivalent in any prior industry.

And it works. It works so well that governments have started regulating it. It works so well that we have a generation of teenagers whose mental health has been demonstrably affected by it. It works so well that you, reading this, probably can't go a full hour without checking one of these feeds, and you know this about yourself, and the knowledge does not free you.

This is the awkward part of the argument and I want you to sit with it. Software-as-conversation is not a gentle, humane alternative to specification-driven development. It is the most powerful method of building software that we have ever discovered, and like every powerful method, it can be aimed in directions that harm people. Constrained badly, or constrained to optimize for engagement above everything else, it produces what we now have: products that are extraordinarily good at the thing they were optimized for, and the thing they were optimized for turns out to be corrosive.

Notice what this proves about the methodology. You cannot get from a specification to TikTok. Nobody wrote a spec that said *build a system that captures eleven-year-olds for four hours a day.* The system that does this was discovered through iteration, by following the feedback loop where it led. The same approach that produces a CRM nobody uses, when broken, produces a feed nobody can put down, when working. The methodology is real. What we're debating is what to aim it at.

## What "Good" Means, And Who Decides

This brings us to the most uncomfortable part. When I say software-as-conversation "works" and software-as-specification "doesn't," I'm sneaking a definition of *works* past you. Whose definition?

My colleague's CRM was useless to the company. It was a failure by any sane measure of value created. But the licensing vendor made money on it. The integrator made money on it. The executive who championed it got to look decisive at the next board meeting. My colleague got promoted. Someone, somewhere on the chain, made a return on that project — and from their perspective, the project was not a failure. The project was great. The fact that no human ever opened the software is a detail they did not need to notice.

The Hertz vs Accenture case ended in lawsuits, but consultancies make a lot of money on projects that fail by the client's definition and succeed by the consultancy's. The procurement officer who chose the vendor gets to keep their job. The vendor gets paid for the implementation. If the project later collapses, that's a problem for next year's budget, not this quarter's bonus.

Social media is "working" in the sense that it generates extraordinary value for its operators. It is also "working" in the sense that it is changing the cognitive baseline of an entire civilization in ways that are, by most measures of human flourishing, bad. The methodology is the same. The accounting depends entirely on whose ledger you're reading.

So when I say the specification worldview "rarely delivers," I have to be precise: it rarely delivers *to the people who needed the software to actually work.* It delivers reliably, even abundantly, to the people who chose the methodology in the first place. The reason it persists despite its track record isn't that anyone is fooled. It's that the people deciding whether to use it are not the people who pay when it fails. That gap — between the chooser and the bearer — is what keeps the artifact frame alive.

## What This Means

Software-as-conversation, constrained by resources, by time, by ethical intent and by people willing to push back, is how software that actually works gets built. It is also dangerous. Like any powerful method, it can be pointed at outcomes that harm the people it touches. The answer is not to abandon the method. The answer is to be honest about what it is, what it can do, and what it is being aimed at.

Software-as-specification, treated as a complete philosophy rather than as a useful tool for specific narrow domains, is mostly a way of avoiding the question. It moves accountability away from outcomes and toward documents. It protects the people choosing it from ever having to find out whether their choices produced anything of value. The CRM nobody used is not an unfortunate edge case of this approach. It is the approach working exactly as designed: requirement met, project closed, no further questions.

The two-worldview frame I opened with was honest in one sense — these patterns do show up, people do argue from them, the friction is real. But the frame implies a symmetry that doesn't exist. One side is a working methodology with serious failure modes. The other side is a comfortable fiction that mostly fails and gets praised for it anyway. Calling them equivalent traditions is generous to the point of dishonesty.

The practical move, if you're in an organization where any of this resonates, is to ask one question, on every project, before any work begins:

*Who needs this software to work, and what is the path by which their experience of using it reaches the people deciding what to build?*

If there is no such path, you are not doing engineering. You are not doing specification-driven development. You are doing something else, something the industry has many polite names for and one impolite name. The impolite name is: building software that nobody asked for, charging money for it, and calling it a success when nobody complains because nobody is using it.

The CRM was a success by that definition. So is most enterprise software. So, in a much more troubling sense, are the systems currently rewiring our attention. The question is not whether software-as-conversation is the right method. It plainly is. The question is what we are willing to aim it at, and who gets to decide.