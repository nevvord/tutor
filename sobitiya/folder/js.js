let btn = document.getElementsByTagName('button');

console.log(btn);

/*
btn[0].onclick = function () {
    alert("Your press fearst button");
};
*/

btn[0].addEventListener('click', function(event){
    let varTar = event.target;

    varTar.style.display = 'none';

    console.log('произошло событие: ' + event.type + 'на элементе ' + 
     event.target);
    
});

/*
btn[0].addEventListener('mouseenter', function(){
    alert("Your enteret in fearst button");
});
*/

