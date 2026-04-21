var swiper = new Swiper(".mySwiper", {
    slidesPerView: 'auto',      // Автоматическая ширина
    spaceBetween: 15,           // Расстояние между слайдами
    loop: false,                // Отключение зацикливания (чтобы кнопки скрывались)
    
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        hideOnClick: false, // Не скрывает кнопки при клике
    },
    
    // Скрываем кнопки в начале/конце
    watchOverflow: true,
    
    speed: 400,
    grabCursor: true,
    
    // События для отладки
    on: {
        init: function() {
            console.log('Swiper инициализирован');
        }
    }
});