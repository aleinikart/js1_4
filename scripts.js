/*п. 1*/
var numberIn = prompt('Введите трехзначное число');
numOrders(numberIn);

function numOrders(myNum) {

    var orders = {},
        numArr = myNum.toString().split('');
    if (myNum < 1000 && myNum >= 0) {
        orders.hundreeds = numArr[0];
        orders.decades = numArr[1];
        orders.units = numArr[2];
        console.log('Единицы: ' + orders.units + '\nДесятки: ' + orders.decades + '\nСотни: ' + orders.hundreeds);
    } else {
        console.log('Неверное значение!');
    }
    console.log(orders);
    
}
