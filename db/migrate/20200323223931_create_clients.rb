class CreateClients < ActiveRecord::Migration[5.0]
  def change
    create_table :clients do |t|
      t.string :Nombre
      t.string :Apellido_Paterno
      t.string :Apellido_Materno
      t.string :Edad
      t.string :Telefono
      t.string :Calle
      t.string :Colonia
      t.string :Numero_De_Casa
      t.string :Municipio

      t.timestamps
    end
  end
end
