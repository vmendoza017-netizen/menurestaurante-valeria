// Arreglo de productos ficticios
const productos = [
{
    id: 1,
    nombre: "Cámara Fotográfica",
    precio: "$299.99",
    descripcion: "Alta resolución, ideal para viajes.",
    imagen: "camara.jpeg"
},
{
    id: 2,
    nombre: "Audífonos Inalámbricos",
    precio: "$99.99",
    descripcion: "Sonido envolvente y cancelación de ruido.",
    imagen: "audifonos.webp"
},
{
    id: 3,
    nombre: "Smartwatch Deportivo",
    precio: "$149.99",
    descripcion: "Monitorea tu salud y actividad física.",
    imagen: "smartwatch.avif"
}
];

// Obtener contenedor principal
const galeria = document.getElementById('galeriaProductos');

// Crear las cards dinámicamente
productos.forEach(producto => {
const col = document.createElement('div');
col.className = 'col-md-4 mb-4';

col.innerHTML = `
    <div class="card h-100 producto" id="producto-${producto.id}">
    <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
    <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text fw-bold text-primary">${producto.precio}</p>
        <p class="card-text descripcion" id="descripcion-${producto.id}">${producto.descripcion}</p>
        <p class="text-success fw-bold" id="estado-${producto.id}"></p>

        <div class="d-flex justify-content-between mt-3">
        <button class="btn btn-primary btn-seleccionar" data-id="${producto.id}">Seleccionar</button>
        <button class="btn btn-danger btn-retirar" data-id="${producto.id}">Retirar</button>
        </div>
    </div>
    </div>
`;

galeria.appendChild(col);
});

// Funcionalidad para botones
galeria.addEventListener('click', (e) => {
const isSeleccionar = e.target.classList.contains('btn-seleccionar');
const isRetirar = e.target.classList.contains('btn-retirar');

if (isSeleccionar || isRetirar) {
    const id = e.target.getAttribute('data-id');
    const card = document.getElementById(`producto-${id}`);
    const descripcion = document.getElementById(`descripcion-${id}`);
    const estado = document.getElementById(`estado-${id}`);

    if (isSeleccionar) {
    card.classList.add('border', 'border-success', 'shadow');
    estado.textContent = 'Producto seleccionado ✅';

    }

    if (isRetirar) {
    card.classList.remove('border', 'border-success', 'shadow');
    estado.textContent = '';
    }
}
});