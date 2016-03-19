

var TrainData = new Firebase("https://bhtrains.firebaseio.com/");

// use moment.js, next train- minutes we are at right now
$("#submit").on("click", function(){
	
   // Grabs user input
    var TRname = $("#trainNameInput").val().trim();
    var TRdestination = $("#destinationInput").val().trim();
    // var  = moment($("#startInput").val().trim(), "DD/MM/YY").format("X");
    var  TRfrequency= $("#frequencyInput").val().trim();


   // Creates local "temporary" object for holding  data
    var newTrain = {
        name:  TRname,
        place: TRdestination,
        // start: empStart,
        frequency: TRfrequency
    }

  // Uploads employee data to the database
    TrainData.push(newTrain);

   // Logs everything to console
    console.log(newTrain.name);
    console.log(newTrain.place); 
    console.log(newTrain.frequency);

    alert("Employee successfully added");

//clears text boxes
    $("#trainNameInput").val("");
    $("#destinationInput").val("");
  
    $("#frequencyInput").val("");

    // Prevents moving to new page
    return false;
});