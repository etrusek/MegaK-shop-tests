const {EventEmitter} = require('events');

class Restaurant extends EventEmitter {
    /**
     * Otwarcie restauracji.
     */
    open() {
        // Emit...
        this.emit('event', 'Otwarto restaurację.')
    }

    /**
     * Zamknięcie restauracji.
     */
    close() {
        // Emit...
        this.emit('event', 'Zamknięto restaurację')
    }

    /**
     * Stolik został zarezerowany na teraz.
     * Traktuj to jako po prostu 1 stolik mniej.
     */
    reserveTable() {
        // Emit...
        this.emit('event', -1)

    }

    /**
     * Odwołano rezerwację na stolik.
     * Traktuj to jako po prostu 1 stolik więcej.
     */
    cancelTableReservation() {
        // Emit...
        this.emit('event', +1)
    }

    /**
     * Ktoś wziął stolik bez rezerwacji.
     */
    takeTableWithoutReservation() {
        // Emit...
        this.emit('event', -1)
    }

    /**
     * Stolik się popsuł, odpadła noga :/
     */
    markTableAsBroken() {
        // Emit...
    }

    /**
     * Ktoś skończył jeść, czyścimy stolik i wraca do użytku.
     */
    cleanupTable() {
        // Emit...
        this.emit('event', +1)
    }
}

module.exports = {
    Restaurant,
};