// ✅ Task 1: Grocery store  Restock 🛒🍎
const inventory = ["Apples", "Bread", "Milk", "Eggs"];
/* No need to redeclare 'inventory' if it already exists. 
  If you want a better word, you could use 'stock' or 'items' instead of 'inventory'. 
  For example:
  const stock = ["Apples", "Bread", "Milk", "Eggs"];
  Then update the rest of the code to use 'stock' instead of 'inventory'.
*/
// Add "Oranges" and "Bananas"
inventory.push("Oranges", "Bananas");

// Remove the first item
inventory.shift();

// Print updated inventory
console.log("Updated inventory:", inventory);


// ✅ Task 2: Student Attendance Checker 📚✅
const students = ["Ali", "Fatima", "Hassan", "Layla"];

function isPresent(name) {
  if (students.includes(name)) {
    return `${name} is present.`;
  } else {
    return `${name} is absent.`;
  }
}

// Example usage:
console.log(isPresent("Ali"));     // "Ali is present."
console.log(isPresent("Zainab"));  // "Zainab is absent."


// ✅ Task 3: Top Scorers Leaderboard 🏆⚽
const topScorers = [
  { name: "Messi", score: 5 },
  { name: "Ronaldo", score: 3 },
  { name: "Neymar", score: 4 }
];

function updateScore(playerName, scoreToAdd) {
  const player = topScorers.find(p => p.name === playerName);
  if (player) {
    player.score += scoreToAdd;
  } else {
    topScorers.push({ name: playerName, score: scoreToAdd });
  }
}

function printLeaderboard() {
  const sorted = [...topScorers].sort((a, b) => b.score - a.score);
  console.log("Leaderboard:");
  sorted.forEach(player => {
    console.log(`${player.name}: ${player.score}`);
  });
}

// Example:
updateScore("Ronaldo", 2);
printLeaderboard();


// 🌟 Stretch Task: The Ultimate Treasure Hunt 🗺️💎🏴‍☠️
const clues = ["Map", "Compass", "Key", "Shovel"];
const clueMessages = ["ppaM", "ssapmoC", "yeK", "levohS"];
const treasureMapSteps = ["Start at the beach", "Cross the forest", "Climb the mountain", "Find the cave", "Treasure"];

function findClue(clueArray, clueName) {
  return clueArray.includes(clueName)
    ? `Clue ${clueName} found!`
    : `Clue ${clueName} is missing, search again!`;
}

function decipherMessage(messages) {
  return messages.map(msg => msg.split("").reverse().join(""));
}

function followSteps(steps) {
  for (let i = 0; i < steps.length; i++) {
    const step = steps[i];
    console.log(`Step ${i + 1}: ${step}`);
    if (step === "Danger") {
      console.log("Stopped at danger. Cannot continue.");
      return false;
    }
  }
  return steps[steps.length - 1] === "Treasure";
}

function treasureHunt() {
  const decoded = decipherMessage(clueMessages);
  console.log("Decoded Messages:", decoded);

  const allCluesFound = clues.every(clue => decoded.includes(clue));
  const completed = followSteps(treasureMapSteps);

  if (allCluesFound && completed) {
    console.log("🎉 Congratulations! You found the ultimate treasure!");
  } else {
    console.log("💔 The treasure remains hidden. Try again!");
  }
}

// Run the treasure hunt
treasureHunt();