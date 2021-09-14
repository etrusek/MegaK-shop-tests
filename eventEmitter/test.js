const {clock} = require('./test2')

clock()
    .on('tic', () => {
        console.log('0.5 sec')
    })