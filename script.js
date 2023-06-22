window.addEventListener('scroll',()=>{
    let rotationSpeed =(window.pageYOffset /10);
    let circle=document.querySelector('.circle');
    circle.style.transform='translate(-50%,-50%) rotate('+rotationSpeed+'deg)';
});