
let imgBox = document.getElementById("imgBox")
let qrImage = document.getElementById("qrImage")
let qrText = document.getElementById("qrText")
let btn = document.getElementById("btn")
let btnAgain = document.getElementById("btnAgain")

// btnAgain.style.display = "none";

function generateQR(){
    if(qrText.value !== ""){
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("show-img");
        btn.style.display = "none";//hide the generate button
        btnAgain.style.display = "block";//show the generate again button


    }
    else{
        qrText.classList.add("error")
        setTimeout(function(){
            qrText.classList.remove("error")
        },1000);
    }

}

function generateAgain(){
    qrText.value = "";
    qrImage.src = "";
    imgBox.classList.remove("show-img");
    btn.style.display = "block";
    btnAgain.style.display = 'none';

    

}



btn.addEventListener("click",generateQR)
btnAgain.addEventListener("click", generateAgain);


qrText.addEventListener("keyup" , function(e){
    if(e.key ==='Enter'){
        if(btnAgain.style.display === "none"){
            generateQR();
        }else
        generateAgain();
    }
})
