import Web3 from 'web3';
const web3 = new Web3("http://127.0.0.1:7545");

async function setBalances() {
  const accounts = await web3.eth.getAccounts();

  await web3.eth.sendTransaction({
    from: accounts[1],
    to: accounts[2],
    value: web3.utils.toWei("5", "ether"),
  });

  await web3.eth.sendTransaction({
    from: accounts[3],
    to: accounts[4],
    value: web3.utils.toWei("10", "ether"),
  });

  await web3.eth.sendTransaction({
    from: accounts[5],
    to: accounts[6],
    value: web3.utils.toWei("15", "ether"),
  });

  await web3.eth.sendTransaction({
    from: accounts[7],
    to: accounts[8],
    value: web3.utils.toWei("20", "ether"),
  });

  console.log("Balances set!");
}

setBalances().catch(console.error);
