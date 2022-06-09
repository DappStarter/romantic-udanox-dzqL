require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include kiwi flame table educate ranch remind prosper gesture inflict task general'; 
let testAccounts = [
"0xbfb11d5afa19d5941689da114c74fde61385772556a3235697b3f95b5decf7a5",
"0xd884243f553848a08f1896a16742fca6aba8d716c5b3a42f99eb9442fd104b4e",
"0x08b54e9e6555346d94bac4b004618510649f2d6fd88f5682aeb7eb8d5f33c32e",
"0x26c370946fb5f6372fbcfaef236809afd3bea6eff9394e47f14efb2d4374777b",
"0xe20e772f8f9143a251828d20475a92a73c92ab89d748726871a1d3bddd44fe28",
"0xd35cb871ee854ee409b5e696c5f8e53ca41f92d321fb4cfcd3e4524e3ee5bdf0",
"0xaa45731fc2b2d270c6f30f40e62b0fbc39ff4c1fcc1d601de0e73331795f9b00",
"0xf129190c69256486cc967eb2794d7412dec6112215c5a3f42da757da89c91c8b",
"0xd5de618bc5c3e26abf18fdc8f15e7d8c56e09efa6394f74a6e3d80b4fa81f7b5",
"0xb87850372cd5e685fb2a6837dc5d02e7e6ffedcc6bad8d573ed1fd39e6dbedae"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

