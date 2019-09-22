//socket-connection
var socket;
var msg_box = document.getElementById('messages');
// var server = location.protocol+"//"+window.location.hostname+":3000/";
$(function () {
    // socket = io.connect('http://192.168.0.106:3000/');
    socket = io.connect("https://batchat.eu-gb.mybluemix.net/");
    socket.on('connect', function(data) {
        console.log("Connected...");

    });
    $('form').submit(function(e){
      e.preventDefault(); // prevents page reloading
      $('#messages').append($('<li class="list-group-item chat-item-s list-group-item-danger">').text($('#m').val()+" : You"));
      $('#messages').append($('<br><br><br>'));
      // console.log(msg.scrollTop)
      // console.log(msg.scrollHeight)
      // console.log(msg.clientHeight)

      msg_box.scrollTop = msg_box.scrollHeight;
      // console.log(msg.scrollTop)
      // console.log(msg.scrollHeight)
      // -msg.clientHeight;
      // window.scrollTo(0,msg.clientHeight);
      socket.emit('chat message', $('#m').val());
      $('#m').val('');
      return false;
    });
    socket.on('reply', function(msg){
      
      $('#messages').append($('<li class="list-group-item chat-item-r list-group-item-primary">').text( "Anon : "+ msg));
      $('#messages').append($('<br><br><br>'));
      // window.scrollTo(0,msg.scrollHeight);
      // console.log("hello");
      // console.log(msg.scrollTop)
      // console.log(msg.scrollHeight)
      // console.log(msg.clientHeight)
      msg_box.scrollTop = msg_box.scrollHeight;
      // console.log(msg.scrollTop)
      // console.log(msg.scrollHeight)
      // var element = document.querySelector("li:last-child");
      // element.scrollIntoView();
      // msg.scrollTop(0,9999);
      // -msg.clientHeight;
    });
    socket.on('online',function(online_users){
      $("#online_count").text(online_users);
    
    });
  });
  
  // $('#messages').change(function(){
  //   var msg = $(this)
  //   console.log("changed");
  //   // msg.scrollBotton = msg.scrollHeight-msg.clientHeight;
  //   $('#messages').animate({scrollTop: document.body.scrollHeight},"fast");
  // });
// var msg = document.getElementById('messages');
//   msg.onchange = function() {
//     // your logic
//     console.log("changed");


//   };


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