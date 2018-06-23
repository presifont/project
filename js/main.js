
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

//
var reservationData = {};

//Initialize Map
function initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 40.8054491, lng: -73.9654415},
		zoom: 8
});
	
};

