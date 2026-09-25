/**
 * Módulo para hacer peticiones (Fetch) a una API y renderizar los datos.
 * Utilizaremos la API pública de FakeStore (https://fakestoreapi.com/products).
 */
export const inicializarFetch = () => {
    // 1. Obtenemos las referencias a los elementos del DOM
    // Buscamos el botón que detonará la petición
    const fetchBtn = document.getElementById('fetchBtn');
    // Buscamos el contenedor donde inyectaremos las tarjetas (cards)
    const contenedorProductos = document.getElementById('productosContainer');

    // 2. Escuchamos el evento 'click' en el botón
    if (fetchBtn) {
        fetchBtn.addEventListener('click', async () => {
            try {
                // Cambiamos el texto del botón mientras carga
                fetchBtn.textContent = 'Cargando...';
                fetchBtn.disabled = true;

                // 3. Realizamos la petición HTTP mediante Fetch
                // Hacemos una petición GET a la FakeStore API para obtener productos
                const respuesta = await fetch('https://fakestoreapi.com/products?limit=6');
                
                // Convertimos la respuesta cruda a formato JSON (un arreglo de objetos)
                const productos = await respuesta.json();

                // 4. Limpiamos el contenedor por si ya tenía contenido previo
                contenedorProductos.innerHTML = '';

                // 5. Recorremos los datos obtenidos y creamos las tarjetas dinámicamente
                productos.forEach(producto => {
                    // Creamos una estructura de Bootstrap Card para cada producto
                    // Usamos col-md-4 para que haya 3 tarjetas por fila en pantallas medianas
                    const cardHTML = `
                        <div class="col-md-4 mb-4">
                            <div class="card h-100 shadow-sm">
                                <img src="${producto.image}" class="card-img-top p-3" alt="${producto.title}" style="height: 250px; object-fit: contain;">
                                <div class="card-body d-flex flex-column">
                                    <h5 class="card-title">${producto.title}</h5>
                                    <p class="card-text text-success fw-bold">$${producto.price}</p>
                                    <button class="btn btn-outline-primary mt-auto">Comprar</button>
                                </div>
                            </div>
                        </div>
                    `;
                    // Inyectamos la tarjeta en el contenedor
                    contenedorProductos.innerHTML += cardHTML;
                });

            } catch (error) {
                // Manejo de errores en caso de que la petición falle
                console.error('Hubo un problema al obtener los datos:', error);
                contenedorProductos.innerHTML = '<p class="text-danger">Error al cargar los productos. Intenta de nuevo más tarde.</p>';
            } finally {
                // Restauramos el botón a su estado original, falle o tenga éxito la petición
                fetchBtn.textContent = 'Obtener Productos';
                fetchBtn.disabled = false;
            }
        });
    }
};

/**
 * Módulo para hacer peticiones a DummyJSON (https://dummyjson.com/users)
 * y renderizar los usuarios obtenidos.
 */
export const inicializarFetchUsuarios = () => {
    const fetchUsersBtn = document.getElementById('fetchUsersBtn');
    const contenedorUsuarios = document.getElementById('usuariosContainer');

    if (fetchUsersBtn) {
        fetchUsersBtn.addEventListener('click', async () => {
            try {
                fetchUsersBtn.textContent = 'Cargando Usuarios...';
                fetchUsersBtn.disabled = true;

                // Hacemos una petición GET a DummyJSON limitando a 6 usuarios
                const respuesta = await fetch('https://dummyjson.com/users?limit=6');
                
                // La API de DummyJSON devuelve un objeto con un arreglo llamado 'users'
                const datos = await respuesta.json();
                const usuarios = datos.users; 

                contenedorUsuarios.innerHTML = '';

                // Recorremos los usuarios y creamos las tarjetas
                usuarios.forEach(usuario => {
                    const cardHTML = `
                        <div class="col-md-4 mb-4">
                            <div class="card h-100 shadow-sm border-info">
                                <img src="${usuario.image}" class="card-img-top p-3 rounded-circle mx-auto d-block" alt="${usuario.firstName}" style="height: 150px; width: 150px; object-fit: cover; background-color: #f8f9fa;">
                                <div class="card-body d-flex flex-column text-center">
                                    <h5 class="card-title text-info">${usuario.firstName} ${usuario.lastName}</h5>
                                    <p class="card-text text-muted">@${usuario.username}</p>
                                    <p class="card-text fw-bold">${usuario.email}</p>
                                    <button class="btn btn-info text-white mt-auto">Ver Perfil</button>
                                </div>
                            </div>
                        </div>
                    `;
                    contenedorUsuarios.innerHTML += cardHTML;
                });

            } catch (error) {
                console.error('Hubo un problema al obtener los usuarios:', error);
                contenedorUsuarios.innerHTML = '<p class="text-danger">Error al cargar los usuarios.</p>';
            } finally {
                fetchUsersBtn.textContent = 'Obtener Usuarios';
                fetchUsersBtn.disabled = false;
            }
        });
    }
};
