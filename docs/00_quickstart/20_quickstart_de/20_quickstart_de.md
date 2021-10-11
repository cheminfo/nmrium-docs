---
title: Quick Start Guide (Deutsch)
description: Eine kurze Beschreibung der wichtigsten Funktionen in NMRium
---


## 1. Öffnen des Programms

Öffnen Sie das Programm in Ihrem Browser, indem Sie auf folgenden Link klicken:

[https://www.nmrium.org/nmrium/](https://www.nmrium.org/nmrium/)

## 2. Öffnen von Spektren

Um Spektren öffnen zu können, müssen sie in einem der folgenden Dateiformate vorliegen:

- Jcamp DX (.dx, .jdx, .jcamp)
- Gezippter Ordner im Bruker-Format (Rohdaten oder prozessierte Daten)
- Jeol (.jdf)
- NMRium-Datei (.nmrium)

Ziehen Sie die Datei, die Sie öffnen wollen, mit der Maus in die graue Box **Drag and drop here** in der Mitte des Bildschirms. Sie können ein Spektrenset öffnen, indem Sie entweder die Spektren einzeln in die Arbeitsfläche ziehen oder indem Sie einen gezippten Ordner, der alle Spektren enthält, in die graue Box ziehen. Außerdem können gezippte Bruker-Ordner, die mehrere Spektren enthalten, öffnen.

![](./img101.png)


## 3. Spektren auswählen

Auf der rechten Seite des Spektrums befindet sich ein aufklappbares Menu mit verschiedenen Panels. Klicken Sie das Panel **Spectra** an. Die Spektren werden den gemessenen Kernen zugeordnet, zum Beipiel 1H, 13C etc. Wenn Sie auf den entsprechenden Kern klicken, dann finden Sie die dazugehörigen Spektren. Wählen Sie ein Experiment aus, indem Sie auf die entsprechende Zeile klicken. Das Spektrum wird in der Arbeitsfläche geöffnet.

![](./img102.png)

:::info Wobble Kurven

Bruker-Ordner können Dateien mit sogenannten **Wobble-Kurven** enthalten. Es ist sinnvoll, diese vor der Bearbeitung der restlichen Spektren zu löschen. Sie erkennen Sie an dem Spektrennamen **wobble**. Klicken Sie das entsprechende Spektrum mit der rechten Maustaste an. Klicken Sie **delete** in der sich öffnenden Box an, um die Wobble-Kurve zu löschen.

:::

:::tip Änderung der Spektrenfarbe

Sie können die Farbe Ihres Spektrums ändern, indem Sie auf den farbigen kleinen Kasten rechts in der Zeile Ihres Spektrums klicken. In dem sich öffnenden Fenster können Sie eine Farbe auswählen. Bei 2D-Experimenten sind die Farben für die positive und die negativen Peaks frei wählbar. 

:::

## 4. Löschen eines Spektrums

Um ein einzelnes Spektrum zu löschen klicken Sie mit der rechten Maustaste auf die entsprechende Zeile im Panel **Spectra**. Klicken Sie anschließend **delete**, um das Spektrum zu löschen. Wenn Sie alle Spektren eines Kerns löschen wollen, klicken Sie auf das Papierkorbsymbol im Panel **spectra**. Klicken Sie anschließend **yes** im sich öffnenden Fenster. 

## 5. Zoom a section

Um einen Auschnitt  des Spektrums zu vergrößern, fahren sie mit der Maus über den zu vergrößernden Ausschnitt des Spektrums und halten Sie dabei die linke Maustaste gedrückt. Beim loslassen erscheint der ausgewählte Bereich des Spektrums. Sie können diesen  Vorgang beliebig oft wiederholen.  Mit einem Doppelklick irgendwo im Spektrum können Sie die Vergrößerung rückgängig machen. To zoom a section of a spectrum, drag over it with the left mouse button. You can repeat this process as often as you like. Um zur ursprünglichen Vergrößerung zurückzugelangen, klicken sie auf den Button **Horizontal zoom out** in der Menuebar auf der linken Seite des Spektrums. 

## 6. Einfügen einer Molekülstruktur

Es gibt zwei Möglichkeiten, eine Molekülstruktur in das Programm einzufügen:

:::note Molfile

Ziehen Sie eine  Molfile-Datei mit der Maus in die Arbeitsfläche. Der Panel **Structures** wird geöffnet. Dort werden Ihnen sowohl die Molekülstruktur als auch die Summenformel und die molare Massen angezeigt.

:::

:::note Integrierter Struktur-Editor

Klicken Sie auf den Panel **Structures** auf der rechten Seite des Spektrums und dort anschließend auf den Button **+**. Es öffnet sich ein Fenster. Dort können Sie Ihre Molekülstruktur selbst zeichnen. Wenn Sie fertig sind, klicken Sie auf **Save**. Die Struktur wird im Panel *Structures** gespeichert, Sie finden Sie dort, zusammen mit der Summenformel und der molaren Masse. 
:::

![](./img103.png)

