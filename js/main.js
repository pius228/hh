const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    spaceBetween:50,
    slidesPerView: 3,
    loop: true,
    stopOnLastSlide:true,
    autoplay:{
        delay:5000
    }
  });
const square = document.getElementById('an-initial-fee');
const light = document.getElementById('credit-term');

const squareRange = document.getElementById('an-initial-fee-range');
const lightRange = document.getElementById('credit-term-range');

const total = document.getElementById('price__totalid');

const inputsRange = document.querySelectorAll('.input-range');

const assignValue = () =>{
    square.value = squareRange.value;
    light.value = lightRange.value;
}
for(let input of inputsRange){
    input.addEventListener('input', () => {
        assignValue();
        calculation(square.value, light.value);
    })
}
const calculation = (square = 10, light = 10) =>{
    const amount = (square + light)*100;
    total.innerHTML = (amount);
}

calculation();
