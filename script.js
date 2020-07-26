// pin generating section start here *********
function generatePin(){
    let randomNum = Math.random();
    let myRandomNum = 1000 + randomNum * (9999 - 1000);
    let generatedPin = Math.round(myRandomNum);
    console.log(generatedPin);
    document.getElementById('generatedPinDisplay').value = generatedPin;
}
// -----------------------------------------------------------------------
// every number click event here
function numClick(num){
    let numDisplay = document.getElementById('numDisplay').value;
    if(numDisplay < 1000){
        document.getElementById('longDigit').style.display = "none";
        document.getElementById('numDisplay').value = numDisplay + num;
    }else{
        document.getElementById('longDigit').style.display = "block";
        document.getElementById('warning').style.display = "none";
        document.getElementById('mismatch').style.display = "none";
        document.getElementById('match').style.display = "none";
    }
}
//------------------------------------------------------------------------
// check submit here
document.getElementById('submit').addEventListener('click', function(){
    const receivedPin = document.getElementById('generatedPinDisplay').value;
    const enteredPin = document.getElementById('numDisplay').value;
    if(enteredPin == ''){
        document.getElementById('warning').style.display = "block";
        document.getElementById('mismatch').style.display = "none";
        document.getElementById('match').style.display = "none";
        document.getElementById('longDigit').style.display = "none";
    }else if(receivedPin == enteredPin){
        document.getElementById('match').style.display = "block";
        document.getElementById('mismatch').style.display = "none";
        document.getElementById('warning').style.display = "none";
        document.getElementById('longDigit').style.display = "none";
    }else{
        document.getElementById('numDisplay').value = '';
        document.getElementById('mismatch').style.display = "block";
        document.getElementById('match').style.display = "none";
        document.getElementById('warning').style.display = "none";
        document.getElementById('longDigit').style.display = "none";
        let timeLeft = parseInt(document.getElementById('timeLeft').innerText);
        if(timeLeft <= 0){
            document.getElementById('submit').disabled = true;
        }else{
            document.getElementById('timeLeft').innerText = timeLeft - 1;
        }    
    }
})
//------------------------------------------------------------------------
// last digit remove function here 
function back(){
    var displayValue = document.getElementById('numDisplay').value;
    afterBackValue = displayValue.slice(0, displayValue.length - 1);
    document.getElementById('numDisplay').value = afterBackValue;
    document.getElementById('longDigit').style.display = "none";
}
//------------------------------------------------------------------------
// all digit remove function here
function allClear(){
    document.getElementById('numDisplay').value = '';
}
//------------------------------------------------------------------------
