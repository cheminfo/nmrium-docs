---
title: Processing
slug: /help/processing
---

# Processing

NMRium offers the possibility to perform a Fourier transformation (FT) on the raw data of one-dimensional NMR spectra. To process an FID, open the FID by dragging it into the **Drag and drop here** box ([section 2](#2-open-spectra)).
NMRium automatically performs zero filling and then Fourier transformation. Phase correction is also performed automatically. You have the option of viewing all automatically performed work steps. Open the processings panel to view the individual steps. You can reversibly undo a step by removing the tick in the corresponding line or setting it again. To permanently remove a step, click on the recycle bin symbol in the corresponding line. The step is deleted. If you remove all tick

### Fourier transformation

To prepare the FID for the Fourier transformation, click onto the **Zero Filling** icon to the left of the spectrum. Set the desired values for **Size** (zero filling) and **Line Broadening** (exponential window function) and click **Apply**. Then start the Fourier transformation by clicking on the **FFT Filter** button to the left of the spectrum.

:::tip **Size** and **LB** values

If you are unsure which values to set, you can use the following recommendations as a reference:

**Size**: Choose twice as many points as in the original FID.

**Line Broadening (LB)**: Specify 0.3 Hz for ¹H spectra and 1-3 Hz for ¹³C.

:::

NMRium has a live function. If you edit the raw data, you can see the changes directly. The changes are only saved when you click on the **Apply** button. If you want to hide the live function, uncheck the **Live** function above the workspace. This function is also available for many other NMRium functions.

### Phase correction

Click the icon **Phase correction** to the left of the spectrum. You can choose between manual and automatic phase correction.

:::note Automatic phase correction

Click the **Apply** button, the phase will be corrected automatically.

:::

:::note Manual phase correction

You can perform zero-order and first-order phase correction.

For zero-order phase correction, click and hold the green **PH0** button above the spectrum. By moving the mouse to the left or right, you can perform the phase correction until the signal is correctly phased and release the button. By double-clicking, you can move the pivot point (red line) for the first-order phase correction.

Repeat the process for the first-order phase correction by pressing **PH1** and moving the mouse. The focus should be on the signals that are furthest from the signal marked by the pivot point. Clicking the **Apply** button completes the phase correction.

:::

### Baseline correction

Click the icon Baseline correction to the left of the spectrum. You can choose between two algorithms: **polynomial** and **AIR PLS**.

- To use the algorithm **polynomial**, you may define a degree and then click **apply**.
- To apply the **AIR PLS** algorithm, you may define both a maximum iteration and a tolerance range and then click **apply**.

The different processing steps are explained in the following sections:

- [Apodization](/help/apodization)
- [Zero filling](/help/zero-filling)
- [Fourier transform](/help/ft)
- [Phase correction](/help/phase)
- [Baseline correcion](/help/baseline)
