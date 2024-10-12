var currentImageIndex = 0;
var images = document.getElementsByClassName("gallery-img");

function changeImage(direction) {
  images[currentImageIndex].setAttribute("hidden",true);
  currentImageIndex += direction;

  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }

  images[currentImageIndex].removeAttribute("hidden");
}
document.querySelector(".search-button").addEventListener("click", function () {
  let query = document.querySelector(".search-bar").value;
  alert("Has cercat: " + query);
});

document.addEventListener("DOMContentLoaded", function () {
  mostrarDetallsProducte(1);
});

let carro = JSON.parse(localStorage.getItem("carro")) || [];
const productes = [{ id: 1, preu: 3.99 }];

function mostrarDetallsProducte(producteId) {
  let producte = productes.find((p) => p.id === producteId);
  let productDetails = document.getElementById("product-details");
  if (producte) {
    productDetails.innerHTML = `

            <p>Preu: ${producte.preu}€</p>
            <button onclick="afegirAlCarro(${producte.id})">Afegir al Carro</button>
        `;
  } else {
    productDetails.innerHTML = `<p>Producte no trobat</p>`;
  }
}

function afegirAlCarro(producteId) {
  let producte = productes.find((p) => p.id === producteId);
  let existent = carro.find((item) => item.id === producte.id);

  if (existent) {
    existent.quantitat += 1;
  } else {
    producte.quantitat = 1;
    carro.push(producte);
  }

  localStorage.setItem("carro", JSON.stringify(carro));
  actualitzarCarroUI();
}

function actualitzarCarroUI() {
  let carroElement = document.getElementById("cart-count");
  carroElement.textContent = carro.reduce(
    (total, producte) => total + producte.quantitat,
    0
  );
}

actualitzarCarroUI();
