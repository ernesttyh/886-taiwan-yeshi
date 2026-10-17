Publication logos for the "As featured in" section (components/PressSection.tsx, lib/press.ts).

Drop the OFFICIAL logo file from each outlet's media kit here, using exactly these filenames:

  hungrygowhere.svg      HungryGoWhere
  eatbook.svg            Eatbook
  sethlui.svg            Seth Lui
  honeycombers.svg       The Honeycombers
  middleclass.svg        Middleclass.sg
  yahoo-life.svg         Yahoo Life Singapore
  greatnewplaces.svg     Great New Places

- SVG preferred. PNG also works: name it .png and change the `logo` path in lib/press.ts. Supply at 2× (~400×120 px) on a transparent background.
- Set `aspect` (width ÷ height) in lib/press.ts so the strip reserves the right box before the file loads.
- Logos are shown at their original colours, 28–36 px tall, with each outlet's name as the alt text.
- While a file is missing, the outlet name renders as text — nothing breaks.
- Check each outlet's brand guidelines for "as seen in" usage; most publishers allow their wordmark for attribution of a genuine feature.
