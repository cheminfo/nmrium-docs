# Loading files from URL

## Loading a jcamp from URL

If your NMR spectra are available from a URL it can be loaded directly by using the following syntax

<kbd>https://www.nmrium.org/nmrium</kbd><kbd>#?jcamp=</kbd><kbd>jcampURL</kbd>

Where URL is the url that allows to retrieve the jcamp. Because you are appending the URL
after <kbd>#?</kbd> this information is not submitted to the server and therefore is suitable
even with confidential information (a URL containing an access token for example).

Here is an example of a working URL that loads a jcamp directly in NMRium.

[https://www.nmrium.org/nmrium#?jcamp=https://cheminfo.github.io/nmr-dataset-demo/ethylbenzene/1h.jdx](https://www.nmrium.org/nmrium#?jcamp=https://cheminfo.github.io/nmr-dataset-demo/ethylbenzene/1h.jdx)

## Loading a NMRium file from URL

NMRium files contains all the information related to the spectra to display. This includes the data (or where to find the data), the processing and the assignment.

Here is an example of a working URL that loads a NMRium file format directly in NMRium.

[https://www.nmrium.org/nmrium#?nmrium=https://cheminfo.github.io/nmr-dataset-demo/coffee/coffee.nmrium](https://www.nmrium.org/nmrium#?nmrium=https://cheminfo.github.io/nmr-dataset-demo/coffee/coffee.nmrium)

## Loading a table of contents

It you would like to have a menu on the left containing many examples you should load a correctly formatted `.json` file. In this case the URL has the following structure:

<kbd>https://www.nmrium.org/nmrium</kbd><kbd>#?json=</kbd><kbd>jsonURL</kbd>

Here is an example of the content of the toc json file:

```json
[
  {
    "file": "./artemisin/1h.json",
    "title": "artemisin",
    "view": "",
    "selected": true
  },
  {
    "file": "./borohydride/1h.json",
    "title": "borohydride",
    "view": ""
  },
  {
    "file": "./cyclopropanes/1h.json",
    "title": "cyclopropane derivatives",
    "view": ""
  },
  {
    "file": "./cyclopropnes_wrongPhase/1h.json",
    "title": "cyclopropane derivatives with wrong phase",
    "view": ""
  },
  {
    "file": "./geraniol/1h.json",
    "title": "geraniol",
    "view": ""
  },
  {
    "file": "./glucose/1h.json",
    "title": "glucose",
    "view": ""
  }
]

```

The `file` attribute will contain the relative link to an NMRium file (encodes as a JSON) that describes the set of jcamp-dx to load. It may also contain chemical structures.

```json
{
  "spectra": [
    {
      "data": {},
      "id": "0abwvynpah97",
      "source": {
        "jcampURL": "./artemisin/1h.jdx"
      },
      "display": {
        "name": "artemisin",
        "color": "#C10020"
      }
    }
  ],
  "molecules": [
    {
      "molfile": "68827\r\n  -OEChem-12311614122D\r\n\r\n 42 45  0  0  0  0  0  0  0  0999 V2000\r\n    4.3177    0.4203    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.7899    1.1100    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    6.4870   -0.3207    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    4.5402    1.3953    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    7.4004   -1.8275    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\r\n    4.6664   -0.2988    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    3.7655    0.1351    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    4.7603   -1.3362    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    2.8959   -0.4383    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.5674    0.1351    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    3.9042   -1.9296    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    3.5430    1.1100    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    2.9657   -1.4776    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.6389   -1.8668    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.1664    1.8919    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    4.1664    1.8919    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    2.0000    0.0059    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    6.5237   -1.3465    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.6330   -2.8668    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.3890    2.8668    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\r\n    2.9996    0.5039    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n    4.7870   -2.1858    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n    2.3803   -0.7826    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.8780   -0.6561    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n    3.5436   -2.4339    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n    4.3394   -2.3712    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n    3.1564    1.5948    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n    2.9844    0.8410    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n    2.3491   -1.4127    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n    2.7963   -2.0740    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n    6.1762   -2.1762    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n    4.3044    2.4963    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n    3.6078    2.1609    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n    2.2755    0.5614    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n    1.4446    0.2814    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n    1.7246   -0.5495    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.0130   -2.8632    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.6294   -3.4868    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n    6.2530   -2.8704    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.9934    2.7288    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n    5.5269    3.4712    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n    4.7845    3.0048    0.0000 H   0  0  0  0  0  0  0  0  0  0  0  0\r\n  1  4  1  0  0  0  0\r\n  4 15  1  0  0  0  0\r\n 15 16  1  0  0  0  0\r\n 15 20  1  0  0  0  0\r\n  2 15  1  0  0  0  0\r\n  2 10  1  0  0  0  0\r\n 10 24  1  0  0  0  0\r\n  3 10  1  0  0  0  0\r\n  3 18  1  0  0  0  0\r\n 14 31  1  0  0  0  0\r\n 14 18  1  0  0  0  0\r\n 14 19  1  0  0  0  0\r\n  8 22  1  0  0  0  0\r\n  8 14  1  0  0  0  0\r\n  8 11  1  0  0  0  0\r\n  6  1  1  0  0  0  0\r\n  6 10  1  0  0  0  0\r\n  6  8  1  0  0  0  0\r\n  6  7  1  0  0  0  0\r\n  7 21  1  0  0  0  0\r\n  7  9  1  0  0  0  0\r\n  7 12  1  0  0  0  0\r\n  9 23  1  0  0  0  0\r\n  9 13  1  0  0  0  0\r\n  9 17  1  0  0  0  0\r\n 13 30  1  0  0  0  0\r\n 13 29  1  0  0  0  0\r\n 11 25  1  0  0  0  0\r\n 11 26  1  0  0  0  0\r\n 11 13  1  0  0  0  0\r\n 16 33  1  0  0  0  0\r\n 16 32  1  0  0  0  0\r\n 12 28  1  0  0  0  0\r\n 12 27  1  0  0  0  0\r\n 12 16  1  0  0  0  0\r\n 20 41  1  0  0  0  0\r\n 20 42  1  0  0  0  0\r\n 20 40  1  0  0  0  0\r\n  5 18  2  0  0  0  0\r\n 19 38  1  0  0  0  0\r\n 19 39  1  0  0  0  0\r\n 19 37  1  0  0  0  0\r\n 17 34  1  0  0  0  0\r\n 17 35  1  0  0  0  0\r\n 17 36  1  0  0  0  0\r\nM  ZZC   1 20\r\nM  ZZC   2 14\r\nM  ZZC   3 2\r\nM  ZZC   4 19\r\nM  ZZC   5 16\r\nM  ZZC   6 6\r\nM  ZZC   7 10\r\nM  ZZC   8 5\r\nM  ZZC   9 9\r\nM  ZZC  10 1\r\nM  ZZC  11 7\r\nM  ZZC  12 11\r\nM  ZZC  13 8\r\nM  ZZC  14 4\r\nM  ZZC  15 13\r\nM  ZZC  16 12\r\nM  ZZC  17 18\r\nM  ZZC  18 3\r\nM  ZZC  19 17\r\nM  ZZC  20 15\r\nM  ZZC  21 29\r\nM  ZZC  22 23\r\nM  ZZC  23 28\r\nM  ZZC  24 21\r\nM  ZZC  25 25\r\nM  ZZC  26 24\r\nM  ZZC  27 31\r\nM  ZZC  28 30\r\nM  ZZC  29 27\r\nM  ZZC  30 26\r\nM  ZZC  31 22\r\nM  ZZC  32 32\r\nM  ZZC  33 33\r\nM  ZZC  34 40\r\nM  ZZC  35 41\r\nM  ZZC  36 42\r\nM  ZZC  37 37\r\nM  ZZC  38 38\r\nM  ZZC  39 39\r\nM  ZZC  40 34\r\nM  ZZC  41 35\r\nM  ZZC  42 36\r\nM  END\r\n"
    }
  ]
}
```

Here is a working example
[https://www.nmrium.org/nmrium#?toc=https%3A%2F%2Fcheminfo.github.io%2Fnmr-dataset3%2Fmultiplet%2Findex.json](https://www.nmrium.org/nmrium#?toc=https%3A%2F%2Fcheminfo.github.io%2Fnmr-dataset3%2Fmultiplet%2Findex.json)
