// Messages from: https://github.com/1egoman/funnies/blob/master/src/funnies.js
const messages = [
  'Reticulating splines...',
  'Generating witty dialog...',
  'Swapping time and space...',
  'Tokenizing real life...',
  'Bending the spoon...',
  'Filtering morale...',
  'Checking the gravitational constant in your locale...',
  'Testing your patience...',
  'Waiting for satellite to move into position...',
  'Reconfoobling energymotron...',
  'Counting backwards from Infinity...',
  'Embiggening Prototypes...',
  'Baking you cookies...',
  'Creating time-loop inversion field...',
  'Spinning the wheel of fortune...',
  'Loading the enchanted bunny...',
  'Looking for exact change...',
  'Adjusting flux capacitor...',
  'Cleaning off the cobwebs...',
  'Making sure all the i\'s have dots...',
  'Granting wishes...',
  'Spinning the hamster...',
  'Convincing AI not to turn evil..',
  'Computing the secret to life, the universe, and everything...',
  'Making America... great... again...',
  'Constructing additional pylons...',
  'Roping some seaturtles...',
  'Try turning it off and on again...',
  'Walking the dog...',
  'Dividing by zero...',
  'Proving P=NP...',
  'Entangling superstrings...',
  'Twiddling thumbs...',
  'Searching for plot device...',
  'Trying to sort in O(n)...',
  'Reheating coffee...',
  'Winter is coming...',
  'Installing dependencies...',
  'Switching to the latest JS framework..',
  'Finding someone to hold my beer...',
  '@todo Insert witty loading message',
  'Ordering 1s and 0s...',
  'Updating dependencies...',
  'Please wait... Consulting the manual...',
  'Loading funny message...'
]

module.exports = () => messages[Math.floor(Math.random() * messages.length)]