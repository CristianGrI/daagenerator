

function randomClients( count ) {

var clientsData = [];

for (let index = 0; index < count; index++) {
    clientsData.push({ 
ID : index, 
quantity : Number((Math.random() * 100).toFixed(0)),


    });
    
}
return clientsData;
}


var clientsData = randomClients(100);
console.log(clientsData);



