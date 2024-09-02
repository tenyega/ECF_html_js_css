let nomText;
let prixText;
let desText;


let etiquette;
let inputTags;

window.onload = function(e) {
    nomText = document.querySelector('#nomText');
    prixText = document.querySelector('#prixText');
    desText = document.querySelector('#desText');
    inputTags = document.querySelectorAll('.ihm_btn input');
    etiquette = document.querySelector('#etiquette');



    addEvent();

}




function addEvent() {
    let txtMsg = '';

    nomText.addEventListener('keyup', function() {
        if (parseInt(nomText.value.length) < 2 || parseInt(nomText.value.length) > 50) {
            txtMsg = "Le nom d'article doit etre entre 2 et 50 caractére";
            etiquette.style.display = "block";
            etiquette.innerHTML = txtMsg;

        }

        checkMsg(txtMsg);

    });
    prixText.addEventListener('keyup', function() {
        if (parseInt(prixText.value.length) > 100000) {
            if (Number.isInteger(prixText.value)) {

                txtMsg = "Le prix d'article doit etre moins de 1 000 000€";
            } else {
                txtMsg = 'Veuillez entrer un digit correct';
            }
        }
        etiquette.style.display = "block";
        etiquette.innerHTML = txtMsg;


        checkMsg(txtMsg);

    });

    desText.addEventListener('keyup', function() {
        if (parseInt(desText.value.length) < 5 || parseInt(desText.value.length) > 500) {
            txtMsg = "Le description d'artile doit etre entre 5 a 500 caractere";
            etiquette.style.display = "block";
            etiquette.innerHTML = txtMsg;

        }
        checkMsg(txtMsg);

    });

}

function checkMsg(value) {

    if (value == '') {
        etiquette.style.display = 'none';

    }
}
window.onkeyup = function(e) {
    addEvent();
}