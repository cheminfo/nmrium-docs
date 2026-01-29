---
title: NMRium file format
slug: /help/nmrium.zip
---

# NMRium Archive Format (`.nmrium.zip`)

## Overview

The **NMRium Archive File Format** (`.nmrium.zip`) is a ZIP-based container designed to persist _all_ data opened and processed in **NMRium** without converting them into a proprietary binary format.

The archive preserves:

- Original raw and processed spectral data files (unchanged)
- Associated chemical structures and metadata
- All user processing and annotations (phase correction, multiplet analysis, integrations, etc.)

By design, this format ensures **data integrity**, **traceability**, and **FAIR compliance** (Findable, Accessible, Interoperable, Reusable).

## Design Principles

1. **Non-destructive storage**  
   Original data files are stored _as-is_. No information is lost or transformed during saving.

2. **Reproducibility**  
   All processing steps applied in NMRium are stored separately from raw data and can be reapplied or inspected.

3. **Collision-free imports**  
   Each data import is assigned a UUID to avoid naming conflicts when the same dataset is imported multiple times.

4. **Interoperability**  
   Processing state and metadata are stored as JSON, making them easy to parse and index in external systems.

## File Extension and Packaging

- The archive is a standard ZIP file.
- The archive extends the [`ium`](https://cheminfo.github.io/file-collection/classes/FileCollection.html#toium) format.
- Typical file extension: `.nmrium.zip`
- The internal directory structure is stable and versioned.

## Archive Structure

```text
<archive>.nmrium.zip/
├── .mimetype
├── index.txt
├── index.json
├── state.json
├── META-INF/
│   ├── NMRIUM_ARCHIVE
│   └── VERSION
└── data/
    └── <UUID>/
        └── <dataset-name>/
            ├── proton.dx
            ├── carbon.dx
            ├── structure.mol
            ├── COSY_*.dx
            ├── HSQC_*.dx
            └── HMBC_*.dx
```

## Top-Level Files

### `.mimetype`

Identifies the archive type. This file is the first file entry of the ZIP to allow [fast type detection](https://cheminfo.github.io/file-collection/classes/FileCollection.html#isium).
It contains the following UTF-8 string: `chemical/x-nmrium+zip`.

## Index Files

### `index.txt`

Human-readable index of imported datasets.

Each dataset corresponds to a unique UUID directory under `data/`.

Example:

```text
data/a8a2792b-1d59-4695-9d40-8002dbd114b8/
    cytisine/13C_Cytisin_600_fid.dx (embedded)
    cytisine/cytisine.mol   (embedded)
    cytisine/1H_Cytisin_600MHz-R-I.dx   (embedded)
    cytisine/2d/COSY_Cytisin.dx (embedded)
    cytisine/2d/HMBC_Cytisin.dx (embedded)
    cytisine/2d/HSQC_Cytisin.dx (embedded)
```

### `index.json`

Machine-readable equivalent of `index.txt`, intended for programmatic access and external indexing.

## Data Directory

### `data/<UUID>/`

Each import operation is assigned a **universally unique identifier (UUID)**.

This guarantees:

- No filename collisions
- Safe repeated drag-and-drop of identical datasets

The UUID directory contains the original dataset hierarchy, preserved exactly as imported even if the files are not related to NMR.

### Embedded Files

All original files (e.g. `.dx`, `.mol`, bruker) are embedded _without modification_:

- 1D NMR spectra
- 2D NMR spectra (COSY, HSQC, HMBC, …)
- Chemical structure files

## Processing State

### `state.json`

Stores the complete NMRium application state.

This includes but is not limited to:

- Phase correction parameters
- Baseline correction
- Multiplet analysis
- Peak picking
- Integration values
- Assignments and annotations

Because the state is stored as **JSON**:

- It is human-readable
- It can be parsed easily by external tools
- Specific information (e.g. integrals or multiplets) can be extracted for database indexing

Raw data and processing state are kept **separate**, ensuring reproducibility and transparency.

## FAIR Compliance

The NMRium archive format follows FAIR principles:

- **Findable**: Indexed structure and explicit metadata
- **Accessible**: Standard ZIP container, no proprietary compression
- **Interoperable**: JSON state and standard spectral file formats
- **Reusable**: Original data preserved without loss

## Conclusion

The `.nmrium.zip` format is a durable, transparent, and future-proof container for NMR data and analysis. By preserving original files and storing all processing separately in structured JSON, it enables reproducible science, long-term archiving, and seamless integration with databases and external tools.
