export default function GenerateRandomName() {
  const adjectives = [
    "Amazing",
    "Awesome",
    "Brilliant",
    "Daring",
    "Fantastic",
    "Incredible",
    "Innovative",
    "Outstanding",
    "Remarkable",
    "Spectacular",
    "Stunning",
    "Superb",
    "Talented",
    "Wonderful",
  ];
  const nouns = [
    "Apple",
    "Banana",
    "Carrot",
    "Dog",
    "Elephant",
    "Fish",
    "Giraffe",
    "Horse",
    "Iguana",
    "Jellyfish",
    "Kangaroo",
    "Lion",
    "Monkey",
    "Octopus",
    "Penguin",
    "Quokka",
    "Rabbit",
    "Snake",
    "Tiger",
    "Unicorn",
    "Vulture",
    "Wombat",
    "Xenopus",
    "Yak",
    "Zebra",
  ];

  const randomAdjective =
    adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

  return `${randomAdjective} ${randomNoun}`;
}
