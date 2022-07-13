console.log('test');

function menuClick(){
    document.querySelector('.overlay').classList.add('active');
    document.querySelector('.mobile-menu-wrap').classList.add('active');
    console.log('click');
}

function menuClose(){
    document.querySelector('.overlay').classList.remove('active');
    document.querySelector('.mobile-menu-wrap').classList.remove('active');
}