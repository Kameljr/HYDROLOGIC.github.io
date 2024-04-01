
const slider = document.querySelector('.slider');
const button = document.querySelector('button');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
const indicatorParents = document.querySelector('.controls ul');
var sectionindex = 0;

function setIndex() {
    document.querySelector('.controls .selected').classList.remove('selected');
    slider.style.transform = 'translate(' + (sectionindex) * -20 + '%)';
}

document.querySelectorAll('.controls li').forEach(function (indicator, ind) {
    indicator.addEventListener('click', function () {
        sectionindex = ind;
        setIndex();
        indicator.classList.add('selected');
    });
});
rightArrow.addEventListener('click', function () {
    sectionindex = (sectionindex < 4) ? sectionindex + 1 : 4;
    indicatorParents.children[sectionindex].classList.add('selected');
    setIndex();
});

leftArrow.addEventListener('click', function () {
    sectionindex = (sectionindex > 0) ? sectionindex - 1 : 0;
    indicatorParents.children[sectionindex].classList.add('selected');
    setIndex();
});

function resultpage() {
    let sum = 0;
    let final = 0;
    let ele1 = 0;

    for (let k = 1; k < 2; k++) {
        for (let l = 1; l < 5; l++) {
            const checkbox = document.getElementById(`${k}o${l}`);
            if (checkbox && checkbox.checked) {
                ele1 = Number(checkbox.value);
            }
        }
    }

    for (let i = 2; i < 16; i++) {
        for (let j = 1; j < 5; j++) {
            const option = `${i}o${j}`;
            const checkbox = document.getElementById(option);
            if (checkbox && checkbox.checked) {
                let ele = Number(checkbox.value);
                sum += ele;
            }
        }
    }

    final = ele1 * sum;

    // Set the result value as a URL parameter
    const url = `result.html?result=${final}`;
    
    // Redirect to the new page
    window.location.href = url;
}



button.addEventListener('click',resultpage)
function resultpage(){
    let total = 0;
    let firstQuestionValue = 0;

    // Loop through each question
    for (let i = 1; i <= 15; i++) {
        const selectedRadio = document.querySelector('input[name="question' + i + '"]:checked');
        if (selectedRadio) {
            const value = parseInt(selectedRadio.value, 10);
            total += value;

            // For the first question
            if (i === 1) {
                firstQuestionValue = value;
            }
        }
    }

    // Multiply the value of the first question with the total of the other questions
    const result = firstQuestionValue * total;
     window.location.href = 'result.html?total=' + result;
    document.getElementById("totalValue").textContent = result;
    if (result>35000){
        document.getElementById("lastpara").innerHTML="The average water footprint of a person is around 35000 litres per month which is less than your water footprint.You need strict guidance on how to reduce water footprint level."
    }
    else{
        document.getElementById("lastpara").innerHTML="The average water footprint of a person is around 35000 litres per month which is greater than your water footprint.Congratulations that you have maintained your water footprint level at correct rate."
    }
}


