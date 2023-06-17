const http = require("http");
const fs = require("fs");  // file model ko require kia 

const server = http.createServer((request, response) => {
    // file creat karney ke leye fs me se open methood ko call kia
    // pehla argoment me file name extention ke sath dena hey
    // sec argoment me file ke barey me batana hey ye write able hey ya read able
    // write file rakhney k leye "w" ka flage den gey
    // third me error or success ko handel karney ke leye call back ko handel karen gey
    //  write file me call back milta hey us ko handel karna hota hey 
    /*
    fs.open("memo.txt","w",(error,success)=>{   
        if(error){
            throw error
        }
        console.log("file creat success fully")
        fs.writeFile("memo.txt","my name is nasir",(error,successWrite)=>{
            if(error){
                throw error
            }
            console.log("success ful write")
        })
    })
    response.end();
    */


    //----------------------------- fs.writeFileSync ----------------
    // fs.writeFileSync ko use karne k leye try catch me use karna ho ga 
    /*
    try{
     fs.writeFileSync("tryfile.txt","file create and writefile with out open methood use and call back use");
     response.write("success")
     response.end();
    
    }catch(error){
    console.log(error)
    response.end();
    }
    */

    //--------------------------------readFile use trycatch fs.readFileSync -------

    // file ko read karney k leye try catch me fs.readFileSync me file name dena ho ga or is
    // function me success ko try me or error ko catch se handel karna ho ga

    /*
    try{
      const data = fs.readFileSync("memo.txt");
      response.write(data);
      response.end();
    }catch(error){
        console.log(error)
        response.end()
    }
    */

    //------------------------ readFile use call back -------------------
/*
    fs.readFile("memo.txt", (error, success) => {
        if (error) {
            if (error.code == 'ENOENT') {
                response.write("No such file or directory");
                response.end()
            }
        }
        else {
            response.write(success);
            response.end()
        }

    })
    */

    //------------------------------- mkdirsync use try catch block creat folder

/*
    try{
        fs.mkdirSync("myFirstFolder");
        response.write("folder created successfully");
        response.end();

    }catch(error){
       if(error.code == "EEXIST"){
        response.write("folder already exist !");
        response.end();
       }

    }

*/

//------------------------------------Empty delete folder ----------
/*
try{
    fs.rmdirSync("myFirstFolder");
    response.write("folder delet successfully");
    response.end();
}catch(error){
    if(error.code == 'ENOENT'){
        response.write("No such file or directory");
        response.end();
    }
}
*/

//------------------------------------  folder  with file delete----------
// folder me ager koi file ho gi us waqat folder ko delete karney k leye
// {recursive : true} karna ho ga

/*
try{
    fs.rmdirSync("myfolder",{recursive : true});
    response.write("delete folder success")
        response.end();
}catch(error){
    if(error.code == 'ENOENT'){
        response.write("No such file or directory");
        response.end(); 
    }

}
*/

//-----------------------------------file ya folder ki pehchan ke leye-------
//       ye file hey ya folder , fs me se statSync("first.txt") call 
// kerna ho ga jo keh bataye ke is file ka status return karey ga data vareable me 
// resive ker rahey hen or phir isFile laga ke ye janey gey keh 
// file hey ya folder ager file ho gi true return karey ga or ager folder ho ga to 
// false return karey ga  


/*
try{
   const data = fs.statSync("first.txt");
   console.log(data.isFile());
   response.write("This Is a file");
   response.end()

}catch(error){
    if(error.code == 'ENOENT'){
        response.write("No such file or directory");
        response.end(); 
    }

}

*/

//------------------------------------ file kab banaya gaya us ki information batay ga
      // file jab creat huvi us ki date maloom karney ka tareka 
      // jo date miley gi us string me tabdeel karna 
/*
try{
   let data = fs.statSync("memo.txt");
   const date = new Date(data.birthtime.toString())
   response.write("File Birth Time is ..........." + date.toDateString()+"</br>");
   response.write(date.toLocaleDateString());
   response.end(); 
}catch(error){
    if(error.code == 'ENOENT'){
        response.write("No such file or directory");
        response.end(); 
    }
}

*/


//---------------------------- file ki size check karney k leye 


try{
    const data = fs.statSync("memo.txt")
  //  console.log("file size "+data.size+ " kb");
   // response.write("file size is show"+ data.size + " bit");
 //   response.write(" file size is show "+ data.size/1024/1024 + " mb");

 // show fix size 
 const size = data.size;
 response.write(" file size is show fixed number "+size.toFixed(2)+"MB");
    response.end();

}catch(error){
    if(error.code == 'ENOENT'){
        response.write("No such file or directory");
        response.end(); 
    }
}

});
server.listen(8080);