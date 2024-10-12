document.querySelector(".search-button").addEventListener("click", function () {
  let query = document.querySelector(".search-bar").value;
  alert("Has cercat: " + query);
});

let carro = JSON.parse(localStorage.getItem("carro")) || [];

function mostrarCarro() {
  let carroElement = document.getElementById("carro");
  let totalElement = document.getElementById("total");
  carroElement.innerHTML = "";
  let total = 0;

  carro.forEach((producte) => {
    let item = document.createElement("div");
    item.innerHTML = `
            <p>Quantitat: ${producte.quantitat}</p>
            <p>Preu: ${producte.preu.toFixed(2)}€</p>
            <p>Subtotal: ${(producte.quantitat * producte.preu).toFixed(2)}€</p>
            <button onclick="eliminarDelCarro(${producte.id})">Eliminar</button>
        `;
    carroElement.appendChild(item);
    total += producte.quantitat * producte.preu;
  });

  totalElement.textContent = `Total: ${total.toFixed(2)}€`;
}

function eliminarDelCarro(producteId) {
  carro = carro.filter((item) => item.id !== producteId);
  localStorage.setItem("carro", JSON.stringify(carro));
  mostrarCarro();
  actualitzarCarroUI();
}

function finalitzarCompra() {
  if (carro.length > 0) {
    alert("Compra finalitzada amb èxit!");
    carro = [];
    localStorage.setItem("carro", JSON.stringify(carro));
    mostrarCarro();
    actualitzarCarroUI();
  } else {
    alert(
      "El carro està buit. Afegeix productes abans de finalitzar la compra."
    );
  }
}

function actualitzarCarroUI() {
  let carroElement = document.getElementById("cart-count");
  carroElement.textContent = carro.reduce(
    (total, producte) => total + producte.quantitat,
    0
  );
}

mostrarCarro();
