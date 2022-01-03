// ELEMENTS
const inputValueA = document.getElementById('inputValueA');
const inputValueB = document.getElementById('inputValueB');
const buttonSubmitValue = document.getElementById('submitValue');
const displayResultList = document.getElementById('displayResult');

// LISTENERS
buttonSubmitValue.addEventListener('click', factorPicker);

// FUNCTIONS
function factorPicker(){
    let factor = timesTable(inputValueA.value);
    factor(inputValueB.value);
    console.log(factor(inputValueB.value));
};

function timesTable(mainValue){
    
    console.log(mainValue);
    
    return function(value){
        return value * mainValue;
    }
};