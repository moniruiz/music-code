let selecRat = 0;

function Rating(rating) {
    selecRat = (rating);
    document.querySelectorAll('.numero').forEach(element =>{
        element.classList.remove('checked');
    });
    document.querySelector('.rating').children[rating -1].classList.add('checked');
}

function rat(){
    if (selecRat >0){
        document.getElementById('popup').style.display= 'block';
        document.getElementById('sele').style.display= 'none';

    } else{
        alert('Por favor, selecciona una clasificacion.');
    }
}


function closePopup(){
    document.getElementById('popup').style.display = 'none';
    document.getElementById('sele').style.display= 'block';

}
