---
title: I just wanted to write .NET Core code - evening of yak shaving
description: Have I just wasted 2h 15minutes of my life writing 2 lines of Dockerfile?
date: 2020-11-03
tags:
  - post
layout: layouts/post.njk
revisions: 1
writingTime: 1h 20m
author: Tarnas

---

I wanted to try and code some `.NET Core`.

That didn't happen. I've just spent 2h 15m adding [2 lines of Dockerfile](https://github.com/tarnas14/dotfil3s/commit/7aa204d045bde280cf15727af197925385e6934b) in my dotfiles repository.

Sounds insane, I know, but hear me out.

# Here is what happened:

When I sat to write that sweet `.NET Core` code, I realized that I'd removed my `neovim` configuration for `OmniSharp` and I uninstalled `.NET Core` from my machine.

Additionally, some time ago I made an attempt to dockerize my development environment, using an `arch-based` docker container (because I can).

So, _obviously_, I decided to prepare a container for `.NET Core` development.

## However,

I haven't used the dockerized `neovim` on a daily basis.
It got stale.
There were changes in my `init.vim` that I had not yet tested on the docker image.
Not long ago I switched to `tsserver` to analyze code I write in `JS` and that caused my dev env docker image to fail on build.

After I ~~googled~~ figured out [how to see vim-plug post-hook output](https://github.com/junegunn/vim-plug/issues/910), I found out that `npm` is not available during the post-hook.

This got resolved "easily" by just sourcing `asdf` (which I use to install `node` and `npm`) inside the `init.vim`.
(btw, I couldn't just do that in `init.vim`, because on host it would break the configuration, I had to replace some part of that file during docker image build, so I used `sed`)

## at this point the image is building without errors

> but you should never trust any process only because its exit code is 0

To test it, I started my dockerized environment in a `JS` project from work.

Code analysis didn't work, it said that `tsserver` was not running.

Right...

After some digging, I found a [similar issue](https://github.com/ycm-core/YouCompleteMe/issues/3426) on the internet.
No luck, it was already closed without any solutions posted.

I had to go deeper.

I dug deeper and found out that `tsserver` was not starting in the project directory, because it could not find the `node` binary.

Apparently, it couldn't find it, because that `JS` project was forcing `node` version to `10.19.0` in a `.tool-versions` file, which was respected by `asdf`. That `node` version was not installed on my docker, because I only install `12.9.0` when building image.

This is what you got if you tried to run `node` in that directory:

```bash
$ node
No preset version installed for command node
Please install a version by running one of the following:

asdf install nodejs 10.19.0

or add one of the following versions in your config file at /home/tarnas-dev-env/code/.tool-versions
nodejs 12.19.0
```

Easy fix, you might think, just run
```bash
asdf install nodejs 10.19.0
```
and you're good to go.

However, when you I tried to run that, `asdf-nodejs` package tried to make sure that it's downloading trusted `node` binaries etc. As you might've guessed, today that resulted in an error.
```bash
Authenticity of checksum file can not be assured! [...]
```

So I tried adding the `gpg` keys to the keyring again ([following their readme](https://github.com/asdf-vm/asdf-nodejs/blob/master/README.md#install)), but that produced a lot of errors like this:
```bash
gpg: can't allocate lock for '/home/tarnas-dev-env/.gnupg/asdf-nodejs.gpg'
```

After reading into `gpg` man page I found that there are different `lock` config options and if I set `gpg` to `--lock-never`, _IT WORKS!_

Do I understand what this does? Not entirely. Do I need to understand it right now? No - I'm doing things on a docker container, so if anything ever breaks, I'll just kill that container and find another way.

I added `lock-never` to `~/.gnupg/gpg.conf`, installed the `10.19.0` node version, run `neovim` and _v'oila_ - I got a linter error about a missing semicolon and I could jump around the file using `tsserver` lsp.

## Victory

My docker container with the newest `init.vim` configuration is now operational and it lints `JS` using `tsserver`!

This was a roller coaster of emotion, so I decided to write a 'short' post about it.
(I've had a blog for almost a week, for crying out loud!).

I'm now fixing some styling issues on the blog...

sigh...

# Why would anyone do this to themselves?

If you're reading this, you're most likely a programmer or someone close to IT.

This whole nightmare was an exercise in [yak-shaving](https://www.youtube.com/watch?v=AbSehcT19u0), problem-solving, debugging, googling, trial and error...

I would argue that all of these things are important for a developer.

In principle, this wasn't all that different from tracking down a bug or finding my way through a complicated project that I don't know too well.

There was a problem. There was a success state I wanted to reach. I just followed the dots.

Most likely my solution isn't the best, the fastest or the most performant. It certainly isn't the prettiest.

> But it works. It solves the problem.

And at the end of the day - that's what matters.

## But I didn't solve the original problem

I wanted to write `.NET Core` code and run into a big yak to shave.

The yak is now shaved. I'm one step closer.

Next attempt at solving the original problem - tomorrow?
