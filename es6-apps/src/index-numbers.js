//String literals
//string '',"",``(es 6)

//var firstName = "Subramanian";
let firstName = "Subramanian";
let city = 'Coimbatore';

//string concatnation : +
console.log("First Name " + firstName);
console.log('City' + city);
//string concatnation : ,
console.log("First Name", firstName);
console.log('City ', city);
//ES 6 pattern : //string concatnation : ``
//back tick and template literal pattern.
console.log(`First Name  ${firstName}`);
console.log(`City ${city}`);


//string back tic noation use cases
//string concation

let htmlDoc = "<html>" +
      "<head>" +
      "<body>" +
      "</body>" +
      "</html>";

let title = 'IBM-Digitial';
let htmlnewDoc = `<html>
                  <head>
                        <title>${title}</title>
                  </head>
                  <body>
                        <h1>Hello</h1>
                  </body>
                  </html>
      `;
console.log(htmlDoc)
console.log(htmlnewDoc);