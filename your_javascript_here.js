// Variables


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

   return creature.inventory.splice(); //illegal return


};

const doBattle = function(heroicCreature, creature) {
if( heroicCreature.heroic === false ){
  return null;
};
while( heroicCreature && creature === health > 0){
  dealDamage( heroicCreature, creature )
  dealDamage( creature, heroicCreature )
  break;
}

if( heroicCreature.health > 0 )//|| creature.health === 0)
{
  return heroicCreature; // this is an illegal return statement.
} else {
  window.alert('Your hero died!');

}
};


// UI
function bed(){
  document.getElementById('bed');
  rest(hero);
console.log(`${hero.name}. You are a healthy ${hero.health}!`);
};
// this is the only one that is working properly


function weapon(){
  document.getElementById('weapon');
  pickUpItem(hero,{ type: 'banana skin', damage: 500});
  console.log(`Your weapon of choice is a ${hero.weapon.type}. Damage value = ${hero.weapon.damage}.`);
//this is calling what is written in the original object. AHHHHHHHHH.
};
//I commented out the last part as it breaks the whole thing. I would appreciate if you
// still looked at the code though <3

/*function unicorn(){
  document.getElementById('unicorn');

    doBattle(hero,enemy{health: 2, weapon{damage: 350}});
    console.log(`Your enemies health is ${enemy.health} and it's weapon of choice is ${enemy.weapon.type} which causes damage of ${damage}.`);
  };

 /*function backpack(){
    equipWeapon(hero, window.prompt("Enter the index of the weapon you want to use."));
    console.log(`Your weapon of choice is ${hero.weapon.type}. It causes ${hero.weapon.damage} points of damage.`)

  };

function displayStats(){
  //let stats = document.createElement("stats");
  //let newStats = document.createTextNode(`Hero ${hero.name}, Heroic ${hero.heroic} Inventory ${hero.inventory}`);
  document.getElementById('stats').innerHtml=(`Hero: ${hero.name} Health: ${hero.health} Weapon: ${hero.weapon.type} Damage: ${hero.weapon.damage}`);

};
displayStats();

*/
