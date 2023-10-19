// inquirer npm 

import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer.prompt([
    {message:"Type your URL here ===> ",
    name:"URL"}
])
.then((ans)=>{
//   console.log(ans);
    const url = ans.URL; // url we entered
    var qr_png = qr.image(url);
    var date = new Date().toISOString();
    const filename = `qr_img.png`;
    qr_png.pipe(fs.createWriteStream(filename));//creating image file
   
    fs.writeFile(`URL.txt`,url, (err)=>{
        if(err) throw err;
        console.log("This file has been saved!");
    })
})
.catch((error)=>{
    if(error.isTtyError){
        console.error("Prompt couldn't be rendered in the current environment.");
    }else{
        console.error("An error occured",error);
    }
})
