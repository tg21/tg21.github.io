//socket-connection
var socket;
var server = location.protocol+"//"+window.location.hostname+":3000/";
$(function () {
    // socket = io.connect(host/*'http://localhost:3000/'*/);
    socket = io.connect("https://batchat.eu-gb.mybluemix.net/");
    socket.on('connect', function(data) {
        console.log("Connected...");

    });
    $('form').submit(function(e){
      e.preventDefault(); // prevents page reloading
      $('#messages').append($('<li class="list-group-item">').text("You : "+ $('#m').val()));
      socket.emit('chat message', $('#m').val());
      $('#m').val('');
      return false;
    });
    socket.on('reply', function(msg){
    //   console.log(msg);
      $('#messages').append($('<li class="list-group-item">').text("Stranger : "+msg));
    });
  });


function openForm() {
    document.getElementById("myform").style.display = "block";
    document.getElementById("open-chat-btn").style.display = "none";
  }
  
  function closeForm() {
    document.getElementById("myform").style.display = "none";
    document.getElementById("open-chat-btn").style.display = "block";
  }

// function pushMsg(){
//     e.preventDefault(); // prevents page reloading
//     $('#messages').append($('<li class="list-group-item">').text("You : "+ $('#m').val()));
//     socket.emit('chat message', $('#m').val());
//     $('#m').val('');
//     return false;
// };