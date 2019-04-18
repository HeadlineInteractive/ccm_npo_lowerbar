# CCM - npo_lowerbar restyle package
Dit project bevat de CCM NPO Lowerbar styling. Dit pakket kan gebruikt worden om de CCM te herstijlen met gebruik van de voorbeeld SASS en te builden naar CSS.

Gebuilde CSS kunnen worden geupload in het CCM CMS.

## Aanpassingen maken
Aanpassingen kunnen toegepast worden door npo_lowerbar.sass aan te passen. Dit is gemaakt in SASS, zie ook https://sass-lang.com/ .

Het is ook mogelijk om rechtstreeks CSS aan te passen. Volg hiervoor de install en build stappen om CSS te builden.

## Install
In het project zit GulpJS bijgeleverd. Dit kan automatisch alle dependencies installeren voor het builden van CSS op basis van de SASS.
Om de dependencies te installeren voer het volgende commando uit in de project directory:
```
gulp install
```

## Build
Met de package is het mogelijk 2 soorten CSS te builden.

### Build CSS voor staging/productie
Dit is een minified CSS welk geupload kan worden in de CCM CMS.
```
gulp sass-minify
```

### Build CSS om te editen
Het is ook mogelijk de CSS aan te passen zonder SASS. Build daarom de CSS zonder te minifyen met hetvolgende commando:
```
gulp sass
```