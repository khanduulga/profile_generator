const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :)\n', (name) => {
  console.log(`Hi ${name}!`);
  rl.question('What\'s an activity you like doing?\n', (hobby) => {
    console.log(`${hobby}ing is fun!`);
    rl.question('What do you listen to while doing that?\n', (music) => {
      console.log(`Cool, I'll add ${music} to our playlist.`);
      rl.question('Which meal is your favourite? (eg: dinner, brunch, etc.)\n', (meal) => {
        console.log(`${meal} is best!`);
        rl.question('What\'s your favourite thing to eat for that meal?\n', (food) => {
          console.log(`${food}!? YUMM!!!`);
          rl.question('Which sport is your absolute favourite?\n', (sport) => {
            console.log(`${sport} can get very competative. I'm sure you're good.`);
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!\n', (superpower) => {
              console.log(`Thats awesome! I wish I could ${superpower}`);
              console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
              console.log(`Here is your profile description`);
              console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
              console.log(`${name} loves listening to ${music} while he ${hobby}s. ${name}'s favorite thing to eat during ${meal} is ${food} and it probably comes after a game of ${sport}. If you need ${name} for ${superpower}, feel free to shoot a message!`);

              rl.close();
            });
          });
        });
      });
    });
  });

});

