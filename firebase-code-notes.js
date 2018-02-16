//Using TIMESTAMP
var sessionsRef = firebase.database().ref("sessions");
sessionsRef.push({
  startedAt: firebase.database.ServerValue.TIMESTAMP
});