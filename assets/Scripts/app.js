const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_PLAYER_VALUE = 20;

let chosenMaxLIfe = 100;
let currentMonsterHealth = chosenMaxLIfe;
let currentPlayerHealth = chosenMaxLIfe;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLIfe);

function endRound() {
   const initialPlayerHealth = currentPlayerHealth;
   const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
   currentPlayerHealth -= playerDamage;
   if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
      alert('you won! ');
   } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
      alert('you lost!');
   } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
      alert('you have a draw!!');
   }
}

function attackMonster(mode) {
   let maxDamage;
   if (mode === 'ATTACK') {
      maxDamage = ATTACK_VALUE;
   } else if (mode === 'STRONG_ATTACK') {
      maxDamage = STRONG_ATTACK_VALUE;
   }
   const damage = dealMonsterDamage(maxDamage);
   currentMonsterHealth -= damage;
   endRound();
}
function attackHandler() {
   attackMonster('ATTACK');
}
function strongAttackHandler() {
   attackMonster('STRONG_ATTACK');
}
function healPlayerHandler() {
   let healValue;
   if (currentPlayerHealth >= chosenMaxLIfe - HEAL_PLAYER_VALUE) {
      alert("you can't heal higher than max health");
      healValue = chosenMaxLIfe - currentPlayerHealth;
   } else {
      healValue = HEAL_PLAYER_VALUE;
   }
   increasePlayerHealth(HEAL_PLAYER_VALUE);
   currentPlayerHealth += healValue;
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
