const {Warrior} = require('./warrior.js')

class Arena {
    #warrior1;
    #warrior2;
    #active = 1
    #attacker
    #defender

    constructor(warrior1, warrior2) {
        if (!(warrior1 instanceof Warrior)) {
            throw new Error('warrior1 is not instanceof Warrior')
        }
        if (!(warrior2 instanceof Warrior)) {
            throw new Error('warrior2 is not instanceof Warrior')
        }
        this.#warrior1 = warrior1;
        this.#warrior2 = warrior2;
    }

    fight() {
        do {
            this.#attacker = this.#active === 1 ? this.#warrior1 : this.#warrior2;
            this.#defender = this.#active === 1 ? this.#warrior1 : this.#warrior2;
            this.#active = this.#active === 1 ? 2 : 1;
            this.#defender.setHp(
                this.#defender.getHp() - this.#attacker.getAttack(),
            )
            console.log(this.#defender.getName(), this.#defender.getHp())
        } while (this.#defender.getHp() > 0)


    }
}

module.exports = {Arena}