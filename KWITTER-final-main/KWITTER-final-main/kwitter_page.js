//YOUR FIREBASE LINKS


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


function send()
{
      msg=document.getElementById(msg).value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
