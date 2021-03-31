const heartsContainer = document.querySelector("#hearts-container");
const controlsContainer = document.querySelector("#controls-container");
const hitButton = controlsContainer.querySelector("#hit-button");
const hitDamageInput = controlsContainer.querySelector("#hit-damage-input");
const healButton = controlsContainer.querySelector("#heal-button");
const healInput = controlsContainer.querySelector("#heal-amount-input");
const heartAddButton = controlsContainer.querySelector('#add-heart-container-button')
const overhealButton = controlsContainer.querySelector('#overheal-button');
const overhealInput = controlsContainer.querySelector('#overheal-amount-input');
let health = 35;
let maxHealth = 40;

function randint(lo, hi) {
  return Math.floor(Math.random() * (hi - lo) + lo);
}

function updateHeartsDisplay() {
  let quartersToFill = health;
  for (const heart of heartsContainer.querySelectorAll(".heart")) {
    if (quartersToFill) {
      let quarters = Math.min(quartersToFill, 4);
      heart.dataset.quarters = quarters;
      quartersToFill -= quarters;
    } else {
      heart.dataset.quarters = .25;
    }
  }
}

hitButton.addEventListener("click", function () {
  let damage = Number(hitDamageInput.value);
  health = Math.max(0, health - damage);
  updateHeartsDisplay();
});

healButton.addEventListener("click", function () {
  let heal = Number(healInput.value);
  health = Math.max(0, health + heal);
  updateHeartsDisplay();
});

heartAddButton.addEventListener("click", function () {
  let addingHeart = heartsContainer.firstElementChild.cloneNode(true);
  heartsContainer.appendChild(addingHeart);
  maxHealth += health + 4;
  health = maxHealth;
  updateHeartsDisplay();
});

overhealButton.addEventListener("click", function () {
  if (health < maxHealth) {
    let overHealInput = Number(overhealInput.value);
    maxHealth += health +  4;
    health = maxHealth;
    updateHeartsDisplay();
  }
  let overhealed = heartsContainer.firstElementChild.cloneNode(true);
  overhealed.classList.toggle("extra");
  heartsContainer.appendChild(overhealed);
  console.log(overhealed.classList.contains('extra'));
});






