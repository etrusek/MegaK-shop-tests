class Warrior {
    #name;
    #attack;
    #hp;

    constructor(name, attack, hp) {
        this.#name = name;
        this.#attack = attack;
        this.#hp = hp;
    }

    getName(){
        return this.#name;
    }
    getAttack(){
        return this.#attack;
    }
    getHp(){
        return this.#hp;
    }
    setHp(hp){
        this.#hp = hp
    }
    levelUp(){
        this.#attack *= 1.1;
        this.#hp *= 1.1;
    }
}

module.exports = {
    Warrior,
};