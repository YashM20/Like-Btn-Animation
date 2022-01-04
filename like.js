let mybtn = document.getElementById("mybtn");

function fillheart(){
    if(mybtn.checked == 1){
        document.getElementById("unfilled-heart").setAttribute("class","fas fa-heart");
    }
    else{
        document.getElementById("unfilled-heart").setAttribute("class","far fa-heart");
    }
}
