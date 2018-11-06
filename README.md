# back-prueba

Llamadas a la API:

Cargar datos iniciales:
    http://localhost:8081/api/v1/loadInitialData

Consulta a todos los recursos:
    GET http://localhost:8081/api/v1/resources

Consulta a recurso por DNI:
    GET http://localhost:8081/api/v1/resources/xxxxxxxxy

Añadir recurso:
    POST http://localhost:8081/api/v1/resources

    {
        "dni": "dni",
        "firstName": "firstName",
        "lastName": "lastName"
    }

Actualizar recurso:
    PUT http://localhost:8081/api/v1/resources/xxxxxxxxy

    {
        "dni": "dni",
        "firstName": "firstName",
        "lastName": "lastName"
    }

Eliminar recurso:
    DELETE http://localhost:8081/api/v1/resources/xxxxxxxxy

