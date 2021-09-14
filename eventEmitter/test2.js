const {EventEmitter} = require('events')

const clock = () => {
    const ee = new EventEmitter();

    setInterval(() => {
        ee.emit('tic')
    }, 500);
    return ee;
}

module.exports = {clock}