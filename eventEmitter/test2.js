const {EventEmitter} = require('events')

const clock = () => {
    const ee = new EventEmitter();

    setInterval(() => {
        ee.emit('tic', 'przekazany argument dodatkowo', [1, 2])
    }, 500);
    setInterval(() => {
        ee.emit('tack')
    }, 1000);

    return ee;
}

module.exports = {clock}