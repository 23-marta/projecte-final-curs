document.querySelector(".search-button").addEventListener("click", function () {
  let query = document.querySelector(".search-bar").value;
  alert("Has cercat: " + query);
});

document.addEventListener("DOMContentLoaded", function () {
  mostrarProductes();
});

let carro = [];
const productes = [
  {
    id: 1,
    nom: "Esborrany forma pata de gat",
    foto: "https://www.huellascallejeras.com/wp-content/uploads/2022/05/Borrador-goma-de-borrar-pata-gato-compra-solidaria-1.jpg",
    descripcio:
      "Goma d'esborrar portàtil Kawaii amb disseny de Pota de Gat, esborranys bonics per a nens, subministraments d'oficina escolar,regal, papereria, premis. Cuatre colors disponibles.",
    preu: "3,99",
  },
];

function mostrarProductes() {
  let productList = document.getElementById("product-list");
  productes.forEach((producte) => {
    let item = document.createElement("div");
    item.innerHTML = `
            <h2>${producte.nom}</h2>
            <p>${producte.descripcio}</p>
            <p>Preu: ${producte.preu}€</p>
        `;
    productList.appendChild(item);
  });
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
  actualitzarCarroUI();
}
function actualitzarCarroUI() {
  let carroElement = document.getElementById("cart-count");
  carroElement.textContent = carro.reduce(
    (total, producte) => total + producte.quantitat,
    0
  );
}
