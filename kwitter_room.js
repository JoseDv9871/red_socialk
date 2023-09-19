
//AÑADE TUS ENLACES DE FIREBASE
var firebaseConfig = {
      apiKey: "AIzaSyC7CZa0UpFEmGmvFybnmWNg4ooV6lck_Sg",
      authDomain: "red-social-e803e.firebaseapp.com",
      databaseURL:"https://red-social-e803e-default-rtdb.firebaseio.com/",
      projectId: "red-social-e803e",
      storageBucket: "red-social-e803e.appspot.com",
      messagingSenderId: "766368105827",
      appId: "1:766368105827:web:9166ec26328c4581253f56"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    user_name = localStorage.getItem("user_name");

    room_name = localStorage.getItem("room_name");

    document.getElementById("user_name").innerHTML = "!bienvenido " + user_name + "!";

    function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código
      console.log("Room_name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick=' redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //Final del código
      });});}
getData();


function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
      window.location = "index.html"
}
