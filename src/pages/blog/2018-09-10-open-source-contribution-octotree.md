---
templateKey: blog-post
title: 'Open Source Contribution: Octotree'
date: 2018-09-10T18:20:08.200Z
excerpt: Adding key functionality to an open source project.
tags:
  - open source
  - javascript
---
A coworker introduced me to the chrome plugin, [Octotree](https://github.com/buunguyen/octotree). It provides a tree view for any repository you're viewing on Github to quickly navigate between files. A few people had submitted issues requesting a filtered tree view for pull requests that only shows files that are changed. I wanted that feature as well since our company had moved to Github for source control and pull requests.

The change was major and took a little back and forth, but I'm happy with the contribution. I kept my code clean, documented necessary pieces, and opted for readability over cleverness. I wouldn't mind having to update this code in the future :)

It was fun diving in to Github's API and learning about a different Javascript architecture.

See the pull request on Github at [pull #428](https://github.com/buunguyen/octotree/pull/428).
