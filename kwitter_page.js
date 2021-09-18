var firebaseConfig = {
    apiKey: "AIzaSyD5ovgC0q0RnPvvAM0YQmiSWaUhcqbTD30",
    authDomain: "kwitter-app-5c771.firebaseapp.com",
    databaseURL: "https://kwitter-app-5c771-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-5c771",
    storageBucket: "kwitter-app-5c771.appspot.com",
    messagingSenderId: "488982267624",
    appId: "1:488982267624:web:79b56ad3b36db3785b2b5d",
    measurementId: "G-LF2W0X29FN"
  };
  firebase.initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
    } });  }); }
getData();
function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });

    document.getElementById("msg").value = "";
}