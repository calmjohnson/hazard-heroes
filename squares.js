//define the coordinates and colors for each square on the board
let squares = [
  {
    x: 200,
    y: 550,
    color: "#000000",
    hazard: "",
  },
  {
    x: 200,
    y: 480,
    color: "#C2A269",
    hazard: "Oh no, there is granola on the floor! What should you do?",
  },
  {
    x: 200,
    y: 410,
    color: "#2E5E6A",
    hazard:
      "Oh no, you notice a gas-like odor coming from the oven while baking granola, what should you do?",
  },
  {
    x: 200,
    y: 340,
    color: "#434752",
    hazard:
      "You accidentally drop a small ring into granola, what should you do?",
  },
  {
    x: 200,
    y: 270,
    color: "#C2A269",
    hazard: "Uh-oh, there are tiny flies near the granola, what should you do?",
  },
  {
    x: 200,
    y: 200,
    color: "#2E5E6A",
    hazard: "Oh no, you spill cleaning solution, what should you do?",
  },
  {
    x: 200,
    y: 130,
    color: "#434752",
    hazard:
      "You notice a piece of paper in the granola mix, what should you do?",
  },
  {
    x: 270,
    y: 130,
    color: "#C2A269",
    hazard:
      "Oops! You forgot to cover your mouth when you sneezed near the granola! What should you do?",
  },
  {
    x: 340,
    y: 130,
    color: "#2E5E6A",
    hazard: "Oh no, you accidentally cut your fingers, what should you do?",
  },
  {
    x: 340,
    y: 200,
    color: "#434752",
    hazard:
      "You accidentally drop your hair clip into granola mix. What should you do?",
  },
  {
    x: 340,
    y: 270,
    color: "#C2A269",
    hazard:
      "Oh no! You didn't was your hands before touching granola mix. What should you do?",
  },
  {
    x: 340,
    y: 340,
    color: "#2E5E6A",
    hazard:
      "Oh no, you accidentally spilled some hand sanitizer on the counter, what should you do?",
  },
  {
    x: 410,
    y: 340,
    color: "#434752",
    hazard:
      "You accidentally drop a rubber band in the granola mix. What should you do?",
  },
  {
    x: 480,
    y: 340,
    color: "#C2A269",
    hazard:
      "Hmm, mixing spoons and bowls we're using for granola is dirty. What should you do?",
  },
  {
    x: 480,
    y: 270,
    color: "#2E5E6A",
    hazard:
      "Oh no, you notice a strong smell of oven cleaner in the kitchen. What should you do?",
  },
  {
    x: 480,
    y: 200,
    color: "#434752",
    hazard:
      "You notice a piece of foil in the granola mix. What should you do?",
  },
  {
    x: 480,
    y: 130,
    color: "#C2A269",
    hazard:
      "Uh-oh! There is a broken egg on the counter near our granola ingredients. What should you do?",
  },
  {
    x: 480,
    y: 60,
    color: "#2E5E6A",
    hazard:
      "Oh no, you spilled cleaning solution on your clothes! What should you do?",
  },
  {
    x: 550,
    y: 60,
    color: "#434752",
    hazard: "You see a penny in the granola mix. What should you do?",
  },
  {
    x: 620,
    y: 60,
    color: "#C2A269",
    hazard:
      "A glass container breaks, scattering broken glass on the floor. What should you do?",
  },
  {
    x: 620,
    y: 130,
    color: "#2E5E6A",
    hazard:
      "Uh-oh, you accidentally spray sanitizer into you eyes. What should you do?",
  },
  {
    x: 620,
    y: 200,
    color: "#434752",
    hazard: "You see an ear ring in the granola mix. What should you do?",
  },
  {
    x: 620,
    y: 270,
    color: "#C2A269",
    hazard:
      "Uh-oh! There is an open bag of flour near our granola. What should you do?",
  },
  { x: 690, y: 270, color: "#22c55e", hazard: "" },
];
