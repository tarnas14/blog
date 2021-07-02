---
title: First failed startup under my belt, eight to go?
description: I've failed my first startup adventure. I learned a lot and hopefully have a better shot next time.
date: 2021-07-02
tags:
  - post
layout: layouts/post.njk
revisions: 1
writingTime: 1h 15m
author: Tarnas

---

They say that the first startup almost never succeeds.

How, then, does one find the motivation to make the first attempt?
To accept the nigh-inevitable failure and press on is a very brave thing to do.

Last year I had the luck to be invited into a startup as a developer.
It was my duty to do the bulk of technical stuff, since the other programmer was one of the founders.
And boy, do founders have a lot on their shoulders.

My adventure with [fincastly](https://fincastly.com) lasted 8 months.
When I joined, the product had already had an MVP built and verified against the market. There was a general consensus of the founders and investors that it had potential to succeed.
Thus, having acquired funds to keep us going, believing we were the unicorn, the 'one out of million', we did our best to realise that potential.

The product was supposed to help small and medium-sized businesses to plan, track and control the flow of their money.
We wanted to give our customers the tools to integrate their invoicing and banking tools, teach them budgeting in the application and guide them through the execution of that budget/plan.

We were getting really close to actually do that and even more, but we ran out of money and couldn't actually get there.

## This was not a failure by any means

We did not succeed, that much is **true**, but we learned and re-learned a lot of things the hard way during the last 8-12 months.
This gives us a better shot at it next time (or so we want to believe).

I don't want to go into the business-side of things, as I was focused ont the technical stuff, but here is a short list of things that I've learned, _in no particular order_:

## 1. Contract testing

If your product depends on 3rd-party integrations, [contract testing](https://martinfowler.com/bliki/ContractTest.html) is a **must**.
Is the bug caused by your code? Is there a communication problem with the 3rd-party API in your infrastructure? Did the API owners release a new version with breaking changes that they hadn't told anyone about?

You want to be able to tell which situation you are dealing with *asap*!

## 2. PoC has a single purpose and a short lifespan

Once your *Proof of Concept* has proven a concept, it's headed to the bin.
It's painful to throw away the incomplete, happy-path code of PoC and rebuild the functionality "the right way", but you should do it.

It's ok to let it live as an incomplete functionality and give it to your users to test some theory, but do not let them believe it's the real deal.
Once you've iterated enough, build the actual functionality.

## 3. Rates on technical debt are astronomical
When the shit hits the fan, the tension rises and your potential customers want new features *now*, it is tempting to cut the corners, write code without any automated tests, make small fixes without actually testing them and pushing them to production.

This will bite you in the arse.
You want to go fast, but the faster you go, the easier it is to forget something or make a stupid mistake.
Tests and/or docs give you the freedom to go fast.
They will notify you when you introduce regression, tell you what's wrong.
Use them.

## 4. We need <fancy/popular technology> from the start
No you don't.

I know that microservices are cool, I know that serverless is jazzy, I know that **it** will let you scale or whatever.

You will be faced with so many problems that you don't want to make anything more complicated than it has to be.
Keep it simple, make it work.
If you're lucky enough that your server doesn't keep up with the traffic - pop a beer to celebrate and find a way to scale it up.

## 5. Do it all with people you trust
Above all else, in your heart of hearts, make sure you trust people around you.
You want responsible people that you can depend on, who will not avoid conflict, will challenge each other's ideas and press on with the success of the product in mind.
You don't want to babysit people or wonder if they're doing their job.

---

## Now.

Is there a rule to achieving success?
How do I know, I gave it a shot once and failed :D

I know people who've succeeded while violating everything I've written above.

I also know people who've succeeded doing these things and some others.

Honestly, just give it your all, have fun in the process and try to learn as much as you can.
