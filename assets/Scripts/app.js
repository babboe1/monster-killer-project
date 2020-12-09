const ATTACK_VALUE = 10;
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
   if (currentMonsterHealth <= 0) {
      alert('you won! ');
   } else if (currentPlayerHealth <= 0) {
      alert('you lost!');
   }
}

attackBtn.addEventListener('click', attackHandler);
