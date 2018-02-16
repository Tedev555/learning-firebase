//Using TIMESTAMP
var sessionsRef = firebase.database().ref("sessions");
sessionsRef.push({
  startedAt: firebase.database.ServerValue.TIMESTAMP
});

//Firebase count number of child
firebase.database().ref('some_refer').once("value")
  .then(function(snapshot) {

    console.log(snapshot.numChildren()); // Number of child count
    
});