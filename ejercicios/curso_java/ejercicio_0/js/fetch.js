/**
 * Este módulo contiene la lógica para consumir NUESTRO PROPIO backend en Java.
 * En lugar de usar URLs de internet, usamos http://localhost:8081.
 */

export const inicializarFetchJava = () => {
    // -----------------------------------------------------------------
    // 1. Lógica para Productos
    // -----------------------------------------------------------------
    const btnProductos = document.getElementById('btnProductos');
    const contenedorProductos = document.getElementById('contenedorProductos');

    if (btnProductos) {
        btnProductos.addEventListener('click', async () => {
            try {
                btnProductos.textContent = 'Cargando desde Java...';
                
                // NOTA EL CAMBIO DE URL: Ya no es FakeStore, es tu propia computadora.
                const respuesta = await fetch('http://localhost:8081/api/productos');
                const productos = await respuesta.json(); // Array de productos

                contenedorProductos.innerHTML = '';
                productos.forEach(prod => {
                    contenedorProductos.innerHTML += `
                        <div class="col-md-4 mb-3">
                            <div class="card h-100 shadow-sm border-success">
                                <div class="card-body text-center">
                                    <h5 class="card-title">${prod.title}</h5>
                                    <p class="text-success fw-bold">$${prod.price}</p>
                                </div>
                            </div>
                        </div>
                    `;
                });
            } catch (error) {
                console.error("Error conectando a Java:", error);
                contenedorProductos.innerHTML = `<p class="text-danger text-center">Asegúrate de que Backend.java esté corriendo en la terminal.</p>`;
            } finally {
                btnProductos.textContent = 'Obtener Productos de localhost:8081';
            }
        });
    }

    // -----------------------------------------------------------------
    // 2. Lógica para Usuarios
    // -----------------------------------------------------------------
    const btnUsuarios = document.getElementById('btnUsuarios');
    const contenedorUsuarios = document.getElementById('contenedorUsuarios');

    if (btnUsuarios) {
        btnUsuarios.addEventListener('click', async () => {
            try {
                btnUsuarios.textContent = 'Cargando desde Java...';
                
                // URL que definimos en Backend.java para los usuarios
                const respuesta = await fetch('http://localhost:8081/api/usuarios');
                const datos = await respuesta.json(); 
                const usuarios = datos.users; // Java devuelve { users: [...] }

                contenedorUsuarios.innerHTML = '';
                usuarios.forEach(user => {
                    contenedorUsuarios.innerHTML += `
                        <div class="col-md-6 mb-3">
                            <div class="card h-100 shadow-sm border-info">
                                <div class="card-body text-center">
                                    <h5 class="text-info">${user.firstName} ${user.lastName}</h5>
                                    <p class="text-muted">@${user.username} | ${user.email}</p>
                                </div>
                            </div>
                        </div>
                    `;
                });
            } catch (error) {
                console.error("Error conectando a Java:", error);
                contenedorUsuarios.innerHTML = `<p class="text-danger text-center">Asegúrate de que Backend.java esté corriendo en la terminal.</p>`;
            } finally {
                btnUsuarios.textContent = 'Obtener Usuarios de localhost:8081';
            }
        });
    }
};
