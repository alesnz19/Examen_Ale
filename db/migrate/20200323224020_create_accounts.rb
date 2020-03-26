class CreateAccounts < ActiveRecord::Migration[5.0]
  def change
    create_table :accounts do |t|
      t.string :Numero_Cuenta
      t.string :Pertenece_A
      t.string :String
      t.references :clients, foreign_key: true

      t.timestamps
    end
  end
end
