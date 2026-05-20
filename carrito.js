// Contenedor de carrito
const cartList = document.getElementById("cart-list");
const addButtons = document.querySelectorAll(".add-btn");
const removeBtn = document.getElementById("remove-btn");

// Función para agregar producto
function addProduct(name) {
  const li = document.createElement("li");
  li.textContent = name + " agregado al carrito";
  li.classList.add("list-group-item", "list-group-item-success"); // verde
  cartList.appendChild(li);
}

// Función para eliminar el último producto
function removeProduct() {
  if (cartList.lastChild) {
    cartList.lastChild.classList.remove("list-group-item-success");
    cartList.lastChild.classList.add("list-group-item-danger"); // rojo
    cartList.lastChild.textContent = "Producto eliminado";
    setTimeout(() => {
      cartList.removeChild(cartList.lastChild);
    }, 1000);
  }
}

// Eventos de agregar
addButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const productName = btn.parentElement.querySelector(".card-title").textContent;
    addProduct(productName);
  });
});

// Evento de eliminar
removeBtn.addEventListener("click", removeProduct);
