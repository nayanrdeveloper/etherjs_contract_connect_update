const {ethers} = require('ethers');
const transfer = require('./trnasfer.json');

const RPC = 'https://ropsten.infura.io/v3/1f051b0ef1b749a59db324167ffad1f6';

const provider = new ethers.providers.JsonRpcProvider(
    RPC
)

const contractAddress = '0x752af2Fe8473819728303C75B6740A2Df5e200fB';
const ABI = transfer.abi;

async function call() {
    const contract = new ethers.Contract(
        contractAddress,
        ABI,
        provider
    )

    console.log(`The address of owner: ${await contract.owner()}`);
}

call();