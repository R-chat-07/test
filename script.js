document.querySelector("#button").addEventListener("click", function() {
    const awnser = Math.random();
    if(awnser < 0.5) {
        alert("ハズレ");
        console.log("ハズレ");
    }
})
