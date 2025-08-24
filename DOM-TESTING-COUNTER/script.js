var counter = document.querySelector('#counter');
var increase = document.querySelector('.increase');
var decrease = document.querySelector('.decrease');
var reset = document.querySelector(".reset");
let main = document.getElementById('main');

let count = 0
increase.addEventListener('click',function(){
  count++;
  counter.innerHTML = count;
})
decrease.addEventListener('click',function(){
  count--;
  counter.innerHTML = count;
});
reset.addEventListener('click',function(){
  // count == 0 ;
  counter.innerHTML = count = 0;
});
counter.style.color = "green";
counter.style.fontSize = "50px";
increase.style.padding= "10px 10px 10px 10px"
decrease.style.padding= "10px 10px 10px 10px"
reset.style.padding= "10px 10px 10px 10px"
increase.style.margin= "10px 10px 10px";
decrease.style.margin= "10px 10px 10px";
reset.style.margin= "10px 10px 10px";
main.style.alignItems= "center";
main.style.textAlign= "center";
increase.style.backgroundColor = "transparent";
reset.style.backgroundColor = "transparent";
decrease.style.backgroundColor = "transparent";

increase.style.border = "2px solid green";
decrease.style.border = "2px solid red";
reset.style.border = "2px solid black";