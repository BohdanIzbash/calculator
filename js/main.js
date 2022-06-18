
//Элементы форм
const squareInput = document.querySelector('#square-input');
const squareRange = document.querySelector('#square-range');
const totalPriseElement = document.querySelector('#total-price');
const inputs = document.querySelectorAll('input');

//радиокнопки
const radioType = document.querySelectorAll('input[name="type"]');
const radioBuilding = document.querySelectorAll('input[name="building"]');
const radioRooms = document.querySelectorAll('input[name="rooms"]');

//чекбоксы
const ceiling = document.querySelector('input[name = "ceiling"]');
const walls = document.querySelector('input[name = "walls"]');
const floor = document.querySelector('input[name = "floor"]');


const basePrice = 6000;

//связка ползунка с текстовым полем
//слушаем событие input, 
squareRange.addEventListener('input', function(){
    squareInput.value = squareRange.value;
} );

//связка текстового поля с ползунком
squareInput.addEventListener('input', function(){
    squareRange.value=squareInput.value;
});


function calccolate(){
    //базовую цену умножаем на получиное занчение input
    let totalPrice = basePrice * parseInt(squareInput.value);
   
   
    //перебираем радио-кнопки и умножаем на их value
    for (const radio of radioType){
        if(radio.checked===true){//проверяем какая кнопка выбрана
            totalPrice = totalPrice * parseFloat(radio.value);
        }
    }


    for (const radio of radioBuilding){
        if(radio.checked===true){//проверяем какая кнопка выбрана
            totalPrice = totalPrice * parseFloat(radio.value);
        }
    }


    for (const radio of radioRooms){
        if(radio.checked===true){//проверяем какая кнопка выбрана
            totalPrice = totalPrice * parseFloat(radio.value);
        }
    }

    //стоимость натяжных потолков (квадратные метры умножаем на 
    //value(стоимость) потолков)
    if(ceiling.checked===true){
        totalPrice = totalPrice + parseInt(squareInput.value) * parseFloat(ceiling.value);
    }
    //умножаем общую стоимость на value чекбоксов
    if(walls.checked===true){
        totalPrice = totalPrice * parseFloat(walls.value);
    }
    if(floor.checked===true){
        totalPrice = totalPrice * parseFloat(floor.value);
    }

    
    //форматируем для лучшего вида (добавляем пробел)
    const formmatter = new Intl.NumberFormat('ru');
    totalPriseElement.innerText = formmatter.format(totalPrice);
}

calccolate();

//отслеживаем изминение input - ов
for(const input of inputs){
    input.addEventListener('input', function(){
        calccolate();
    });
}


