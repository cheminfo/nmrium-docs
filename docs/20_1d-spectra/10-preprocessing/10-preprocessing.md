---
title: Preprocessing the FID
slug: /help/apodization
---

# Preprocessing the FID

## Apodization

To perform apodization in NMRium, press the shortcut key <kbd>a</kbd> to open the Apodization / Window Functions Editor. By default, you’ll see an option at the top of the screen to set line broadening. A green line will display the apodization function that will be applied to the FID. You can choose to preview the processed FID by toggling the checkbox labeled Preview.

![](./apodization.gif)

## Zero filling

To prepare the FID for Fourier transformation using zero filling, click the Zero Filling button located to the left of the spectrum. You can specify the number of points to extend the FID size. Once configured, click Apply to perform zero filling.

![](./zero_filling.gif)

:::tip **Size** and **LB** values

If you are unsure which values to set, you can use the following recommendations as a reference:

**Size**: Choose twice as many points as in the original FID.

**Line Broadening (LB)**: Specify 0.3 Hz for ¹H spectra and 1-3 Hz for ¹³C.

:::
