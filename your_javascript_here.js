// Variables
// I declared a variable and assigned it to an object with some keys and values.

const hero = {

  name: "Captain Slapstick",
  heroic: true,
  inventory: ['custard pie','anvil', 'big boot','boxing glove','banana peel'],
  health: 3,
  weapon: {
      type: 'anvil',
      damage: 500,
    }

};
// Game logic
const rest = function(creature){
  creature.health =10;
  return creature;
};

const pickUpItem = function(creature, item){
  creature.inventory.push('boomarang');
  return creature;
};

const dealDamage = function(attacker, defender){
defender.health = defender.health - attacker.weapon.damage;
return defender;
};

const equipWeapon = function(creature, index) {
  creature.weapon = creature.inventory[index];

   return creature.inventory.splice(4); //illegal return


};

const doBattle = function(heroicCreature, creature) {
if( heroicCreature.heroic === false ){
  return null;
};
while( heroicCreature && creature === health > 0){
  dealDamage( heroicCreature, creature )
  dealDamage( creature, heroicCreature )
};

if( heroicCreature.health > 0 )//|| creature.health === 0)
{
  return heroicCreature; // this is an illegal return statement.
} else {
  alert('Your hero died!');
}
};


// UI
function bed(){
  document.getElementById('bed');
  rest(hero);
console.log(`${hero.name}. You are a healthy ${hero.health}!`);
};



function weapon(){
  document.getElementById('weapon');
  pickUpItem(hero, weapon:{ type: 'banana skin', damage: 500});
  console.log(`Your weapon of choice is a ${hero.weapon.type}. Damage value = ${hero.weapon.damage}.`);
//this is calling what is written in the original object. AHHHHHHHHH.
};

function enemy() {
  document.getElementById('enemy');
  doBattle(hero,enemy:{health: 4}, weapon: {type:'sparkles',damage: 350});
  console.log(`Your enemies health is ${enemy.health} and it's weapon of choice is ${enemy.weapon.type} which causes damage of ${damage}.`);
};
