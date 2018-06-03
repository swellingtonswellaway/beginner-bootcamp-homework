// Variables
// I declared a variable and assigned it to an object with some keys and values.

const hero = {

  name: "Captain Slapstick",
  heroic: true,
  inventory: ['custard pie','anvil', 'big boot','boxing glove','banana peel'],
  //Should I add damage to the inventory as well?
  health: 1,
  weapon: {
      type: "banana peel",
      damage: 900
    }

};
// Game logic
const rest = function(creature){
  creature.health =10;
  return creature;
};

const pickUpItem = function(creature, item){
  creature.inventory.push('custard pie');
  return creature;
};
console.log(pickUpItem);

const dealDamage = function(attacker, defender){
defender.health = defender.health - attacker.weapon.damage;
return defender;
};



const equipWeapon = function(creature, index) {
  creature.weapon = creature.inventory[index];

   creature.inventory.splice();
   return creature;
};


const doBattle = function(heroicCreature, creature) {
if( heroicCreature.heroic === false ){
  return null;
};
while( heroicCreature && creature === health > 0){
  dealDamage( heroicCreature, creature );
  dealDamage( creature, heroicCreature);
};
if( heroicCreature.health > 0) {
  return heroicCreature;
} else {
  window.alert('You died!');
};
};

// UI
