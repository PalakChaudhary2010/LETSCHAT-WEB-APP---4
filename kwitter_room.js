const firebaseConfig = {
    apiKey: "AIzaSyD-C5Hf5sRAg4cFM_VD8_cd1Wbj4K_9rHs",
    authDomain: "let-s-chat-web-app-d521a.firebaseapp.com",
    databaseURL: "https://let-s-chat-web-app-d521a-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-web-app-d521a",
    storageBucket: "let-s-chat-web-app-d521a.appspot.com",
    messagingSenderId: "37688098650",
    appId: "1:37688098650:web:845bd2d44b880b43393d63",
    measurementId: "G-BY3VYX7FQV"
  };
   firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome  "+ user_name+ "  !";
  function addRoom()
  {
        room_name = document.getElementById("room_name").value;

        firebase.database().ref("/").child(room_name).update({
              purpose : "adding room name"
        });

        localStorage.setItem("room_name", room_name);

        window.location = "kwitter_page.html";
  }
function getData()
{
     Room_names = childKey;
    //Start code
    console.log("Room Name - " + Room_names);
    row = "<div class= 'room_name' id= "+Room_names+" onclick= 'redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML +=row;

    //End code
}

getData();
function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}


function logout() 
{
   localStorage.removeItem("user_name");

   localStorage.removeItem("room_name");

   window.location = "kwitter.html";
}

