import Block from './Block';
var SHA256 = require('crypto-js/sha256');
var moment = require('moment');

class Blockchain {
    constructor() {
        this.blocks = [];
        var genesisBlockPrevHeader = 'None';
        var genesisBlockData = { number: -1 };
        var genesisBlockTimeCreated = moment().format('LLL');
        this.blocks.push(
            new Block(
                SHA256(genesisBlockPrevHeader + genesisBlockData + genesisBlockTimeCreated).toString(),
                genesisBlockPrevHeader,
                genesisBlockData,
                genesisBlockTimeCreated
            )
        );
        this.timeCreated = moment().format('LLL');
    }

    async addBlock(data) {
        var mostRecentBlock = this.blocks[this.blocks.length - 1];
        var nonce = 1;
        var newBlockHeader = SHA256(nonce + mostRecentBlock.header + mostRecentBlock.data + mostRecentBlock.timeCreated).toString();
        while (newBlockHeader.substr(0,4) !== '0000') {
            nonce++;
            newBlockHeader = SHA256(nonce + mostRecentBlock.header + mostRecentBlock.data + mostRecentBlock.timeCreated).toString();
        }
        this.blocks.push(new Block(newBlockHeader, mostRecentBlock.header, { ...data, nonce: nonce }));
    }

}

export default Blockchain;