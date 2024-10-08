<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="ui/jquery-ui.css">
    <link rel="stylesheet" href="ui/jquery-ui.theme.min.css">
    <style>
        #draggable {
            width: 20px;
            height: 20px;
            background-color: rgb(10, 82, 28);
            display: flex;
            align-items: center;
            /* Alineación vertical */
            justify-content: center;
            /* Alineación horizontal */
        }

        #droppable {
            width: 100px;
            height: 100px;
            background-color: rgb(119, 12, 57);
            margin-left: 50px;
        }
    </style>
</head>

<body>
    <div style="display: flex;">
        <div id="draggable">
            <!-- <p id="parrafo">Mueveme</p> -->
        </div>
        <div id="droppable">
        </div>
    </div>

    <div id="modalFormulario">
        <form id="miFormulario">
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre">

            <label for="edad">Edad:</label>
            <input type="text" id="edad" name="edad" title="Escribe una edad logica.">

            <button type="submit">Enviar</button>
        </form>
    </div>
    <!--Como se abre un modal-->
    <div id="modalMenor" title="Ventana Modal">
        <h2>¿Que te gusta hacer?</h2>
        <label><input type="checkbox" id="jugar" value="jugar">
            Jugar
        </label>
    </br>
        <label><input type="checkbox" id="leer" value="leer">
            Leer
        </label>
    </br>
        <label><input type="checkbox" id="bailar" value="bailar">
            Bailar
        </label>

    </div>
    <!--Como se abre un modal-->
    <div id="modalMayor" title="Ventana Modal">
        <h2>Rellena este formulario</h2>
        <form id="miFormulario">
            <label for="nombre">Apellido:</label>
            <input type="text" id="apellido" name="apellido">
        </br>
            <label for="dni">DNI:</label>
            <input type="text" id="dni" name="dni">
        </br>
            <!--Para mostrar calendario-->
            <label for="fecha">Selecciona tu fecha de nacimiento:</label>
            <input type="text" id="fecha">
        </br>

            <button type="submit">Enviar</button>
        </form>

    </div>



    <script src="formulario.js"></script>
    <script src="ui/jquery-ui.js"></script>
    <script src="script.js"></script>
</body>

</html>
