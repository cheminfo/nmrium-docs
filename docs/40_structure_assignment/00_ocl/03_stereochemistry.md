---
sidebar_label: Stereochemistry
title: OCL editor and stereochemistry
slug: /ocl/stereochemistry
---

Stereochemistry in organic chemistry is a complex topic. You may encounter axial chirality, racemic compounds, mixtures of diastereoisomers, and more. The OpenChemLib editor supports Enhanced Stereo Recognition (ESR), a feature introduced by Molecular Design Ltd. with IsisDraw V2.5. ESR tools allow you to define, for each stereocenter, whether it has an absolute configuration or belongs to a group of stereocenters with a relative configuration. For any group of relative stereocenters, you can specify that both the drawn and the inverse configurations are present, indicating a racemic mixture. This is shown by green stereo bonds and an ampersand ('&') at the stereocenters. Alternatively, you can define groups of relative stereocenters that contain either the drawn configuration or its opposite. These are indicated by blue stereo bonds and the word 'or' at the stereocenters. Group numbers are used to show which stereocenters belong to the same group.

## One chiral center: 2-chlorobutane

The OpenChemLib editor will enforce chirality. If there is too much or not enough information about stereochemistry, it will be represented by pink bonds.

![chlorobutane-unspecified.png](03_stereo/chlorobutane-unspecified.png)

Even with this simple molecule, there are three possibilities:

- There is only one enantiomer and we know which one.
- We have a mixture of both enantiomers (&).
- There is only one enantiomer, but we don't know which one (or).

To differentiate between these three possibilities, three enhanced stereo recognition bonds are available.

![esr.png](03_stereo/esr.png)

To switch between the different stereochemical possibilities, first add a chiral bond to your structure. Then, use the enhanced stereochemistry tool to select one of the three options: only this enantiomer, both enantiomers (racemic mixture), or one enantiomer with unknown configuration. This allows precise control over how stereochemistry is represented in your molecule.

![changing.png](03_stereo/changing.png)

![chlorobutane-absolute.png](03_stereo/chlorobutane-absolute.png)

![chlorobutane-one.png](03_stereo/chlorobutane-one.png)

![chlorobutane-both.png](03_stereo/chlorobutane-both.png)

Alternatively, you can also specify that the configuration of the chiral center is unknown using ![unknownConfigurationTool.gif](03_stereo/unknownConfigurationTool.gif).

![chlorobutane-unknown.png](03_stereo/chlorobutane-unknown.png)

## Two chiral centers: 2,3-bromochlorobutane

Each chiral center can be addressed separately, and many possibilities exist. Here are a couple of examples:

- Two chiral centers, but the relationship between the two centers is fixed and you obtain a pair of enantiomers (racemate):

![bromochlorobutane-racemate.png](03_stereo/bromochlorobutane-racemate.png)

- Only one enantiomer with a known relationship between the two chiral centers:

![bromochlorobutane-enantiomer.png](03_stereo/bromochlorobutane-enantiomer.png)

- Absolute configuration of one chiral center and one of the two possible diastereoisomers:

![bromochlorobutane-onestereo.png](03_stereo/bromochlorobutane-onestereo.png)

- Absolute configuration of one chiral center and both possible diastereoisomers:

![bromochlorobutane-epimer.png](03_stereo/bromochlorobutane-epimer.png)

## Axial chirality

The OpenChemLib editor is able to handle axial chirality, as in the case of allenic or binap systems.

![axial-unknown.png](03_stereo/axial-unknown.png)

![allene-unknown.png](03_stereo/allene-unknown.png)

![allene-absolute.png](03_stereo/allene-absolute.png)

![binpaphthol.png](03_stereo/binpaphthol.png)
