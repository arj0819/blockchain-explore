var moment = require('moment');
// var SHA256 = require('crypto-js/sha256');

class Block {
    constructor(header, prevHeader, data, timeCreated = moment().format('LLL')) {
        this.timeCreated = timeCreated;
        this.prevHeader = prevHeader;
        this.header = header;
        this.data = data;
    }
}

export default Block;