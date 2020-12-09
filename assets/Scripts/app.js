const ATTACK_VALUE = 10;

let chosenMaxLIfe = 100;
let currentMonsterHealth = chosenMaxLIfe;
let currentPLayerHealth = chosenMaxLIfe;

adjustHealthBars(chosenMaxLIfe);

function attackHandler() {
   const damage = dealMonsterDamage(ATTACK_VALUE);
   currentMonsterHealth -= damage;
}

attackBtn.addEventListener('click',attackHandler);