var hummus = require('hummus'),
    PDFDigitalForm = require('./pdf-digital-form')

var pdfParser = hummus.createReader('demo.pdf');
var digitalForm = new PDFDigitalForm(pdfParser);

if(digitalForm.hasForm()) {
    console.log(digitalForm.fields);
    console.log(digitalForm.createSimpleKeyValue());
}