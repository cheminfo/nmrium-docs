---
title: Loading jcamp from URL
---

If your NMR spectra are available from a URL it can be loaded directly by using the following syntax

<kbd>https://www.nmrium.org/nmrium</kbd><kbd>#?jcamp=</kbd><kbd>URL</kbd>

Where URL is the url that allows to retrieve the jcamp. Because you are appending the URL
after <kbd>#?</kbd> this information is not submitted to the server and therefore is suitable
even with confidential information (a URL containing an access token for example).

Here is an example of a working URL that loads a jcamp directly in NMRium.

[https://www.nmrium.org/nmrium#?jcamp=https://cheminfo.github.io/nmr-dataset-demo/ethylbenzene/1h.jdx](https://www.nmrium.org/nmrium#?jcamp=https://cheminfo.github.io/nmr-dataset-demo/ethylbenzene/1h.jdx)
