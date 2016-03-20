

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



// 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
TrainData.on("child_added", function(childSnapshot, prevChildKey){

    console.log(childSnapshot.val());

    // Store everything into a variable.
    var TRName = childSnapshot.val().name;
    var TRdestination = childSnapshot.val().place;    
    var TRfrequency = childSnapshot.val().frequency;

    // Employee Info
    console.log(TRName);
    console.log(TRdestination);
    console.log(TRfrequency);
    

    // // Prettify the employee start
    // var empStartPretty = moment.unix(empStart).format("MM/DD/YY");
    // // Calculate the months worked using hardconre math
    // // To calculate the months worked 
    // var empMonths = moment().diff(moment.unix(empStart, 'X'), "months");
    // console.log(empMonths);

    // // Calculate the total billed rate
    // var empBilled = empMonths * empRate;
    // console.log(empBilled);

    // Add each train's data into the table 
    $("#table > tbody").append("<tr><td>" + TRName + "</td><td>" + TRdestination + "</td><td>" + TRfrequency + "</td></tr>");

});



