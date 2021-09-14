const {Clock} = require('./test2')

new Clock()
    .on('tic', () => {
        console.log('0.5 sec')
    })
    .once('tic', () => {
        console.log('działa tylko raz - once')
    })
    .on('tack', () => {
        console.log('1 sec')
    })