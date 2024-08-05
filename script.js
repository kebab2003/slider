
const showMoreInfoButton = document.querySelector('.slider__more-info-text');
const elementsTablet = document.querySelectorAll('.slider__item-hidden-tablet');
const elementsPc = document.querySelectorAll('.slider__item-hidden-pc');


showMoreInfoButton.addEventListener('click', function () {

    if (showMoreInfoButton.textContent === 'Показать все') {
        showMoreInfoButton.textContent = 'Скрыть';
          
      } else {
          showMoreInfoButton.textContent = 'Показать все';
          
   }
    for (let i = 0; i < elementsTablet.length; i++) {
       elementsTablet[i].classList.toggle('slider__item-hidden-tablet');


       
    }

});



showMoreInfoButton.addEventListener('click', function () {

    
          
   
    for (let i = 0; i < elementsPc.length; i++) {
       elementsPc[i].classList.toggle('slider__item-hidden-pc');


       
    }

});








// showMoreInfoButton.addEventListener('click', function () {
//     for (let i = 0; i < elements.length; i++) {
//        elements[i].classList.add('slider__item-hidden-tablet');
//     }
// });

// function moreInfo() {
//     const tablet = 'slider__item-hidden-tablet';
//     const elements = document.querySelectorAll('.slider__item-hidden-tablet');

//     for (let i = 0; i < elements.length; i++) {
//         elements[i].classList.remove(tablet);
       
//     }

    
//     if (showMoreInfoButton.textContent === 'Показать все') {
//         showMoreInfoButton.textContent = 'Скрыть';
        
//     } else {
//         showMoreInfoButton.textContent = 'Показать все';
        
//     }
// }

// showMoreInfoButton.addEventListener('click', moreInfo);








