---
title: List of Spectra and Mode selection
---

# List of Spectra

When loading spectra in NMRium, they are automatically grouped by nucleus (e.g., ¹H, ¹³C) or group of nuclei. 1D and multidimensional spectra are organized accordingly. Selecting a 2D spectrum links its side spectra to those selected in the 1D tab.

On the right, expand the **Spectra** panel to view loaded nuclei and their associated 1D/2D experiments.

Above the panel, a button shows the total number of loaded spectra.

![Spectra panel](spectra.gif)

Click on the button. A list of the loaded spectra is displayed. The list indicates the time at which the spectrum was uploaded. Spectra that have not been uploaded correctly are highlighted in red. In this case, the **Error** column indicates the error. All correctly uploaded spectra are highlighted in green. If you click on the **Clear Logs** button, all listed spectra in the list will be deleted. The spectra are not deleted in NMRium.

![](./korrekte_Spektren2.png)

To hide all spectra press the icon **hide all spectra**. To show all spectra, press the icon "**show all spectra**".

![Hide spectrum](./Hide.gif)

To show one, two or more spectra in the workspace, press the icon for each spectrum.

![](./show_Spectra.gif)

In each line of the spectrum, you find general information about the solvent.

![](./solvent.svg)

To delete a single spectrum, click on the corresponding line. Then click on the red trash icon above the list of measured spectra. A window will open. Click yes if you want to delete the selected spectrum. The spectrum will be deleted.

![](./Delete_spectra.png)

# Mode selection

You can choose between different modes of how you want to analyze your spectra: **Simple NMR analysis**, **1D multiple spectra analysis** and **NMR spectra assignment**.

With the mode **Simple NMR analysis**, you can analyse chemical shifts of the signals with the help of peaks picking and integrate the signals. There is also the possibility to analyse the spectrum with the help of ranges and to do a multiple spectrum analysis. You can select the individual functions and process the spectrum by yourself.

If you have several 1D spectra of a substance and you want to analyse them at the same time, you can choose the mode **1D multiple spectra analysis**. NMRium is able to analyse multiple spectra of a substance. You can make corrections by yourself.

If you have one or more spectra of a compound, NMRium is able to assign these spectra for you. To use this, select the function **NMR spectra assignment**. NMRium analyses the ranges. It determines the integral or the relative H part of a range. It also does a multiplet analysis and a calculation of the coupling constants. Finally, you can also make corrections by yourself.

Click above the panels on the right side on the red marked button and select the corresponding function. You must activate it by clicking on a spectrum or a nucleus in the panel **Spectra**. Afterwards, the selected mode will be available.
