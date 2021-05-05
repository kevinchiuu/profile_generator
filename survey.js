const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answers = "";
rl.question("What's your name? Nicknames are also acceptable ", (answer) => {
  answers += `${answer} `;

  rl.question("What's an activity you like doing? ", (answer) => {
    answers += `Likes to ${answer} ,`;
    
    rl.question("What do you listen to while doing that? ", (answer) => {
      answers += `woow nicee :) ${answer} `;

      rl.question("Which meal is your favourite (eg. dinner, brunch, etc.) ", (answer) => {
        answers += `sounds like ${answer} `;

        rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
          answers += `Sounds Tasty! ${answer} `;

          rl.question("Which sport is your absolute favourite? ", (answer) => {
            answers += `that's a nice sport! ${answer} `;

            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
              answers += `Wow good answer :P ${answer} `;

              console.log(answers);
              rl.close();
            });
          });
        });
      });
    });
  });
});