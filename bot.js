const tmi = require('tmi.js')
var {randomFact} = require('./randomFacts.js')
var {twitter, facebook,instagram, discord} = require('./commands/commands.js')
var options = require('./credentials.js')

userChannel = options.channels[0]
var client = new tmi.client(options);

client.connect();

client.on('connected', (address, port) => {
    var message = client.action(userChannel, `Hello I am the ${username} and I will be imparting my knowledge upon you wonderful land-dwellers!`);
})
/*
    Gives a random fact from the randomFacts array. Tests to make sure it doesnt repeat the same fact twice in a row
*/
previousFact = "";
    setInterval(() =>{
        var randomFacts = randomFact[Math.floor(Math.random()*randomFact.length)];
        while(randomFacts === previousFact){
            var randomFacts = randomFact[Math.floor(Math.random()*randomFact.length)];
        }
        client.say(userChannel, randomFacts)
        previousFact = randomFacts;
    }, 300000);

/*
    @handleMsg allows for people in chat to call a command. Has a 15 second timeout on all commands.
    Maybe try to set it up where there is only a timeout for each command itself.
*/
// var handleMsg = function(channel, user, message, self) {
//
//   if (message === '!twitter') {
//     setTimeout( function() {
//       client.once( 'chat', handleMsg );
//   }, 15000);
//     client.say(userChannel, twitter)
//   }
//
//   if (message === '!facebook') {
//     setTimeout( function() {
//       client.once( 'chat', handleMsg );
//   }, 15000);
//     client.say(userChannel, facebook)
//   }
//   if (message === '!instagram') {
//     setTimeout( function() {
//       client.once( 'chat', handleMsg );
//   }, 15000);
//     client.say(userChannel, facebook)
//   }
//   if (message === '!discord') {
//     setTimeout( function() {
//       client.once( 'chat', handleMsg );
//   }, 15000);
//     client.say(userChannel, facebook)
//   }
// };
//
// client.once('chat', handleMsg );
