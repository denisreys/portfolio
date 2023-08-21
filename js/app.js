window.onload = function(){ 
    //Автоматическая смена пункта меню
    const navigation = document.querySelectorAll('.navigation__item');
    const content = document.querySelectorAll('.content__item');
    const classActive = 'navigation__item--active';
    let activeItem;

    window.addEventListener('scroll', () => {
        scrollYBottom = window.scrollY + window.innerHeight;
        
        content.forEach((el, i) => { 
            el.offsetBottom = el.offsetTop + el.offsetHeight;
            
            if(scrollYBottom >= document.body.scrollHeight){
                const lastContentKey = content.length - 1;
                addActiveClass(lastContentKey);
            }
            else if(el.offsetTop <= window.scrollY && el.offsetBottom >= window.scrollY){
                addActiveClass(i);
            }
        });
    });
    function addActiveClass(key){
        if(activeItem != key){
            navigation.forEach((el) => {
                if(el.classList.contains(classActive)){
                    el.classList.remove(classActive);
                }
            });
            navigation[key].classList.add(classActive);
            activeItem = key;
        }
    }
};