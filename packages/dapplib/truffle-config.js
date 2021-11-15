require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good argue sure spot toy note prefer purpose inner private flat seek'; 
let testAccounts = [
"0x80434197544c5c8f04e07c6708f277306b62886ed94bcb2d0b71b2b4e047f42d",
"0x5c6cb2390abfe59fd01c4a7863071d91a0dca84361e2c1630b394e12c7476f18",
"0x5fbd5e3346b42844a602d1ec17a7840ebca98f7607dc33bf1285c7f7e52314d3",
"0x1ebe38c8a2b5ed8436c678e013fc01bf4ad88723c936ac3b59c1d39e4de2eff6",
"0x4976a4f0678c8224172e5fe83b7b7bdeabaf33842aeb1907dc404763cf6cd086",
"0x5407843aa711d55e40f6caf8bfca98242f90f111d79120647b892e9d41e5cbca",
"0x3105abf7273c0530b978cf3cfab08139163732076e8599927fa9cd2bd492e097",
"0x736b6fda9b345666d41f276b152da3e9b9455cc66a0a5c26c2ca76ca2ef45c0f",
"0xbafe3fce05c9fd7b4daf3b381a8f1e3f216188c35d52b4ae7293155aef54441a",
"0xed49bc68025689360411c076ec629520379943e7b5a3b4ea6a57e4655051e769"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


