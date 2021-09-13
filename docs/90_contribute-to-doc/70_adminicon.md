---
id: admonitions
title: Admonitions
description: Handling admonitions/callouts in Docusaurus Markdown
---

In addition to the basic Markdown syntax, we use [remark-admonitions](https://github.com/elviswolcott/remark-admonitions) alongside MDX to add support for admonitions. Admonitions are wrapped by a set of 3 colons.

Example:

    :::note

    The content and title *can* include markdown.

    :::

    :::tip You can specify an optional title

    Heads up! Here's a pro-tip.

    :::

    :::info

    Useful information.

    :::

    :::caution

    Warning! You better pay attention!

    :::

    :::danger

    Danger danger, mayday!

    :::

:::note

The content and title _can_ include markdown.

:::

:::tip You can specify an optional title

Heads up! Here's a pro-tip.

:::

:::info

Useful information.

:::

:::caution

Warning! You better pay attention!

:::

:::danger

Danger danger, mayday!

:::

## Specifying title {#specifying-title}

You may also specify an optional title

    :::note Your Title

    The content and title *can* include markdown.

    :::

:::note Your Title

The content and title _can_ include Markdown.

:::
