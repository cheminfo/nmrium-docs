---
title: Quick Start Guide
description: A brief explanation of NMRium's most important functions
slug: /
---

In order to fully benefic from NMRium you should learn a little bit the phylosophy behind the program. The software as be designed to be simple to use but also very powerfull and it may differ from other competitive softwares.

Please read this quick start guide, it should not be a waste of time and you will fully benefit of NMRium.

**Forget about integrals and peak picking !**

In order to keep some similarity with other softwares we have kept the integral and peak picking tools. But … they should never be used ! You should directly switch to the workspace ‘NMR spectra assignment’

![Spectra assignment](spectraAssignment.gif)

:::tip How to get help

Tooltips appear when you hover over different tools, providing quick information and listing available keyboard shortcuts. Most shortcuts are single-letter keys — no need to press <kbd>CTRL</kbd>, <kbd>shift</kbd>, or other modifier keys. Tooltips often include direct links to more detailed documentation. You can [learn more](/help/help) about additional help resources.

![Tooltip](tooltip.png)

:::

## Open the program

You can start using NMRium right away by clicking the link below. The application is available for immediate testing with public data and for non-commercial use.

[https://app.nmrium.com](https://app.nmrium.com)

## Loading spectra

To load your NMR data into NMRium, make sure your files are in one of the following supported formats:

- JCAMP-DX (.dx, .jdx, .jcamp)
- Bruker folder (raw or processed data)
- Jeol (.jdf)
- NMRium file (.nmrium)

You can also use zipped files containing any of the above formats.

Simply drag and drop your file(s) into the gray **Drag and drop here** box in the center of the screen.

![Load spectra](load.gif)

When spectra are loaded, NMRium automatically groups them by nucleus (for 1D) or by nucleus pair (for 2D), and superimposes them by default. For 2D spectra, the traces shown at the top and left are, by default, taken from the first spectrum of the corresponding 1D nucleus. If you prefer a different trace, you can select another spectrum in the corresponding 1D tab.

:::tip Learn more

You can [learn more](/help/spectraPanel) about the spectrum panel and how to change color, delete spectra, etc.

:::

## Pan and zoom

In NMRium, you can zoom in at any time, regardless of the selected tool. To zoom in, simply click and drag with the left mouse button around the area you want to magnify, then release. To zoom out, double-click anywhere on the spectrum. To scale the spectrum vertically, use the scroll wheel.

You can also use keyboard shortcuts: press <kbd>f</kbd> to zoom out horizontally by one step, or <kbd>ff</kbd> to fully zoom out both vertically and horizontally.

:::tip Learn more

You can learn more about all the possibilities to zoom and pan the spectra for [1D](/help/zoom-and-scale) and for [2D](/help/zoom-2d)

:::

## Inserting a molecular structure

Like spectra, chemical structures can be added by dragging and dropping files in molfile (.mol) or SDF (.sdf) format.

You can also paste a SMILES string or molfile directly, or use the advanced structure editor to draw molecules. The editor accurately handles stereoisomers and allows custom labels for individual atoms.

![Add chemical structure](structure.gif)

:::tip Learning how to use the chemical editor

Check more [advanced information](/help/editStructure) about structure edition or [learn more](/help/ocl) how to use the chemical editor.

:::

:::note Integrated structure editor

Click onto the panel **Structures** on the right side of the screen and then on the **+** sign. A window opens where you can draw your molecular structure. Then click on the **Save** button. In the panel **Structures**, the drawn molecular structure appears as well as the molecular weight and the molecular formula.

:::

## Processing of raw data

By default NMRium will automatically process raw data. If you need further customization you may find more information about manual processing [here](/help/processing)

## Ranges and multiplet analysis

Click the **Ranges and multiplet analysis** button on the left side to define integration zones and multiplets. Alternatively you should use the shortcut <kbd>r</kbd>. You can begin with an automatic analysis, which can be adjusted manually as needed.

Tips for working with ranges:

- To adjust a range, drag its boundary to the desired position.
- To delete a range, hover over it and press the <kbd>backspace</kbd> key.
- To manually add a range, hold <kbd>shift</kbd> while clicking, dragging, and releasing over the desired area.

![Ranges and multiplet analysis](ranges.gif)

:::note Advanced peak picking analysis

More advanced options are described on this [dedicated help page](/help/ranges).

:::

## Assignment of the molecule

The easiest way to assign a molecule is to keep it floating and create links between the integration ranges and the corresponding atoms.

![Assign](assign.gif)

Diastereotopic hydrogens can be expanded by holding <kbd>SHIFT</kbd> and clicking on the atom. Assigned ranges and atoms will be highlighted in light yellow.

:::tip Export the assignment

Exportation of the assignment can be done in a single click from the "Ranges / Multiplet analysis" panel.

![Export assignment](exportAssignment.gif)

:::note Advanced assignment

More advanced options are described on this [dedicated help page](/help/assignment).

:::

## Export of assigned spectra

:::tip Copy to clipboard

Simply press <kbd>CTRL</kbd>+<kbd>c</kbd> to copy the current image to the clipboard.

:::

To export the assigned spectra, click on the **Export** button to the left side of the spectrum. A field will open where you can select in which format you want to export your spectrum. You have the following options:

- Export as SVG
- Export as PNG
- Copy image to Clipboard
- Save data as .nmrium file

:::info

An .nmrium file is a compressed text file containing all information of the (partially) assigned stored spectra. Depending on the number of spectra contained, saving can take longer, as can opening an .nmrium file again.

:::
