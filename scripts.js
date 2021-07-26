// Write your JavaScript code here.
// Remember to pay attention to page loading!
//Use the window load event to ensure all elements have loaded before attaching event handlers.
let topTracker = 0;
let leftTracker = 0;

window.addEventListener('load', function(){
    console.log("its loaded!!");

//When the "Take off" button is clicked, the following should happen:
//A window confirm should let the user know "Confirm that the shuttle is ready for takeoff.
//" If the shuttle is ready for liftoff, then add parts b-d.
    let takeOffBtn = this.document.getElementById('takeoff')
    takeOffBtn.addEventListener('click', function () {
    let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
    if(response) {
    //add parts b-d
    //b. The flight status should change to "Shuttle in flight."
    //c. The background color of the shuttle flight screen (id = "shuttleBackground") should change from green to blue.
    //d. The shuttle height should increase by 10,000 miles.

    document.getElementById('flightStatus').innerText = "Shuttle in flight.";
    document.getElementById('shuttleBackground').setAttribute('style', 'background-color: blue;');
    document.getElementById('spaceShuttleHeight').innerText = '10000';
    }
    });
// When the "Land" button is clicked, the following should happen:
// a. A window alert should let the user know "The shuttle is landing. Landing gear engaged."
// b. The flight status should change to "The shuttle has landed."
// c. The background color of the shuttle flight screen should change from blue to green.
// d. The shuttle height should go down to 0.
   document.getElementById('landing').addEventListener('click', function() {
    window.alert("The shuttle is landing. Landing gear engaged.");
    document.getElementById('flightStatus').innerText = "The shuttle has landed.";
    document.getElementById('shuttleBackground').setAttribute('style', 'background-color: green;');
    document.getElementById('spaceShuttleHeight').innerText = '0';
    
    rocket.setAttribute("style", "top: 0px; left: 0px; position: relative");
   });
//When the "Abort Mission" button is clicked, the following should happen:
// a. A window confirm should let the user know "Confirm that you want to abort the mission." If the user 
//     wants to abort the mission, then add parts b-d.
// b. The flight status should change to "Mission aborted."
// c. The background color of the shuttle flight screen should change from blue to green.
// d. The shuttle height should go to 0.  
  document.getElementById('missionAbort').addEventListener('click', function() {
    let response = window.confirm("Confirm that you want to abort the mission.");
    if(response) {
     document.getElementById('flightStatus').innerText = "Mission aborted.";
    document.getElementById('shuttleBackground').setAttribute('style', 'background-color: green;');
    document.getElementById('spaceShuttleHeight').innerText = '0';

    rocket.setAttribute("style", "top: 0px; left: 0px; position: relative");
   }
});

// When the "Up", "Down", "Right", and "Left" buttons are clicked, the following should happen:
// a. The rocket image should move 10 px in the direction of the button that was clicked.
// b. If the "Up" or "Down" buttons were clicked, then the shuttle height should increase or decrease by 10,000 miles.

    document.getElementById('up').addEventListener('click', function() {

        if(topTracker - 10 < 0) return;

        let myHeight = document.getElementById('spaceShuttleHeight').innerText;
        myHeight = Number(myHeight) + 10000;
        document.getElementById('spaceShuttleHeight').innerText = myHeight;

        let rocket = document.getElementById('rocket');
        topTracker = topTracker - 10;
        rocket.setAttribute("style", "top: " + topTracker + "px; position: relative");
    });

    document.getElementById('down').addEventListener('click', function() {

        let container = document.getElementById('shuttleBackground');
        let rocket = document.getElementById('rocket');
        console.log(container.offsetHeight - rocket.height);

        if(topTracker + 10 > container.offsetHeight - rocket.height) return;

        let myHeight = document.getElementById('spaceShuttleHeight').innerText;
        myHeight =Number(myHeight) - 10000;
        document.getElementById('spaceShuttleHeight').innerText = myHeight;

        topTracker = topTracker + 10;
        rocket.setAttribute("style", "top: " + topTracker + "px; left: " +leftTracker + "px; position: relative");
    });

    document.getElementById('left').addEventListener('click', function() {
        let container = document.getElementById('shuttleBackground');
        if(leftTracker - 10 < (-1 * (container.offsetLeft) / 2) ) return;

        let rocket = document.getElementById('rocket');
        leftTracker = leftTracker - 10;
        rocket.setAttribute("style", "top: " + topTracker + "px; left: " +leftTracker + "px; position: relative");
    });

    document.getElementById('right').addEventListener('click', function() {
        let container = document.getElementById('shuttleBackground');
        if(leftTracker + 10 > (container.offsetLeft) / 2 ) return;

        let rocket = document.getElementById('rocket');
        leftTracker = leftTracker + 10;
        rocket.setAttribute("style", "top: " + topTracker + "px; left: " +leftTracker + "px; position: relative");
    });
//bonus
//Keep the rocket from flying off of the background.
//Return the rocket to its original position on the background when it has been landed or the mission was aborted.

});
