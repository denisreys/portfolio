window.onload = function(){ 
    //Автоматическая смена пункта меню
    const navigationHeight = document.querySelector('.content').offsetTop;
    const navigation = document.querySelectorAll('.navigation__item');
    const content = document.querySelectorAll('.content__item');

    window.addEventListener('scroll', () => {
        let scrollMiddlePosition = window.scrollY + (window.innerHeight / 1.2);
        
        content.forEach((el, i) => { 
            if(el.offsetTop - navigationHeight <= scrollMiddlePosition){
                navigation.forEach((el) => {
                    if(el.classList.contains('navigation__item--active')){
                        el.classList.remove('navigation__item--active');
                    }
                });

                navigation[i].classList.add('navigation__item--active');
            }
        });
    });
};

