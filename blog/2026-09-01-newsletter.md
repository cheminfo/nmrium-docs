---
slug: 2026-09-01-newsletter
title: NMRium new features - September 2026
authors: lpatiny
tags: [NMRium, newsletter]
---

This update is about getting numbers out of crowded spectra: peak shape optimization over the whole spectrum, and manual placement of signals inside an integration zone.

1. **Peak shape optimization on the full spectrum.** Deconvolution is no longer restricted to a handful of peaks in a zoomed region. **Optimize peaks** now fits every peak of the spectrum in one go, and returns for each of them the **fwhm**, the **mu** factor (the Gaussian/Lorentzian mixing of the pseudo-Voigt shape) and the **area**. Because the area comes from the fitted shape itself, overlapping signals no longer share their intensity the way a plain integral does. The **Peaks sum** and **Peaks shapes** toggles overlay the reconstructed trace and the individual fitted peaks so you can check the fit, and the fwhm, mu and area columns can be enabled in the Peaks panel. [Read the documentation](/help/peaks).

![Peak shape optimization over the whole spectrum](/newsletters/2026/september/peak_shape.gif)

2. **Add signals inside a range, from the 1D or from the 2D.** When automatic multiplet analysis puts several overlapping signals in a single integration zone, you can now add the missing ones yourself: click inside the range to drop a signal at that chemical shift, and repeat for each multiplet you can identify. The range keeps its integral while the signals it contains are listed and analyzed separately. [Read the documentation](/help/ranges).

![Adding several signals inside one range](/newsletters/2026/september/many_multiplets.gif)

   The same works from a 2D experiment. With a COSY, HSQC or HMBC open, the 1D trace stays visible above the map, so you can read the exact position of a cross peak and place the corresponding signal without leaving the 2D view. Ambiguous regions in the 1D become obvious once the second dimension tells you how many protons are actually there.

![Adding signals from the cross peaks of a 2D spectrum](/newsletters/2026/september/2d_signals.gif)
