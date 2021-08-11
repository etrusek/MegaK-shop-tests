const {Warrior} = require('./warrior');
const {Arena} = require('./arena');

const arena = new Arena(
    new Warrior('Assasin', 2, 100),
    new Warrior('Batman', 1, 150)
)

arena.fight();
