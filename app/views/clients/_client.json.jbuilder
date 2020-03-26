json.extract! client, :id, :Nombre, :Apellido_Paterno, :Apellido_Materno, :Edad, :Telefono, :Calle, :Colonia, :Numero_De_Casa, :Municipio, :created_at, :updated_at
json.url client_url(client, format: :json)
