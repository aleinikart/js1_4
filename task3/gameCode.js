var event, ok, variants, totalsumm = 0;

outer: for (var a = 0; a < questions.length; a++) {
    variants = '';
    for (var i = 0; i < 4; i++) {
        variants += questions[a].answers[i];
    }

    do {
        ok = false;
        event = +prompt(questions[a].text + variants + '-1 - Выход из игры');
        if (event != -1) {
            if (isNaN(event) || !isFinite(event)) {

                alert('Вы ввели недопустимый символ');
                break outer;
            } else if (event < 1 || event > 4) {

                alert('Ваше число выходит из допустимого диапозона');
                break outer;
            } else {
                if (event - 1 != questions[a].correct) {
                    
                    break outer;

                }
                totalsumm = questions[a].summ;
                ok = event;
                console.log(event, totalsumm);
            }

            
            
        }
break;


    } while (!ok);
}
alert('Игра закончена. Вы выиграли ' + totalsumm + ' р.');