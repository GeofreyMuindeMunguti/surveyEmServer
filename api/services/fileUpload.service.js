const fs = require('fs');




async function uploadCompanyLogo(req, res) {

  return new Promise((resolve, reject)=>{
  if (Object.keys(req.files).length == 0) {
    return res.status(400).send('No files were uploaded.');
  }
  let fileUploaded = req.files.fileUploaded;
  let nameTheFile = Date.now()+fileUploaded.name;
  let fullDirectory = __dirname+'/../../public/images/companyProfileImages/'+nameTheFile;

  fileUploaded.mv(fullDirectory, function(err) {
    if(!err){
      resolve(nameTheFile)
    }
    if(err){
       console.log(err)
    }
  });
  });
}



async function removeCompanyLogo(req, res) {

  return new Promise((resolve, reject)=>{
    let fileName = req;
    let fileDirectory = __dirname+'/../../public/images/companyProfileImages/'+fileName;
      fs.unlink(fileDirectory,function(err){
           if(err) return console.log(err);
           resolve('File deleted successfully')
      });
  });
}




module.exports = { uploadCompanyLogo, removeCompanyLogo};
