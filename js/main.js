
 //Initialize Firebase
  var config = {
    apiKey: "AIzaSyCvPelSDe2zsGCMDOqQufLO2JOBuAXA9yQ",
    authDomain: "reservation-site-c6de4.firebaseapp.com",
    databaseURL: "https://reservation-site-c6de4.firebaseio.com",
    projectId: "reservation-site-c6de4",
    storageBucket: "reservation-site-c6de4.appspot.com",
    messagingSenderId: "727532856447"
  };
  firebase.initializeApp(config);

//populates user input
var reservationData = {};

//Initialize Map
function initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 40.8054491, lng: -73.9654415},
		zoom: 8
});
	
};
/*
//display day selection menu when user clicks "select a day"
$('.dropbtn').on('click', function(e) {
	e.preventDefault();
	$('.dropdown-content').toggleClass("show");
});

//hides day selection when a day is selected
$('li').on('click', function(e) {
	e.preventDefault();
	$('.dropdown-content').toggleClass("show");
});
*/

$('form').on('submit', function(e) {
e.preventDefault();
var userInput = {
	name: $('#name').val(),
	day: $('#day').val()

};
var source = $('#currentReservations').html();
var template= Handlebars.compile(source);
var newListItemHTML = template(userInput);
$('#current-res').append(newListItemHTML)
});

