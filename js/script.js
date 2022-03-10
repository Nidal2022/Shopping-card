//+/- buttons
var btnplus = document.getElementsByClassName("plus");

console.log(btnplus);



for (let i = 0; i < btnplus.length; i++) {

    btnplus[i].addEventListener("click", increment);

}

function increment(event) {
    var btnplustag = event.target;
    var divtag = btnplustag.parentElement;
    var spantag = divtag.querySelector("span");
    var spancontenu = spantag.innerHTML;
    spancontenu++;
    spantag.innerHTML = spancontenu;
}

var btnmoins = document.getElementsByClassName("moins");

for (let i = 0; i < btnmoins.length; i++) {

    btnmoins[i].addEventListener("click", decrement);
}

function decrement(e) {

    if (e.target.parentElement.querySelector("span").innerHTML > 0) {

        e.target.parentElement.querySelector("span").innerHTML--;

    }
}
//like buttons
var btnvar1 = document.getElementById('btnh1');

function like1() {
    if (btnvar1.style.color == "red") {
        btnvar1.style.color = "grey"
    } else {
        btnvar1.style.color = "red"
    }
}
var btnvar2 = document.getElementById('btnh2');

function like2() {
    if (btnvar2.style.color == "red") {
        btnvar2.style.color = "grey"
    } else {
        btnvar2.style.color = "red"
    }
}
var btnvar3 = document.getElementById('btnh3');

function like3() {
    if (btnvar3.style.color == "red") {
        btnvar3.style.color = "grey"
    } else {
        btnvar3.style.color = "red"
    }
}
var btnvar4 = document.getElementById('btnh4');

function like4() {
    if (btnvar4.style.color == "red") {
        btnvar4.style.color = "grey"
    } else {
        btnvar4.style.color = "red"
    }
}
//affichage du panier
var bag = document.getElementById('panier')
console.log(bag)

function affiche() {
    if (bag.style.display == "none") {
        bag.style.display = "block"
    } else
        bag.style.display = "none"
}
var add = document.querySelectorAll('#add');
console.log(add)
for (let i = 0; i < add.length; i++) {
    add[i].addEventListener('click', add_to_card);

}
// Ajout des produits souhaitée au panier

function add_to_card(e) {
    var clicked = e.target;
    var prix = parseInt(clicked.parentElement.parentElement.querySelector('.prix').innerHTML);
    console.log(prix);
    var qte = clicked.parentElement.parentElement.parentElement.querySelector('span').innerText;
    console.log(qte);
    var img = clicked.parentElement.parentElement.parentElement.previousElementSibling.src;
    console.log(img);
    var tr = document.createElement("tr");
    if (qte == 0) {
        alert('veuillez choisir un produit')

    } else {

        var panier = document.getElementById('panier').querySelector('table')
        console.log(panier);
        panier.appendChild(tr);
        var row = panier.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        cell1.innerHTML = `<img  src=${img} alt="" width="200" height="200">`;
        cell2.innerHTML = prix * qte;
        cell3.innerHTML = qte;
        cell4.innerHTML = '<button type="" class="delete">remove</button>';


        var del_btn = document.querySelectorAll('.delete');

        for (let i = 0; i < del_btn.length; i++) {
            del_btn[i].addEventListener("click", supp);
        }

        function supp(e) {
            var del = e.target.parentElement.parentElement;

            del.remove();

        }

    }

}