db.resumoVoos.insertOne({ empresa: "LATAM AIRLINES BRASIL", totalVoosDomesticos: 20026 });
db.resumoVoos.findOne(
{ empresa: "LATAM AIRLINES BRASIL" }, 
{ _id: false, empresa: true, totalVoosDomesticos: true },
);
