---
title: Elixir docs kick butt!
description: I'm really impressed with elixir ecosystem and docs.
date: 2021-07-08
tags:
  - post
  - elixir
layout: layouts/post.njk
writingTime: 20m
author: Tarnas

---

As I wrote already, I'm learning elixir, following this book: [The Little Elixir & OTP Guidebook](https://www.manning.com/books/the-little-elixir-and-otp-guidebook).

It's quite nice and it's getting me familiar with the most basic mechanisms of the language and OTP.

> There was a hickup with the example not working, so I had to problem-solve on the go - I created a [repo with the example](https://github.com/tarnas14/the-little-elixir-and-otp-guidebook/tree/main/pooly), explaining the problems and solutions, if anyone is interested.

The thing is, the book has been written a couple years ago and it uses the old supervision model with _:simple_one_for_one_ restart strategy.

## Here's when elixir's great ecosystem and docs kick in

When I typed the dynamic supervision example from the book and started _iex_ (_Interactive Elixir_) to play around with it, I immediately got the following warnings:

<pre>
  <code>warning: Supervisor.Spec.supervise/2 is deprecated. Use the new child specifications outlined in the Supervisor module instead</code>
  <code>...</code>
  <code>warning: Supervisor.Spec.worker/2 is deprecated. Use the new child specifications outlined in the Supervisor module instead</code>
  <code>...</code>
  <code>warning: Supervisor.Spec.supervisor/3 is deprecated. Use the new child specifications outlined in the Supervisor module instead</code>
  <code>...</code>
  <code>warning: Supervisor.start_child/2 with a list of args is deprecated, please use DynamicSupervisor instead</code>
  <code>iex(2)></code>
</pre>

The example was working as intended, but it was clear I'm using an outdated interface.
I suppressed the reflex of googling and used the help tool built into _iex_ - it's a habit I'm getting into, because it is just so damn good.

I simply typed `iex(1)> h DynamicSupervisor` and got presented with a full documentation of _DynamicSupervisor_ with examples of different usages and a full section about **Migrating from Supervisor's :simple_one_for_one**.

The documentation gave a full example of old implementation and how to move to the new one.
It pointed me to different places in the docs where the worker specifications were explained and it took me around 10-15 minutes to update the example from the book to use the _DynamicSupervisor_.

I'm pretty hyped about this and can't wait to learn more.
Stay tuned, more to come soon (I think).
