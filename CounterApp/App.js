let count =0;
let countEl= document.querySelector("#count-el");
 
function increment(){
    count++;
    countEl.innerText =count;
}

function decrement(){
    count--;
    countEl.innerText= count;
}