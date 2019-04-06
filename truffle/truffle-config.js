module.exports = {
rpc: {
host:"localhost",
port:8543
},
networks: {
development: {
host: "localhost", //our network is running on localhost
port: 8543, // port where your blockchain is running
network_id: "*",
from: "0x1393022306893f3cbf02661971ed36035ed455ac", // use the account-id generated during the setup process
gas: 20000000
}
}
}; 
