// Variables
// I declared a variable and assigned it to an object with some keys and values.

const hero = {

  name: "Captain Slapstick",
  heroic: true,
  inventory: ['custard pie','anvil', 'big boot','boxing glove','banana peel'],
  health: 1,
  weapon: {
      type: "banana peel",
      damage: 900
    }

};
// Game logic
const rest = function(creature){
  if (hero.health < 10){
return creature.health =10;
}};
//maybe without the if statement?


const pickUpItem = function(creature, item){
  creature.inventory.push('custard pie');
  return creature;
};



const dealDamage = function(attacker, defender){
defender.health = defender.health - attacker.weapon.damage;
return defender;
};



const equipWeapon = function(creature, index){
  creature.weapon = creature.inventory[index]
  return creature.splice();
  };
  

const doBattle = (heroicCreature, creature) => {
if( heroicCreature === !heroic ){
  return null;
};
while( heroicCreature && creature === health > 0){
  dealDamage( heroicCreature, creature );
  dealDamage( creature, heroicCreature);
};
if( heroicCreature.health > 0) {
  return heroicCreature;
} else {
  alert('You died!')
};
};

// UI
