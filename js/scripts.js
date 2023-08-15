window.onload = function(){ 
    //Автоматическая смена пункта меню
    const navigationHeight = document.querySelector('.content').offsetTop;
    const navigation = document.querySelectorAll('.navigation__item');
    const content = document.querySelectorAll('.content__item');
    const lastContentKey = content.length - 1;

    window.addEventListener('scroll', () => {
        let scrollMiddlePosition = window.scrollY + (window.innerHeight / 1.5);

        function addActiveClass(key){
            navigation.forEach((el) => {
                if(el.classList.contains('navigation__item--active')){
                    el.classList.remove('navigation__item--active');
                }
            });
            navigation[key].classList.add('navigation__item--active');
        }
        content.forEach((el, i) => { 
            if(window.scrollY == 0){
                addActiveClass(0);
            }
            else if(window.scrollY + window.innerHeight == document.body.scrollHeight){
                addActiveClass(lastContentKey);
            }
            else if(el.offsetTop - navigationHeight <= scrollMiddlePosition){
                addActiveClass(i);
            }
        });
    });
};

