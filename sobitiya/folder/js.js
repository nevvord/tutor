let btn = document.querySelectorAll('button'),
    wrap = document.querySelector('.wrapper'),
    link = document.querySelector('a');


console.log(btn);

/*
btn[0].onclick = function () {
    alert("Your press fearst button");
};
*/
/*
btn[0].addEventListener('click', function(event){
    let varTar = event.target;

    varTar.style.display = 'none';

    console.log('произошло событие: ' + event.type + 'на элементе ' + event.target);
    
});

wrap.addEventListener('click',function(events){
    console.log('произошло событие: ' + event.type + 'на элементе ' + event.target);
});

link.addEventListener('click',function(event){
    event.preventDefault();
    console.log('произошло событие: ' + event.type + 'на элементе ' + 
     event.target);
});


btn.forEach(function(item){
    item.addEventListener('mouseleave', function(){
        console.log("мышь вне блока");
    });
});

/*
btn[0].addEventListener('mouseenter', function(){
    alert("Your enteret in fearst button");
});
*/

