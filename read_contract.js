const {ethers} = require('ethers');
const transfer = require('./trnasfer.json');
dotenv.config();
const RPC = process.env.RPC;

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