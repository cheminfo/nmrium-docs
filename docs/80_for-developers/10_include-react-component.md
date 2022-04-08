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

| Name         | Type                    | Default                 | Description                                                                                      |
| ------------ | ----------------------- | ----------------------- | ------------------------------------------------------------------------------------------------ |
| docsBaseUrl  | String                  | https://docs.nmrium.org | Documentation base url                                                                           |
| onDataChange | Function():Object       |                         | This callback function will be called when change data in nmrium component                       |
| preferences  | Object                  |                         | Customize what tools and panels that can be used or displayed,see table below                    |
| data         | Object                  | { spectra: [] }         | NMRium data                                                                                      |
| emptyText    | Object                  |                         | Customize text when no data                                                                      |
| workspace    | String                  | default                 | Customize Nmrium based on predefined workspaces, one of default, process1D, exercise, prediction |
| getSpinner   | Function():ReactElement | Default spinner         | Customize spinner component                                                                      |

### preferences

| Name           | Type   | Default | Description                                           |
| -------------- | ------ | ------- | ----------------------------------------------------- |
| general        | Object |         | Customize general tools and features, see table below |
| panels         | Object |         | Customize which panels to display, see table below    |
| toolBarButtons | Object |         | Customize which tools can be used, see table below    |

#### general

| Name                     | Type    | Default | Description                               |
| ------------------------ | ------- | ------- | ----------------------------------------- |
| disableMultipletAnalysis | Boolean | false   | Whether can use myltiple analysis feature |
| hideSetSumFromMolecule   | Boolean | false   | Whether can set the sum from molecule     |
| hideGeneralSettings      | Boolean | false   | Whether can open general settings or not  |

#### panels

| Name                             | Type    | Default | Description                               |
| -------------------------------- | ------- | ------- | ----------------------------------------- |
| hideSpectraPanel                 | Boolean | false   | Show/Hide Spectra panel                   |
| hideInformationPanel             | Boolean | false   | Show/Hide Information panel               |
| hidePeaksPanel                   | Boolean | false   | Show/Hide Peaks panel                     |
| hideIntegralsPanel               | Boolean | false   | Show/Hide Integrals panel                 |
| hideRangesPanel                  | Boolean | false   | Show/Hide Ranges panel                    |
| hideStructuresPanel              | Boolean | false   | Show/Hide Structures panel                |
| hideFiltersPanel                 | Boolean | false   | Show/Hide Filters panel                   |
| hideZonesPanel                   | Boolean | false   | Show/Hide Zones panel                     |
| hideSummaryPanel                 | Boolean | false   | Show/Hide Summary panel                   |
| hideMultipleSpectraAnalysisPanel | Boolean | false   | Show/Hide Multiple Spectra Analysis panel |
| hideDatabasePanel                | Boolean | false   | Show/Hide Database panel                  |

#### toolBarButtons

| Name                            | Type    | Default | Description                                                            |
| ------------------------------- | ------- | ------- | ---------------------------------------------------------------------- |
| hideZoomTool                    | Boolean | false   | Specify whether can zoom in                                            |
| hideZoomOutTool                 | Boolean | false   | Specify whether can full zoom out                                      |
| hideImport                      | Boolean | false   | Specify whether can import from system files and remote url            |
| hideExportAs                    | Boolean | false   | Specify whether can export data to various extentions                  |
| hideSpectraStackAlignments      | Boolean | false   | Specify whether can align the spectra in a stack                       |
| hideSpectraCenterAlignments     | Boolean | false   | Specify whether can align the spectra in the center                    |
| hideRealImaginary               | Boolean | false   | Specify whether can switch display between imaginary and real spectrum |
| hidePeakTool                    | Boolean | false   | Specify whether can peaks picking ( manual and automatic picking )     |
| hideIntegralTool                | Boolean | false   | Specify whether can add integral manually                              |
| hideZonePickingTool             | Boolean | false   | Specify whether can zones picking ( manual and automatic picking)      |
| hideSlicingTool                 | Boolean | false   | Specify whether can use slicing tool                                   |
| hideAutoRangesTool              | Boolean | false   | Specify whether can ranges picking ( manual and automatic picking )    |
| hideZeroFillingTool             | Boolean | false   | Specify whether can apply Zero Filling filter                          |
| hidePhaseCorrectionTool         | Boolean | false   | Specify whether can apply Phase Correction filter                      |
| hideBaseLineCorrectionTool      | Boolean | false   | Specify whether can apply Base Line Correction filter                  |
| hideFFTTool                     | Boolean | false   | Specify whether can apply Fourier Transform filter                     |
| hideMultipleSpectraAnalysisTool | Boolean | false   | Specify whether can use multiple spectr anaysis tool                   |
| hideExclusionZonesTool          | Boolean | false   | Specify whether can define exclusive zones                             |
