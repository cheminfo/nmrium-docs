---
title: NMRium Archive File Format
slug: /help/nmrium.zip
---

# NMRium Archive File Format

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
- The archive extends the [`ium` file format](https://cheminfo.github.io/file-collection/classes/FileCollection.html#toium).
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

## Specification

### Conformance

The keywords _MAY_, _MUST_, _MUST NOT_, _OPTIONAL_, _RECOMMENDED_, _REQUIRED_, _SHOULD_, and _SHOULD NOT_
in the specification section of this document are to be interpreted as described in
**[BCP 14][BCP-14]**, **[RFC2119][RFC2119]**, **[RFC8174][RFC8174]** when, and only when, they appear in all capitals, as shown here.

### File Format Rules

1. It MUST be a valid `ium` file.
   1. `.mimetype` MUST be the first file entry of zip for signature check.
   2. It MUST contain the UTF-8 string `chemical/x-nmrium+zip`.
2. It MUST contain `index.json`.
   1. It MUST be a valid `ium` navigation document.  
      It contains options to init the `file-collection` and a list of sources (pointing to web resources, or local to the archive if `baseURL` starts with `ium:`).
3. It MUST contain `.META-IUM/NMRIUM_ARCHIVE` flag file. It SHOULD be empty, signal this archive is a NMRium Archive file.
4. It MUST contain `.META-IUM/VERSION` file. Content MUST be the UTF-8 string `1`.
5. It MUST contain a `state.json` file
   1. It MUST be valid `JSON`
   2. It MUST match the `@zakodium/nmrium-core#SerializedNmriumState` type.  
      `import type { SerializedNmriumState } from '@zakodium/nmrium-core';`
   3. All spectra and molecules SHOULD contain a `.selector` property
      1. `.root` SHOULD point to "folder" containing the original files.
      2. `.files` SHOULD containing a list of path relative to `.root` used to filter files to get the spectrum or molecule
6. It SHOULD contain an `index.txt` file for humans.  
   The list of files grouped by subroots, with `embedded` or `linked` annotations.
7. It MAY contain some folders not referenced by any spectra selector root or molecules selector root.  
   They SHOULD be ignored.
8. It MAY not contain some folders referenced by spectra selector root or molecules selector root.  
   If so, NMRium application SHOULD warn some files may miss and SHOULD ignore concerned spectra and molecules.

### Distribution Rules

1. It SHOULD have the `.nmrium.zip` file name extension.
2. When it is possible, it SHOULD be shared with `chemical/x-nmrium+zip` mimetype.  
   Ex: an HTTP Response SHOULD send the `Content-Type: chemical/x-nmrium+zip` header.

[BCP-14]: https://www.rfc-editor.org/info/bcp14
[RFC2119]: https://www.rfc-editor.org/rfc/rfc2119
[RFC8174]: https://www.rfc-editor.org/rfc/rfc8174
