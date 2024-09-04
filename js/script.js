let headerTop=document.querySelector('.header-top')
document.addEventListener('scroll',function (){
    let scrollTopp=document.documentElement.scrollTop
    if (scrollTopp>0){
        headerTop.classList.add('header-top--scrolled')
    }else {
        headerTop.classList.remove('header-top--scrolled')
    }
})