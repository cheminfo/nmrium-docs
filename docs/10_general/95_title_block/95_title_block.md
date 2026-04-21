---
title: Title Block
---

# Title Block

Sometimes, it may be required to display the acquisition parameters directly on the spectrum. This can be achieved through the `General settings`.

![](./title_block_intro.png)

Select the `Title Block` tab and check the box `Display spectrum info`.

![](./title_block_tab.png)

You are also able to fully customize the fields you would like to display.

![](./title_block.gif)

This involves adding any parameter present in the experiment, such as solvent, pulse sequence, etc.

:::tip Various dates

The `info` field contains three different dates:

![](./date_configuration.png)

- `info.localeDate` — the date formatted according to your local preferences
- `info.date` — the GMT date
- `info.epoch` — the number of milliseconds elapsed since January 1, 1970

Here is an example of how those three fields are rendered:

![](./date_display.png)

:::

## Getting the name correct

The `info.name` is extracted from the filename being loaded into NMRium. For Bruker folders, do not drag and drop the folder containing the experiment (e.g. `1`) — drag and drop its parent folder instead.

![](./correct_name.gif)
