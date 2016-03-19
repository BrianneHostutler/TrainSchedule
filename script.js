var AllTrains=  {
	"TrainName": "New York Express",
	"Destination": "New York City",
	"Frequency" : 60,
	"NextArrival": 0500,
	"MinutesAway" : "20",
};

var TrainData = new Firebase("https://bhtrains.firebaseio.com/");

// use moment.js next train- minutes we are at right now



console.og(moment(convertedDate).diff(moment(),"minutes"));
