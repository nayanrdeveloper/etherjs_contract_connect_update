const ethers = require('ethers'); 

const private_key = "703362893e526455cdc1ac0f2109b4f4171283a19ab068d65cabd4a146371b72";
const account = "0x6e50512597b062a52E198ED9795D2cBf496cbc3f";
const account2 = "0x78CbEcC95172Aacb79F60Ae3d1f074D2e48207c4";
const RPC = "https://ropsten.infura.io/v3/6524602b716e4e1f9c374b9c041de314";


const provider = new ethers.providers.JsonRpcProvider(RPC);
const wallet = new ethers.Wallet(private_key,provider);

async function call(){
    // const balance = await provider.getBalance(account);
    // console.log(ethers.utils.formatEther(balance));
    console.log(await wallet);
    console.log(await ethers.utils.formatEther(await wallet.getBalance()))
}

async function transferEther(){
    // const bal1 = await ethers.utils.formatEther(provider.getBalance());
    const beforeTrans = console.log(await ethers.utils.formatEther(await wallet.getBalance()))
    console.log(`before transacion ${beforeTrans}`);

    const trans = await wallet.sendTransaction({
        to: account2,
        value: ethers.utils.parseEther('0.25')
    })
    await trans.wait();

    const afterTrans = console.log(await ethers.utils.formatEther(await wallet.getBalance()))
    console.log(`after transacion ${afterTrans}`);

}

// call();
transferEther();