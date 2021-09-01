---
title: Loading jcamp from URL
---

If your NMR spectra are available from a URL it can be loaded directly by using the following syntax

<kbd>https://www.nmrium.org/nmrium</kbd><kbd>#?jcamp=</kbd><kbd>jcampURL</kbd>

Where URL is the url that allows to retrieve the jcamp. Because you are appending the URL
after <kbd>#?</kbd> this information is not submitted to the server and therefore is suitable
even with confidential information (a URL containing an access token for example).

Here is an example of a working URL that loads a jcamp directly in NMRium.

[https://www.nmrium.org/nmrium#?jcamp=https://cheminfo.github.io/nmr-dataset-demo/ethylbenzene/1h.jdx](https://www.nmrium.org/nmrium#?jcamp=https://cheminfo.github.io/nmr-dataset-demo/ethylbenzene/1h.jdx)

It you would like to have a menu on the left containing many examples you should load a correctly formatted `.json` file. In this case the URL has the following structure:

<kbd>https://www.nmrium.org/nmrium</kbd><kbd>#?json=</kbd><kbd>jsonURL</kbd>

Here is an example 
[https://www.nmrium.org/nmrium#?toc=https%3A%2F%2Fcheminfo.github.io%2Fnmr-dataset3%2Fmultiplet%2Findex.json](https://www.nmrium.org/nmrium#?toc=https%3A%2F%2Fcheminfo.github.io%2Fnmr-dataset3%2Fmultiplet%2Findex.json)

More information will come on the description of this JSON file.
