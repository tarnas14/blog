---
title: Automate small things
description: I have to include jira ticket in every commit message now, so I automated it away
date: 2021-10-22
tags:
  - post
layout: layouts/post.njk
writingTime:
author: Tarnas
---

In my recent project we agreed to include a jira ticket number in *every commit message*.

As I'd expected, I remembered to do it exactly 2 times (2 commits) and then I forgot again.

In situations like this you have at least two choices:

1. You get angry and complain
1. You find a way to automate your anger away

I chose the second option and wrote a simple alias:

```bash
# unalias from .zhsrc git plugin
unalias gcmsg
function gcmsg () {
  branchName=$(git rev-parse --abbrev-ref HEAD)

  if [[ "$branchName" =~ ^[A-Za-z]+-[0-9]+ ]]; then
    jiraNumber=$(echo $branchName | grep -Eo '^[A-Za-z]+-[0-9]+' | tr a-z A-Z)
    git commit -m "$jiraNumber $1"
  else
    git commit -m "$1"
  fi
}
```

I've been using `gcmsg` for a long time, it's provided by `oh-my-zsh` git plugin, so I'm used to it.

This little `if` checks if the branch I'm on starts with something that looks like a jira ticket.
If it does, it will prepend my commit message with the jira task number.

10 lines of code and I don't have to remember anything and my teammates are happy, because I comply to the commit message convention.

\#programmingIsCool
