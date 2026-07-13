---
title: "Nobody Is Being Stupid: The Game Theory and why Internal Software usually sucks"
description: "Bad internal software isn't a design failure — it's a game theory problem. Why rational employees, managers, and developers produce tools nobody loves."
date: 2026-07-13
---

Every employee has asked it at some point, usually while staring at a submit button that just cleared the form they spent ten minutes filling in: *why can't this be as easy as Google?*

It's a fair question. We spend our private lives inside beautifully polished software. Search is effortless, shopping is frictionless, even filing taxes has been turned into a guided conversation. Then we badge into the office, open the expense tool, and travel fifteen years back in time. Five screens. Mandatory fields in an order that makes sense to the database but not to any human. A cost-center code you have to look up in a PDF.

The instinctive conclusion is that the internal developers did a poor job. It's also the wrong conclusion. The developers aren't bad, the managers aren't lazy, and the employees aren't unreasonable. Bad internal software is what happens when everyone plays their dominant strategy in a game nobody designed. It is, quite literally, a cooperation problem — and until you see it that way, no amount of "we should care more about UX" will fix it.

## The market that isn't there

Consumer software is good because it lives inside a brutal feedback machine. Google, Amazon, and Apple spread their UX investment across millions or billions of users, and every one of those users holds a weapon: the ability to leave. Churn is a price signal. A confusing checkout flow shows up in next quarter's revenue, so armies of researchers, designers, and product managers exist to prevent it.

Internal software has none of this. Its users are captive — the forty people in accounting cannot rage-quit the procurement system and switch to a competitor. There is no churn, therefore no price signal, therefore no economic force that punishes bad usability. Worse, the classic enterprise-software pathology applies even inside the building: the person who commissions the tool is almost never the person who uses it every day. A CFO approves the budget, an IT manager writes the requirements, and the accounts-payable clerk lives with the consequences.

So when your expense tool feels like it was designed by nobody, that's because in a market sense, it was. The mechanism that would have disciplined its design simply does not exist.

## The feedback commons

Here's where it becomes a proper game.

Good UX is not aesthetics; it's iteration. You build something, watch real people struggle with it, redesign, and repeat. Consumer products run this loop hundreds of times. The loop has one non-negotiable input: users willing to spend time being observed, interviewed, and inconvenienced by prototypes.

Inside a company, that input is a **public good**. If the expense tool improves, everyone benefits — including the colleagues who never attended a single workshop. But the *cost* of improving it falls only on whoever shows up. And showing up is never in anyone's job description. The accountant is measured on closing the books, not on the quality of her bug reports.

Write out the payoff matrix and the result is depressingly clean. For each individual employee, contributing feedback costs time now for a diffuse benefit later that arrives whether or not *you personally* contributed. The dominant strategy is to free-ride. Everyone free-rides. The software never improves. Everyone loses — the textbook outcome of a multiplayer prisoner's dilemma, sometimes called the tragedy of the commons. Nobody in this story is being stupid. Employees rationally protect their time, managers rationally prioritize visible features over invisible refinement, developers rationally build on assumptions because assumptions are the only input they can get. Each move is locally optimal. The equilibrium is terrible.

You can even watch the defection happen in real time. It's called **shadow IT**. When the official tool is painful enough, employees quietly route around it — the "real" project plan lives in someone's spreadsheet, the actual customer list is a shared Excel file with seventeen tabs. Every one of those spreadsheets is a defection: it solves the individual's problem today while draining usage, data, and feedback away from the official tool, which then decays further, which pushes more people into spreadsheets. A death spiral with a payoff matrix.

## The tax everyone pays

Because there's no price signal, the cost of this equilibrium never appears on any dashboard. But it's real, and it compounds. Researchers who study enterprise usability describe it as a hidden operational tax: tasks take slightly longer than they should, error rates creep up, support teams absorb tickets that better design would have prevented, and training budgets swell to teach people things the interface should have made obvious.

Do the napkin math for a single mediocre tool. Three minutes of avoidable friction per expense report, forty employees, one report a week: roughly 100 hours a year. Now multiply across the timesheet system, the procurement portal, the leave-request app, the internal CRM. A mid-sized company easily burns the equivalent of several full-time salaries on friction alone — and that's before counting the errors. Tom Landauer estimated back in 1995 that inadequate usability engineering was costing the US economy on the order of $30 billion a year in lost productivity; every input to that number has grown since. And Forrester's research found that a large majority of enterprise software projects fail to deliver their expected value, with poor adoption — people refusing or working around the tool — as a leading cause.

The bitter joke is that the money gets spent either way. You pay for usability once, up front, or you pay for its absence forever, in installments small enough that no one ever books them.

## Which software actually gets forgotten

It would be lazy to claim companies neglect *all* internal software. They don't — and the exceptions prove the economic rule.

Where internal tools touch scale or revenue, the math flips and investment follows. Amazon obsesses over the tooling its warehouse workers use, because a second saved per pick, multiplied by millions of picks, is real money. Companies with ten thousand call-center agents pour serious design effort into agent desktops, because average handle time is a board-level metric. Big tech firms fund entire internal-platform teams — Spotify's developer portal Backstage was polished enough that they open-sourced it and it became an industry standard. In every case the formula is the same: **users × frequency × cost of error**. When that product is large, internal software gets consumer-grade attention.

What gets forgotten is the long tail: the back-office tools used by forty people, a few times a month, where no single failure is expensive enough to alarm anyone. Expense reporting. Purchase orders. Room booking. Timesheets. The HR form for changing your bank account. Individually trivial, collectively where most of the friction — and most of the resentment — lives. Nobody's bonus depends on the room-booking tool, so the room-booking tool is designed by the database schema.

## Not every user needs polish

One more nuance the "everything should feel like Google" crowd misses: the tax is not evenly distributed, because users are not interchangeable.

Expert users substitute expertise for interface. Engineers happily live in terminals, config files, and raw SQL; a rough tool costs them little because they've internalized its model. The Bloomberg Terminal is the canonical example — an interface that looks like a 1980s cockpit, priced at over $25,000 a year, and beloved by traders precisely *because* it's dense. For a user who operates it eight hours a day, information density beats visual polish every single time. An engineering company full of technical staff can genuinely get away with rougher internal tools; that's not negligence, it's a rational read of its users.

The tax bites hardest at the opposite corner: **infrequent, non-technical users**. The salesperson who files expenses once a month never builds muscle memory. The nurse who touches the scheduling system between patients has no spare attention for its quirks. These users arrive with expectations calibrated by consumer apps — software that anticipates, guides, forgives — and they are exactly the users the long-tail tools serve. High consumer expectations, low usage frequency, zero technical tolerance: that's the demographic where a clunky interface converts directly into errors, support tickets, and quiet contempt for "IT."

So the diagnostic question is never "is this tool polished enough?" It's "who uses it, how often, and what happens when they get it wrong?"

## Or maybe we've just become lazy

Before we lay all the blame on the tools, it's worth entertaining the uncomfortable counter-argument: perhaps the users have changed too.

In 1999, the physicist Sugata Mitra embedded an internet-connected computer into a wall facing a New Delhi slum and walked away. No instructions, no teacher, no interface designed for beginners — a standard PC behind glass. Within hours, children who had never seen a computer and spoke no English were browsing; within weeks they were teaching each other. The "Hole in the Wall" experiment was replicated across rural India, and a decade later the One Laptop Per Child project ran an even more radical version in Ethiopia: sealed boxes of tablets dropped into remote villages with no adults trained and no explanation given. Within days the children had opened the boxes and were using dozens of apps. Within months they had worked around the locked settings to re-enable the disabled camera. Nobody showed them anything.

Whatever you think of the pedagogy debates these experiments sparked, they prove something inconvenient for the "the interface is too hard" complaint: humans are spectacularly good at figuring out unfamiliar systems — *when they want to*. And it's not just children. An entire generation of office workers once memorized WordPerfect key combinations, navigated DOS menus, and rattled off SAP transaction codes from memory. Secretaries in the 1990s mastered interfaces far more hostile than anything a modern expense tool throws at us. The raw capability hasn't gone anywhere.

What changed is the motivation — and, frankly, the patience. Twenty years of consumer software competing furiously to remove every ounce of effort has recalibrated our expectations: we now expect interfaces to make everything so easy that nobody has to think at all, and we experience any demand for thought as a design failure. Call it laziness if you like, but notice that it's *rational* laziness, and it fits the same payoff logic as everything else in this story. The slum kids got play, discovery, and status from cracking the machine — a huge intrinsic reward. The trader mastering the Bloomberg Terminal gets paid. The employee wrestling with the procurement portal gets... a submitted purchase order, and another one next month. When the reward for learning a tool is zero, investing zero learning effort is the equilibrium strategy, and no amount of tutting about attention spans will change it.

So the laziness is real, but it's a symptom, not a moral failing. Motivation is the third variable in the equation, next to investment and user type — and it cuts both ways: it means users will forgive a rough interface that visibly serves them, and it means no interface is polished enough to compensate for a tool that gives nothing back.

## Changing the game

If the problem is a payoff matrix, the fix is not exhortation — no all-hands speech about "caring more about user experience" has ever changed a dominant strategy. The fix is mechanism design: change the payoffs so cooperation becomes rational.

Concretely, that looks like a handful of unglamorous moves. Make feedback part of the job, not a favor — name pilot users, put the hours in their objectives, and let their managers budget for it, so contributing no longer means defecting against your own workload. Shrink the loop — ship to five people for two weeks before rolling out to forty, because five observed users, as usability research has shown for decades, surface most of the problems at a fraction of the cost. Budget version 1.1 before version 1.0 ships, because iteration you haven't funded is iteration that won't happen once the team is reassigned. And steal the vendors' best trick: watch people work instead of asking them what they want. An hour of observation is worth ten requirement workshops, and it doesn't require the user to articulate anything.

None of this is expensive compared to the tax. All of it is invisible compared to a feature launch, which is exactly why it keeps losing budget battles.

The deepest irony remains: employees expect internal software to save them time, but the only way to make it genuinely time-saving is for those same employees to invest a little of theirs. That's a cooperation problem, and cooperation problems don't solve themselves — they get solved by whoever redesigns the game. In a company, that person has a name: management. Bad internal software isn't an engineering failure. It's an unsolved coordination problem wearing an engineering costume.

---

*Further reading: Jakob Nielsen / Nielsen Norman Group on enterprise UX and iterative design (nngroup.com); Tom Landauer, "The Trouble with Computers" (1995), on the macroeconomic cost of poor usability; Forrester Research on enterprise software value delivery and adoption failure; Spotify's Backstage (backstage.io) as an example of internal tooling done with product-level care; Sugata Mitra's "Hole in the Wall" experiments (1999–) on self-organized learning; the One Laptop Per Child tablet deployment in Ethiopia (2012) on unassisted technology adoption.*