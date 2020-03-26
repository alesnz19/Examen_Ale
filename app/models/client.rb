class Client < ApplicationRecord
  has_many :accounts, dependent: :destroy,foreign_key: "clients_id"
end
