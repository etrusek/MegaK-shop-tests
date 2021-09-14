const {EventEmitter} = require('events')

class Clock extends EventEmitter {
    constructor() {
        super();
        setInterval(() => {
            this.emit('tic')
        }, 500);
        setInterval(() => {
            this.emit('tack')
        }, 1000);
    }
}

module.exports = {Clock}