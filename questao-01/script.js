// ELEMENTS
const inputValueA = document.getElementById('inputValueA');
const inputValueB = document.getElementById('inputValueB');
const buttonSubmitValue = document.getElementById('submitValue');
const displayResultList = document.getElementById('displayResult');

// LISTENERS
buttonSubmitValue.addEventListener('click', factorPicker);

// FUNCTIONS
function factorPicker(){
    if(inputValueA.value == "" || inputValueB.value == ""){
        console.log('determine valores para ambos os campos')
        displayResultList.innerHTML = `<li>determine valores para ambos os campos</li>`
    }else{
        let factor = timesTable(inputValueA.value);
        factor(inputValueB.value);
        console.log(factor(inputValueB.value));
        displayResultList.innerHTML = `<li>${factor(inputValueB.value)}</li>`
    }
    
};

function timesTable(mainValue){
    
    console.log(mainValue);
    
    return function(value){
        return value * mainValue;
    }
};