// pin generating section start here *********
function generatePin() {
    let randomNum = Math.random();
    let myRandomNum = 1000 + randomNum * (9999 - 1000);
    let generatedPin = Math.round(myRandomNum);
    console.log(generatedPin);
    document.getElementById('generatedPinDisplay').value = generatedPin;
}
// -----------------------------------------------------------------------
// every number click event here
function notifyMsg(id, val) {
    return document.getElementById(id).style.display = val;
}

function numClick(num) {
    let numDisplay = document.getElementById('numDisplay').value;
    if (numDisplay < 1000) {
        notifyMsg('longDigit', 'none')
        document.getElementById('numDisplay').value = numDisplay + num;
    } else {
        notifyMsg('longDigit', 'block')
        notifyMsg('warning', 'none')
        matchAndMismatchHide();
    }
}
//------------------------------------------------------------------------
// check submit here
function warningAndLongDigitHide() {
    notifyMsg('warning', 'none');
    notifyMsg('longDigit', 'none');
}
function matchAndMismatchHide() {
    notifyMsg('mismatch', 'none')
    notifyMsg('match', 'none')
}

function submit() {
    const receivedPin = document.getElementById('generatedPinDisplay').value;
    let enteredPin = document.getElementById('numDisplay');
    if (enteredPin.value == '') {
        notifyMsg('warning', 'block')
        notifyMsg('longDigit', 'none')
        matchAndMismatchHide()
    } else if (receivedPin == enteredPin.value) {
        notifyMsg('match', 'block');
        notifyMsg('mismatch', 'none');
        warningAndLongDigitHide();
    } else {
        allClear();
        notifyMsg('mismatch', 'block');
        notifyMsg('match', 'none')
        warningAndLongDigitHide();
        let timeLeft = document.getElementById('timeLeft');
        let timeLeftNum = parseInt(timeLeft.innerText);
        if (timeLeftNum == 1) {
            document.getElementById('submit').disabled = true;
            timeLeft.innerText = 0;
        } else {
            timeLeft.innerText = timeLeftNum - 1;
        }
    }
}
//------------------------------------------------------------------------
// last digit remove function here 
function back() {
    var displayValue = document.getElementById('numDisplay').value;
    afterBackValue = displayValue.slice(0, displayValue.length - 1);
    document.getElementById('numDisplay').value = afterBackValue;
    notifyMsg('longDigit', 'none')
}
//------------------------------------------------------------------------
// all digit remove function here
function allClear() {
    document.getElementById('numDisplay').value = '';
}
//------------------------------------------------------------------------
