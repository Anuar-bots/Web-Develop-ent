import { Document, Packer, Paragraph, TextRun, HeadingLevel } from 'docx';
import fs from 'fs';

const doc = new Document({
    sections: [{
        properties: {},
        children: [
            // Titel
            new Paragraph({
                text: "Labo 11 - CSS Grid Opdrachten Samenvatting",
                heading: HeadingLevel.TITLE,
            }),

            // Beginsituatie
            new Paragraph({
                text: "Beginsituatie - Demo Grid",
                heading: HeadingLevel.HEADING_1,
            }),
            new Paragraph({
                children: [
                    new TextRun("Dit is een demonstratie van CSS Grid met 9 blokken."),
                ],
            }),
            new Paragraph({
                children: [
                    new TextRun({ text: "Wat je leert: ", bold: true }),
                    new TextRun("Basis grid layout, grid-template-columns, grid-template-rows, grid-column, grid-row, gap, en responsive design met media queries."),
                ],
            }),
            new Paragraph({
                children: [
                    new TextRun({ text: "Mobiel: ", bold: true }),
                    new TextRun("2 kolommen, sommige items verborgen."),
                ],
            }),
            new Paragraph({
                children: [
                    new TextRun({ text: "Desktop (>760px): ", bold: true }),
                    new TextRun("3 kolommen (1fr 2fr 1fr), alle items zichtbaar."),
                ],
            }),
            new Paragraph({ text: "" }),

            // Opdracht 1
            new Paragraph({
                text: "Opdracht 1 - Eenvoudige Grid",
                heading: HeadingLevel.HEADING_1,
            }),
            new Paragraph({
                children: [
                    new TextRun({ text: "Doel: ", bold: true }),
                    new TextRun("Maak een grid met 9 blokken in 3 kolommen."),
                ],
            }),
            new Paragraph({
                children: [
                    new TextRun({ text: "CSS gebruikt: ", bold: true }),
                    new TextRun("display: grid, grid-template-columns: auto auto auto"),
                ],
            }),
            new Paragraph({
                children: [
                    new TextRun({ text: "Resultaat: ", bold: true }),
                    new TextRun("Witte blokken op blauwe achtergrond, 3x3 layout."),
                ],
            }),
            new Paragraph({ text: "" }),

            // Opdracht 2
            new Paragraph({
                text: "Opdracht 2 - Grid met Fractions",
                heading: HeadingLevel.HEADING_1,
            }),
            new Paragraph({
                children: [
                    new TextRun({ text: "Doel: ", bold: true }),
                    new TextRun("Maak een grid met 4 kolommen en 3 rijen."),
                ],
            }),
            new Paragraph({
                children: [
                    new TextRun({ text: "CSS gebruikt: ", bold: true }),
                    new TextRun("grid-template-columns: 1fr 1fr 1fr 1fr, grid-template-rows: 1fr 1fr 1fr"),
                ],
            }),
            new Paragraph({
                children: [
                    new TextRun({ text: "Nieuw concept: ", bold: true }),
                    new TextRun("fr (fraction) - verdeelt beschikbare ruimte gelijkmatig."),
                ],
            }),
            new Paragraph({ text: "" }),

            // Opdracht 3
            new Paragraph({
                text: "Opdracht 3 - Grid Template Areas",
                heading: HeadingLevel.HEADING_1,
            }),
            new Paragraph({
                children: [
                    new TextRun({ text: "Doel: ", bold: true }),
                    new TextRun("Maak een diagonaal patroon met grid-template-areas."),
                ],
            }),
            new Paragraph({
                children: [
                    new TextRun({ text: "CSS gebruikt: ", bold: true }),
                    new TextRun("grid-template-areas, grid-area, repeat(5, 1fr)"),
                ],
            }),
            new Paragraph({
                children: [
                    new TextRun({ text: "Patroon: ", bold: true }),
                    new TextRun("Blokken in X-vorm (hoeken en diagonaal)."),
                ],
            }),
            new Paragraph({ text: "" }),

            // Opdracht 4
            new Paragraph({
                text: "Opdracht 4 - Responsive Grid Areas",
                heading: HeadingLevel.HEADING_1,
            }),
            new Paragraph({
                children: [
                    new TextRun({ text: "Doel: ", bold: true }),
                    new TextRun("Combineer grid-template-areas met media queries."),
                ],
            }),
            new Paragraph({
                children: [
                    new TextRun({ text: "Desktop: ", bold: true }),
                    new TextRun("5x5 grid met X-patroon."),
                ],
            }),
            new Paragraph({
                children: [
                    new TextRun({ text: "Mobiel (<700px): ", bold: true }),
                    new TextRun("3x3 eenvoudige grid."),
                ],
            }),
            new Paragraph({ text: "" }),

            // Opdracht 5
            new Paragraph({
                text: "Opdracht 5 - Complex Layout met Areas",
                heading: HeadingLevel.HEADING_1,
            }),
            new Paragraph({
                children: [
                    new TextRun({ text: "Doel: ", bold: true }),
                    new TextRun("Maak een complexe layout waar items meerdere cellen beslaan."),
                ],
            }),
            new Paragraph({
                children: [
                    new TextRun({ text: "Layout: ", bold: true }),
                    new TextRun("Block 1 beslaat hele bovenste rij, Block 2 beslaat 2 rijen, Block 5 beslaat 2 kolommen, etc."),
                ],
            }),
            new Paragraph({
                children: [
                    new TextRun({ text: "Nieuw: ", bold: true }),
                    new TextRun("gap: 5px voor ruimte tussen items, gekleurde achtergronden per blok."),
                ],
            }),
            new Paragraph({ text: "" }),

            // Opdracht 6
            new Paragraph({
                text: "Opdracht 6 - Mobile First Responsive",
                heading: HeadingLevel.HEADING_1,
            }),
            new Paragraph({
                children: [
                    new TextRun({ text: "Doel: ", bold: true }),
                    new TextRun("Mobile-first responsive design met order property."),
                ],
            }),
            new Paragraph({
                children: [
                    new TextRun({ text: "Mobiel (>320px): ", bold: true }),
                    new TextRun("1 kolom, volgorde 1-2-3-4."),
                ],
            }),
            new Paragraph({
                children: [
                    new TextRun({ text: "Tablet (>772px): ", bold: true }),
                    new TextRun("2 kolommen, volgorde verandert (1-3-2-4)."),
                ],
            }),
            new Paragraph({
                children: [
                    new TextRun({ text: "Desktop (>992px): ", bold: true }),
                    new TextRun("1 kolom, normale volgorde."),
                ],
            }),
            new Paragraph({
                children: [
                    new TextRun({ text: "Nieuw concept: ", bold: true }),
                    new TextRun("order property om visuele volgorde te veranderen."),
                ],
            }),
        ],
    }],
});

Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("C:\\Users\\anuar\\OneDrive\\Documents\\GitHub\\Web-Develop-ent\\Anuar-Echaine\\WebDevelopment-main\\Labo_11\\Labo11_Grid_Samenvatting.docx", buffer);
    console.log("DOCX bestand aangemaakt: Labo11_Grid_Samenvatting.docx");
});
