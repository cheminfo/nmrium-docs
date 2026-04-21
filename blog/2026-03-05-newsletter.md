---
slug: 2026-03-05-newsletter
title: NMRium new features - March 2026
authors: lpatiny
tags: [NMRium, newsletter]
---

This update introduces a new open file format and a one-command tool to publish NMR datasets to Zenodo.

1. **A new file format: `.nmrium.zip`.** Your NMR data should never be trapped in a proprietary format. NMRium now saves your work as a `.nmrium.zip` archive: your original data files (Bruker, JCAMP-DX, JEOL, etc.) are zipped as-is, and all processing and analysis (phase correction, peak picking, multiplet analysis, integrations, assignments…) is stored alongside as a simple JSON file. Your raw data stays untouched, the archive will still open in 50 years, and the format is FAIR-compliant by design. [Read the full format spec](/help/nmrium_zip).

2. **Metabolomics data submission in one command.** The new `zenodo-nmrium` command-line tool lets you submit NMR spectra directly to Zenodo — complete with rich metadata, interactive NMRium visualization, and a structured table of contents — all in a single command. Organize your samples in folders (or as `.nmrium.zip` files), add an `index.yml` with your metadata, and run:

   ```bash
   npx zenodo-nmrium ./my-nmr-dataset -t YOUR_TOKEN -p -a
   ```

   Your data is published with a DOI, made browsable with NMRium, and fully FAIR-compliant from the start. [See the documentation](/help/zenodo).
