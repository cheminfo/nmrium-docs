---
title: NMRium file format
---

The NMRium file format is a JSON that may (or may not) be zipped.

In order to determine if the format is zipped you can check the first 4 bytes of the buffer to see if it matches 
hexadecimal code `50 4b 03 04` (file signature for zip file, https://en.wikipedia.org/wiki/List_of_file_signatures).

