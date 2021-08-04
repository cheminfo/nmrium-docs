# Select spectra for 2D

The panel spectra contains all spectra, listed according to the measured nuclei. Open the panel spectra by clicking on it with the mouse. Open a 2D spectrum by clicking on the proton carbon button. If there is only one proton and one carbon spectrum in the spectra set, the system will automatically put the trace for the 2D spectrum. If the spectrum set contains several protons or several carbon spectra, you must select which spectrum is used for the corresponding 2D spectrum. To do so click on the 1H button and select the desired spectrum there. The remaining spectra are hidden by clicking on the corresponding button. Then select a 13C spectrum in the same way. If you click on a 2D spectrum, the selected spectra will be displayed there. 

# Zoom

## Zoom in

To zoom in on the spectrum, click on the section with the left mouse button, drag the mouse to highlight the section and release the mouse button.

To zoom in on the spectrum again, click on the section with the left mouse button, drag the mouse to highlight the section and release the mouse button.

## Zoom out

By double-clicking, you will return to the previous zoom. If you double-click again, you will return to the full spectrum. NMRium remembers all zoom levels

Vertical scaling of the spectrum is possible when you scroll the mouse wheel.

If you click the icon "zoom out" once, the horizontal scaling is zoomed out. If you click the icon "zoom out" twice, the horizontal and vertical scaling will be zoomed out.

## Vertical zoom

When the mouse cursor is over the 2D part of the spectrum and you turn the wheel of the mouse, you can change the vertical size of the spectrum. If the cursor of the mouse is over the 1D part of the spectrum and you turn the wheel, the size of the 1D part changes. 

# Zones

A zone is a correlation between a proton and a carbon. Every zone has a center. It is a area that contains all signals. 

## Define zones

### Auto zones picking

NMRium try to find out what are the zones that should be integrated. Click the zones picking button. Select a specified noise factor. Then press the Auto zones picking button. The zones found by NMRium are listed in the Zones panel on the right side of the workspace.

### Manual zones picking

To select a single zone, click the zones picking button. Move the mouse to the selected zone. Click on it with the left mouse button. Simultaneously press the shift key on the keyboard, drag over the whole zone and release the mouse button and the shift button. The exact value of the zone can be found in a table on the right side in the panel zones.

### Transference of the chemical shifts from the 1D spectra

If you do in a 1D proton spektrum peak picking or automatic range picking, automaticly you can see grey vertical lines in the 2D spectrum which correspond to the chemical shifts of the 1D proton signals. If you di in the 1D carbon spectrum peak picking or range picking, there also are grey horizobtal linesin the 2D spectrum which correspond to the chemical shift of the 1D carbon signals. 

### Panel Zones

All zones are shown in the Zones panel. The zones highlighted in yellow can be observed in the section of the spectrum shown. The zones highlighted in white are not visible in the screen section. If you switch off the zoom by double-clicking, the signals of the whole shown spectrum are highlighted in yellow. If you click on the funnel button, only the signals shown on the screen are listed. To see all the signals in the list again, press the Funnel button a second time. 

You can display various information in the zones panel. Click on the gear wheel at the top right. All measured nuclei will be displayed. You can choose to display the following values for each nucleus:

    Peak Number
    Peak Index
    Chemical shift (ppm)
    Chemical shift (Hz)
    Width
    Intensity

Place a check mark next to the values that you want to have displayed for the respective nucleus. You can also change the number of digets. Then click on the green check mark at the top right. 

### Delete all zones

To delete one zone move the mouse to the panel and select a zone. Press the trash button on the rigth side of the line of the zone. The zone is deleted.

### Delete a single zone

To delete all zones move the mouse to the panel zones and press the trash button on the left side above the list. A red box apears. Click "yes". All zones are deleted.

### Set a reference

Click the zones button to the left of the spectrum. Find your solvent zone (or the reference zone). When you point at it with the crosshairs, press the shift key and the left mouse button at the same time. The value of the signal will be shown in the list on the right side of the spectrum in the Zones panel. Click twice on the proton value and enter the correct reference value. Than click twice on the carbon value and also enter the correct value. All the values of the spectra will change. 

---
title: Colors
---

When loading 2D spectra in NMRium automatic positive and negative colors are applied following the following rules:

| Experiment | Positive color | Negative color |
| ---------- | -------------- | -------------- |
| cosy       | dark blue      | blue           |
| noesy      | pink           | yellow         |
| roesy      | pink           | yellow         |
| tocsy      | green          | yellow         |
| hsqc       | black          | yellow         |
| hmbc       | dark violet    | yellow         |
