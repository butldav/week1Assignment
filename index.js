//Price of Item
var itemPrice = 1.99;
console.log('The item I\'m buying is $' + itemPrice + '.');

//Amount of money in Wallet
var amtWallet = 50;
console.log('I have $' + amtWallet + ' in my wallet.');

//Number of total friends
var numFriends = 12;
console.log('I have ' + numFriends + ' friends.');

//Years lived
var ageYears = 40;
console.log('I am ' + ageYears + ' years old.')

//Name variables
var firstName = "Dave";
var lastName = "Butler";
var middleInitial = "R";

//New amount of money in wallet after buying the item 
var newWallet = amtWallet - itemPrice;
console.log('I have $' + newWallet + ' after purchase.');

//Friends made each year based on age and number of friends
var avgFriendsPerYear = numFriends / ageYears;
console.log('I make an average of ' + avgFriendsPerYear + ' friends each year.');

//Full name based on variables
var fullName = firstName + ' ' + middleInitial + ' ' + lastName;
console.log('My name is ' + fullName + '.');

