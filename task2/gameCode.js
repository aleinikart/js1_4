var event, ok, variants;

showStep(0);
alert('Спасибо за игру');

callStep();
//------------------------------------------

function showStep(stepNumber) {
    variants = '';
    for (var i = 0; i < works[stepNumber].answers.length; i++) {
        variants += works[stepNumber].answers[i].text;
    }
    do {
        ok = false;
        event = +prompt(works[stepNumber].step + variants + '-1 - Выход из игры');
        if (event != -1) {

            if (isNaN(event) || !isFinite(event)) {
                return false;
                alert('Вы ввели недопустимый символ');   
            } else if (event < 1 || event > works[stepNumber].answers.length) {
                return false;
                alert('Ваше число выходит из допустимого диапозона');
            }
            
            ok = showStep(works[stepNumber].answers[event - 1].nextStep);
        }
        
        break;
    }
    while (!ok);
    
}


//функция, отвечающая за вызов нужного шага
function callStep() {
    var yourStep = +prompt('Выберите ход:');
    if (yourStep > 0 && yourStep <= works.length && yourStep != NaN && yourStep != Infinity) {
        showStep(yourStep);
    } else {
        alert('Значение неверно!');
        alert('Спасибо за игру');
    }
}
