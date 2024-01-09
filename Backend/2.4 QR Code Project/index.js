/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter the URL:',
        }
    ])
    .then((answers) => {
        // Use user feedback for... whatever!!
        let qrCode = qr.image(answers.url, { type: 'png' });

        const fileName = 'input.txt';
        const filePath = `${__dirname}/${fileName}`;
        fs.writeFileSync(filePath, `URL entered: ${answers.url}`);
        console.log(`QR Code has been saved in "${fileName}"`);
    })
    .catch((error) => {
    if (error.isTtyError) {
        Prompt could not be rendered in the current environment
    } else {
        Something else went wrong
    }
  });