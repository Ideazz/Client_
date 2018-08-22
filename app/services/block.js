import sha256 from 'crypto-js/sha256';

let chain = [];

function populateChain() {
  chain = [
    {
      index: 0,
      timestamp: 12312312321,
      data: {
        initiator: 'Dhrubesh',
        initiatorId: 213,
        joini: 'Viggu',
        joiniId: 215,
        referralId: 2132,
      },
      prevHash: '0',
      hash: '12312123',
    },
    {
      index: 1,
      timestamp: 1233332321,
      data: {
        initiator: 'Viggu',
        initiatorId: 215,
        joini: 'Alex',
        joiniId: 255,
        referralId: 223233,
      },
      prevHash: '12312123',
      hash: '9743973497',
    },
  ];
}

function getHash(index, data, prevHash, timestamp) {
  return sha256(JSON.stringify(data) +
  prevHash +
  index +
  timestamp).toString();
}


function Block(index, data, prevHash) {
  console.log('inside Block(), this is the fuckingg index:', index);
  console.log('this is again the data:', data);
  console.log('this is the prevHash:', prevHash);
  const timestamp = Math.floor(Date.now() / 1000);
  console.log(timestamp);
  const hash = getHash(index, data, prevHash, timestamp);
  const computedBlock = {
    index,
    data,
    prevHash,
    hash,
    timestamp,
  };
  return computedBlock;
}

function addBlock(data) {
  console.log('inside addBlock(), this is the data:', data);
  console.log('this is the chain:', chain);
  console.log('this is the length of the chain:', chain.length);
  // console.log();
  // console.log();
  const index = chain.length;
  const prevHash = chain.length !== 0 ? chain[chain.length - 1].hash : 0;
  console.log('computer hash: ', chain[chain.length - 1].hash);
  console.log(chain.length);
  console.log(chain[chain.length - 1]);
  // const block = new Block(index, data, prevHash);
  const finalBlock = Block(index, data, prevHash);
  console.log(finalBlock);
  chain.push(finalBlock);
  console.log(chain);
}

function generateBlock(data) {
  console.log('blockchain bitches', data);
  if (chain.length === 0) {
    populateChain();
  }
  console.log('inside some() this is the fucking chain', chain);
  // console.log();
  addBlock(data);
}

module.exports = {
  generateBlock,
};
