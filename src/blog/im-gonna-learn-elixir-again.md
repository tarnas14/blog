---
title: I'm gonna learn elixir (again)
description: In this post I document my ideas, expectations and dreams of elixir BEFORE I take anoter dive into the stack stack.
date: 2021-06-18
tags:
  - post
  - elixir
layout: layouts/post.njk
revisions: 1
writingTime: 50m
author: Tarnas

---

I'm somewhat of an elixir/erlang fanboy.
In the worst sense of the word - I know *of*  it, I have close to zero experience with it, but I'm convinced it's great xD.
So... I'm gonna eat my own words and try to learn it properly, use it for some time, maybe solve a couple close-to-real-life problems with it and see for myself.

> Disclaimer:<br/>
> I've already written an HTTP game server using elixir 3 years ago.
I can't for the life of me find the repo, I think we were committing to **not my github** :(
Nevertheless, I did something with this technology, but it was a very brief encounter.

So here goes a list of my thoughts on elixir/erlang in no particular order, which I'll be evaluating while learning.

## Ideas

* I believe that erlang's actor model implementation is the OG object-oriented programming, following the definition "long-lived objects that communicate by passing messages between each other"
* I'm convinced that the direction of microservices is trying to achieve what erlang has done, but 2 levels of abstraction higher - the similarity in abstraction is startling - microservices do the same thing with an additional overhead of multiple levels of abstraction *("the same thing" being long-lived pieces of logic that are responsible for things and hold state and exchange messages etc)*
* the mentality of allowing the processes to fail and getting them back up is interesting, but I'm not sure what that means to the overall state of the system
* the tooling to drill into BEAM and seeing the whole process tree in real time is just amazing (or that's how I remember it)
* I'm a bit of a nerd and I like functional programming, mostly because it's restrictive, so erlang looks to me like the best of both worlds - objective modelling with functional implementation

## Expectations

* I expect learning curve to be pretty mellow and getting *acceptable* at elixir is going to take a while
* I'll most likely discover that half of the stuff above missed the mark completely :D
* it's going to be really hard to rewire my brain to the functional paradigm again, but I'm eager to try
* it's going to be nearly impossible not to tell everybody that I'm learning elixir and I love it
* in the beginning I'll probably spend half the learning time configuring vim to play well with mix, elixir etc xD
* I will most likely need to think differently about modelling the system defensively around easy to fail processes
* it should be really fun and challenging to put elixir and react together
* but it's probably going to be easier to use Phoenix xD

## Dreams

* I'll git gud enough to contribute to OSS elixir projects
* I'll build an api-first online game that programmers will write bots for and play against other programmers

So there you go, I wrote it down, it's on the internet, see you in a while, hopefully with some elixir code and ponderings!

---

here be the place for links of later parts of the elixir learning series
