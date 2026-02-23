const heroDescription = [
  {
    name: "Laurel",
    age: 124,
    race: "High-Elf",
    heroClass: "Paladin",
    specialAttack: "Divine Smite"
  },
  {
    name: "Astarion",
    age: 239,
    race: "High-Elf/Vampire Spawn",
    heroClass: "Rogue",
    specialAttack: "Sneak Attack" 
  },
  {
    name: "Gale",
    age: 35,
    race: "Human",
    heroClass: "Wizard",
    specialAttack: "Fireball"
  }
];

class Hero {
  constructor(name, age, race, heroClass, specialAttack) {
    this.name = name;
    this.age = age;
    this.race = race;
    this.heroClass = heroClass;
    this.specialAttack = specialAttack;
  }

  attack() {
    console.log(`${this.name}, the ${this.heroClass}, attacked using ${this.specialAttack}`);
  }
}


heroDescription.forEach(character => {
  const instancedHero = new Hero(
    character.name,
    character.age,
    character.race,
    character.heroClass,
    character.specialAttack
  );

  instancedHero.attack();
});