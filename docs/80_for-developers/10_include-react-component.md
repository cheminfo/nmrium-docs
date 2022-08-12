---
title: Include NMRium react component
---

You should first install the component

`npm i nmrium`

```jsx title="JSX code snippet"
import NMRium from 'nmrium';

function MyComponent() {
  return <NMRium />;
}
```

## Component props

| Name                   | Type                    | Default                  |  Description                                                                                           |
| -----------------------| ------------------------|--------------------------|--------------------------------------------------------------------------------------------------------|
| docsBaseUrl            | String                  | https://docs.nmrium.org  | Documentation base url                                                                                 |
| onDataChange           | Function():Object       |                          | This callback function will be called when change data in nmrium component                             |
| preferences            | Object                  |                          | Customize what tools and panels that can be used or displayed,see table below                          |
| data                   | Object                  | { spectra: [] }          | NMRium data                                                                                            |
| emptyText              | Object                  |                          | Customize text when no data                                                                            |
| workspace              | String                  | default                  | Customize Nmrium based on predefined workspaces, one of default, process1D, exercise, prediction, embedded      |
| getSpinner             | Function():ReactElement | Default spinner          | Customize spinner component                                                                            |




### preferences

| Name                   | Type           | Default                  |  Description                                                              |
| -----------------------| ---------------|--------------------------|---------------------------------------------------------------------------|
| general                | Object         |                          | Customize general tools and features, see table below                     |
| panels                 | Object         |                          | Customize which panels to display, see table below                        |
| toolBarButtons         | Object         |                          | Customize which tools can be used, see table below                        |

#### general

| Name                         | Type           | Default                        |  Description                                                              |
| -----------------------------| ---------------|--------------------------------|---------------------------------------------------------------------------|
| hideGeneralSettings          | Boolean        | false                          | Whether can open general settings or not                                  |
| hidePanelOnLoad              | Boolean        | false                          | Whether the side panel is closed or not on load                           |
| experimentalFeatures         | Boolean        | {display: false,open: false}   | Whether the experimental tools and panels is visible or not               |
| initialPanelWidth            | string         | 560px                          | Inital width for the side panel                                           |

#### panels

| Name                           | Type           | Default                                       |  Description                                       |
| -------------------------------| ---------------|-----------------------------------------------|----------------------------------------------------|
| spectraPanel                   | Object         |  {display: true,open: true ,hidden: false}    | Show/Hide Spectra panel                            |
| informationPanel               | Object         |  {display: true,open: false,hidden: false}    | Show/Hide Information panel                        |
| peaksPanel                     | Object         |  {display: true,open: false,hidden: false}    | Show/Hide Peaks panel                              |
| integralsPanel                 | Object         |  {display: true,open: false,hidden: false}    | Show/Hide Integrals panel                          |
| rangesPanel                    | Object         |  {display: true,open: false,hidden: false}    | Show/Hide Ranges panel                             |
| structuresPanel                | Object         |  {display: true,open: false,hidden: false}    | Show/Hide Structures panel                         |
| filtersPanel                   | Object         |  {display: true,open: false,hidden: false}    | Show/Hide Filters panel                            |
| zonesPanel                     | Object         |  {display: true,open: false,hidden: false}    | Show/Hide Zones panel                              |
| summaryPanel                   | Object         |  {display: true,open: false,hidden: false}    | Show/Hide Summary panel                            |
| multipleSpectraAnalysisPanel   | Object         |  {display: true,open: false,hidden: false}    | Show/Hide Multiple Spectra Analysis panel          |
| databasePanel                  | Object         |  {display: true,open: false,hidden: false}    | Show/Hide Database panel                           |
| predictionPanel                | Object         |  {display: true,open: false,hidden: false}    | Show/Hide Prediction panel                         |
| automaticAssignmentPanel       | Object         |  {display: true,open: false,hidden: false}    | Show/Hide Automatic assignment panel               |

#### toolBarButtons

| Name                             | Type           | Default                  |  Description                                                              |
| ---------------------------------| ---------------|--------------------------|---------------------------------------------------------------------------|
| zoom                         | Boolean        | false                    | Specify whether can zoom in                                               |
| zoomOut                      | Boolean        | false                    | Specify whether can full zoom out                                         |
| import                       | Boolean        | false                    | Specify whether can import from system files and remote url               |
| exportAs                     | Boolean        | false                    | Specify whether can export data to various extentions                     |
| spectraStackAlignments       | Boolean        | false                    | Specify whether can align the spectra in a stack                          |
| spectraCenterAlignments      | Boolean        | false                    | Specify whether can align the spectra in the center                       |
| realImaginary                | Boolean        | false                    | Specify whether can switch display between imaginary and real spectrum    |
| peakPicking                  | Boolean        | false                    | Specify whether can peaks picking ( manual and automatic picking )        |
| integral                     | Boolean        | false                    | Specify whether can add integral manually                                 |
| zonePicking                  | Boolean        | false                    | Specify whether can zones picking ( manual and automatic picking)         |
| slicing                      | Boolean        | false                    | Specify whether can use slicing tool                                      |
| rangePicking                 | Boolean        | false                    | Specify whether can ranges picking ( manual and automatic picking )       |
| apodization                  | Boolean        | false                    | Specify whether can apply apodization filter                              |
| zeroFilling                  | Boolean        | false                    | Specify whether can apply Zero Filling filter                             |
| phaseCorrection              | Boolean        | false                    | Specify whether can apply Phase Correction filter                         |
| baselineCorrection           | Boolean        | false                    | Specify whether can apply Base Line Correction filter                     |
| fastFourierTransform         | Boolean        | false                    | Specify whether can apply Fourier Transform filter                        |
| multipleSpectraAnalysis      | Boolean        | false                    | Specify whether can use multiple spectr anaysis tool                      |
| exclusionZones               | Boolean        | false                    | Specify whether can define exclusive zones                                |

