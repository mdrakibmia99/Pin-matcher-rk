function getPin(){
    const pin=Math.round(Math.random()*10000);
    const pinString=pin+"";
    if(pinString.length==4){

        return pin;
    }else{
        
      return  getPin();
    }
}
function generatePin(){
    const pin = getPin();
    console.log(pin);
    document.getElementById("generate-pin").value=pin;
}
document.getElementById("generatepin-btn").addEventListener("click",function(){
    generatePin();
})

document.getElementById("key-pad").addEventListener("click",function(event){
    

    const selectInputId=document.getElementById("input-pin");
    const targetValue=event.target.innerText;
    if(isNaN(targetValue)){
        selectInputId.value="";
    }else{
        selectInputId.value += targetValue;
    }
    
   
    
    
})
function submitPin(){
    const generatePin=document.getElementById("generate-pin").value;
   
    const inputPin=document.getElementById("input-pin").value;
    
    const errorMessage=document.getElementById("notify-fail");

    const successMessage=document.getElementById("notify-success");
    if(generatePin==inputPin){
        errorMessage.style.display="none";
        successMessage.style.display="block";
    }else{
        errorMessage.style.display="block";
        successMessage.style.display="none";
    }
}