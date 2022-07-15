
db.produtos.find({}, { _id: 0, criadoPor: 1, nome: 1 });