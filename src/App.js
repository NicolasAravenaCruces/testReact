import React from "react";


const App = () => {
    //comentario fuera del return
    return (
        <div className="container mt-4 ">
            {/*comentario dentro del return*/}
            <div className="row">
                <div className="col-6">
                    <h1>Lista</h1>
                    <table class="table table-dark table-striped">
                        <thead>
                            <tr>
                                <th scope="col">ID Estudiante</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Apellido</th>
                                <th scope="col">Equipo</th>
                                <th scope="col">Opcion</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td><button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" id="dropdownMenuButton">
                                    Selecciona una opcion
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Editar</a></li>
                                    <li><a class="dropdown-item" href="#">Eliminar</a></li>
                                </ul>
                                </td>

                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>
                                    <div class="dropdown">
                                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Selecciona una opcion
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">Editar</a></li>
                                            <li><a class="dropdown-item" href="#">Eliminar</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@ugly</td>
                                <td>
                                    <div class="dropdown">
                                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Selecciona una opcion
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">Editar</a></li>
                                            <li><a class="dropdown-item" href="#">Eliminar</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                <div className="col-6">
                    <h1>Formulario</h1>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Nombre</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Ingresar Nombre" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Apellido</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Ingresar Apellido" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Equipo</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Ingresar ID del equipo" />
                    </div>
                    <a class="btn btn-primary" href="#" role="button">Agregar Estudiante</a>
                </div>

            </div>


        </div>
    )

}

export default App;


