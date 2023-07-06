const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let profile = {
  name: '',
  activity: '',
  music: '',
  meal: '',
  food: '',
  sport: '',
  superpower: ''
};

function askQuestion(question, callback) {
  rl.question(question, (answer) => {
    callback(answer);
  });
}

function createProfile() {
  askQuestion("What's your name? Nicknames are also acceptable :) ", (answer1) => {
    profile.name = answer1;
    askQuestion("What's an activity you like doing? ", (answer2) => {
      profile.activity = answer2;
      askQuestion("What do you listen to while doing that? ", (answer3) => {
        profile.music = answer3;
        askQuestion("Which meal is your favourite (e.g., dinner, brunch, etc.)? ", (answer4) => {
          profile.meal = answer4;
          askQuestion("What's your favourite thing to eat for that meal? ", (answer5) => {
            profile.food = answer5;
            askQuestion("Which sport is your absolute favourite? ", (answer6) => {
              profile.sport = answer6;
              askQuestion("What is your superpower? In a few words, tell us what you are amazing at! ", (answer7) => {
                profile.superpower = answer7;

                console.log('\n--- Your Profile ---');
                console.log(`Hi! I am ${profile.name}. My favorite activity to do is ${profile.activity} and I listen to ${profile.music} when doing it. My favorite meal of the day is ${profile.meal} and i love to eat ${profile.food}. I love to play ${profile.sport} and my superpower is ${profile.superpower}`);
                console.log('-------------------');

                rl.close();
              });
            });
          });
        });
      });
    });
  });
}

createProfile();
