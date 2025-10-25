function preview(obj, previewId) { 

    let fileReader = new FileReader();
    
    fileReader.onload = (function () { 
        document.getElementById(previewId).src = fileReader.result; 
    }); 
    
    fileReader.readAsDataURL(obj.files[0]); 
}

function loadVideo(videoId) { 
    const iframeHtml = ` 
    <iframe 
    width="100%" 
    height="500" 
    src="https://www.youtube.com/embed/${videoId}"
    frameborder="0" 
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen> 
    </iframe>`; 
    document.getElementById('videoContainer').innerHTML = iframeHtml; 
}

function loadVideo2(videoId) { 
    const iframeHtml = ` 
    <iframe 
    width="100%" 
    height="500" 
    src="https://www.youtube.com/embed/${videoId}"
    frameborder="0" 
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen> 
    </iframe>`; 
    document.getElementById('videoContainer2').innerHTML = iframeHtml; 
}
