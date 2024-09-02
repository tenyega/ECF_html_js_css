window.onload = function() {

    let para = new URLSearchParams(window.location.search);
    let nomArticle = para.get("nomArticle");
    let prixArticle = para.get("prixArticle");
    let newNom = nomArticle.replace('_', ' ');
    console.log(newNom);
    mytitle = document.querySelector('span.mytitle');
    mytitle.innerHTML = newNom;


    // <img src= 'img/floral_green.jpg' alt='floral_green'/>
    let divImg = document.querySelector('.image');

    let html = "<img src='img/" + nomArticle + ".jpg' alt='" + nomArticle + "' />";
    divImg.innerHTML = html;


    let articlePrix = document.querySelector('p.prix');

    articlePrix.innerHTML = prixArticle + '€';


}