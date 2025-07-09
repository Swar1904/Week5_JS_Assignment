// app.js

// Task 1: Welcome 📨
function sendMessage(name, cb) {
  cb(name);
}
function welcomeCallback(username) {
  console.log(`\n📨 Welcome, ${username}!\n`);
}

// Task 2: Temperature Checker 🌡️
function checkTemperature(temp, cb) {
  cb(temp);
}
function temperatureCallback(temp) {
  const status = temp > 30 ? "Hot" : temp >= 15 ? "Warm" : "Cold";
  console.log(`${temp}°C is ${status}.`);
}

// Task 3: Quiz with Randomization & Timer ⏱️
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Shuffle questions (Fisher‑Yates) :contentReference[oaicite:6]{index=6}
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function askQuestion(qObj, cb, timeLimit, done) {
  let timeout = setTimeout(() => {
    console.log(`\n⏰ Time's up! The correct answer is: ${qObj.answer}`);
    done(false);
  }, timeLimit * 1000);

  rl.question(`${qObj.question} `, answer => {
    clearTimeout(timeout);
    cb(answer.trim(), qObj.answer, done);
  });
}

function answerCallback(user, correct, done) {
  if (user.toLowerCase() === correct.toLowerCase()) {
    console.log("✔️ Correct!");
    done(true);
  } else {
    console.log(`❌ Incorrect. The correct answer is ${correct}.`);
    done(false);
  }
}

// Quiz setup
const quiz = [
  { question: "What is 5 + 5?", answer: "10" },
  { question: "Capital of France?", answer: "Paris" },
  { question: "Color from blue + yellow?", answer: "Green" }
];
shuffle(quiz);

let score = 0, idx = 0;
const TIME_LIMIT = 10;

function next() {
  if (idx >= quiz.length) {
    console.log(`\n🎉 Quiz complete! Your score: ${score}/${quiz.length}`);
    rl.close();
    return;
  }
  askQuestion(quiz[idx], answerCallback, TIME_LIMIT, isCorrect => {
    if (isCorrect) score++;
    idx++;
    next();
  });
}

// Run all tasks
sendMessage("Amina", welcomeCallback);
[35, 22, 10].forEach(t => checkTemperature(t, temperatureCallback));

console.log("\n📝 Starting quiz (10s per question):");
next()
