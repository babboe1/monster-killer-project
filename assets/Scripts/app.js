const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;

let chosenMaxLIfe = 100;
let currentMonsterHealth = chosenMaxLIfe;
let currentPlayerHealth = chosenMaxLIfe;

adjustHealthBars(chosenMaxLIfe);

function attackHandler() {
   const damage = dealMonsterDamage(ATTACK_VALUE);
   currentMonsterHealth -= damage;
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
function strongAttackHandler() {
   const damage = dealMonsterDamage(STRONG_ATTACK_VALUE);
   currentMonsterHealth -= damage;
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

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
