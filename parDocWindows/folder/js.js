let paragraf = document.querySelector('.pp'),
    btn = document.querySelector('button');
let width = paragraf.scrollWidth,
    height = paragraf.scrollHeight;

    console.log(width);
    console.log(height);

btn.addEventListener('click',function(){
    paragraf.scrollTop = 500;
})
    
scrollBy(0, 200); // По сколько скролить
scrollTo(0, 200); // Скролить куда
    
    

