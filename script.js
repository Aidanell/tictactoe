
//const firstBox = document.getElementById("item1")
var isBlacksTurn = true

function changeBlack(div){
    if(isBlacksTurn){
        div.style.backgroundColor = "black";
    }else{
        div.style.backgroundColor = "white";
    }
    isBlacksTurn = !isBlacksTurn
}

//firstBox.addEventListener("click",  function(){changeBlack(firstBox)})

const boxes = document.querySelectorAll(".grid_item")
for(let i=0; i<boxes.length; i++){
    boxes[i].addEventListener("click", function(){changeBlack(boxes[i])})
}
console.log(boxes)