let store=document.getElementById("inputtext");

let display=(number)=>{
store.value+=number;
}
let result=()=>
{
try{
    store.value=eval(store.value);
}
catch(err){
    alert("Enter the valid input");
}
}

function clr(){
    store.value="";
}
function del(){
    store.value=store.value.slice(0,-1);
}