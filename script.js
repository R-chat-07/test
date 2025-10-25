function preview(obj, previewId) { 

    let fileReader = new FileReader();
    
    fileReader.onload = (function () { 
        document.getElementById(previewId).src = fileReader.result; 
    }); 
    
    fileReader.readAsDataURL(obj.files[0]); 
}
