
//ADD YOUR FIREBASE LINKS

 var firebaseConfig = {
  apiKey: "AIzaSyD8td_kmeTocbBHHvgPiZ1VtVeWY2SaXSU",
  authDomain: "kwiiter-31b5f.firebaseapp.com",
  databaseURL: "https://kwiiter-31b5f-default-rtdb.firebaseio.com",
  projectId: "kwiiter-31b5f",
  storageBucket: "kwiiter-31b5f.appspot.com",
  messagingSenderId: "56364726913",
  appId: "1:56364726913:web:d77f9715d9ceaa7d996b80"
};

// Initialize Firebase
firebase. initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

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
    window.location = "kwitter.html";
}
