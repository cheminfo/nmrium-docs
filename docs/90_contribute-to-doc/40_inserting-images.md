---
title: Inserting an image
---

Screen snapshot should be saved either as `.png` or `.gif` files. On OsX you can take a screen snapshot of the part of a screen using <kbd>SHIFT</kbd><kbd>CMD</kbd><kbd>4</kbd> and then draw the selection of the screen you would like to save.

## On OsX

Buy and install Gifox. It allows to make nice animated gif

## On windows

https://www.screentogif.com/

## Insert a link in your .md document

We should put the images in a folder called `img` at the same level as the md document.

```md
![Import file](./img/import_from_file_system.png)
```

In this code `!` indicates that you are inserting an image and that this is not a link. In the square bracket you will add a small image description used for visually impaired persons. Finally in parenthesis you will add the relative path to the image. Because we put all the images in a folder called `img` at the same level of the `md` file the relative path should starts with `./img/`.

Please don't use spaces in the name of the image but only '-'.
