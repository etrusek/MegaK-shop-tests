const {clock} = require('./test2')

clock()
    .on('tic', (...args) => {
        console.log('0.5 sec', args[0], args[1])
    })
    .once('tic', () => {
        console.log('działa tylko raz - once')
    })
    .on('tack', () => {
        console.log('1 sec')
    })