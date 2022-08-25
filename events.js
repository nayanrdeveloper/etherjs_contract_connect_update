const ethers = require('ethers');
const transfer = require('./trnasfer.json');

const RPC = 'https://ropsten.infura.io/v3/1f051b0ef1b749a59db324167ffad1f6';
const private_key= 'e9dc7c5c512b34fa952a1bfbfc652d6a37105e781e72ba4fb0e8140371cc30d5';
const account1 = '0x6e50512597b062a52E198ED9795D2cBf496cbc3f';


const provider = new ethers.providers.JsonRpcProvider(RPC);

const wallet = new ethers.Wallet(private_key,provider);

const contractAddress = '0x752af2Fe8473819728303C75B6740A2Df5e200fB';

const ABI = transfer.abi;

async function call(){
    const contract =new  ethers.Contract(contractAddress,ABI,provider);

    const block = await provider.getBlockNumber();
    console.log(`block Number is ${block}`);

    const trans = contract.filters.transaction(null,'1000000000000000000');
    const transcation = await contract.queryFilter(trans);

    transcation.map((tra) => {
        console.log(tra.args.to, ":", ethers.utils.formatEther(tra.args.amount));
    })
}

call();