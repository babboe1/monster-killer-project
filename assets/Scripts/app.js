const ATTACK_VALUE = 10;

let chosenMaxLIfe = 100;
let currentMonsterHealth = chosenMaxLIfe;

adjustHealthBars(chosenMaxLIfe);

function attackHandler() {
   const damage = dealMonsterDamage(ATTACK_VALUE);
}

attackBtn.addEventListener('click',attackHandler);