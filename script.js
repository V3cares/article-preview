let shareBtn = document.getElementById('btn');

shareBtn.addEventListener("click", function(){
    let popUp = document.getElementById("popup");

    if(popUp.style.display === "none" || popUp.style.display === ""){
        popUp.style.display = "block";
    }
    else{
        popUp.style.display = "none";
    }
});
