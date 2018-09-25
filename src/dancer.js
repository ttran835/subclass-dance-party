// Creates and returns a new dancer object that can step
// var makeDancer = function(top, left, timeBetweenSteps) {
// // this.setPosition(top,left) = 
  

//   var dancer = {};

//   // use jQuery to create an HTML <span> tag
//   dancer.$node = $('<span class="dancer"></span>');

//   dancer.step = function() {
//     // the basic dancer doesn't do anything interesting at all on each step,
//     // it just schedules the next step
//     setTimeout(dancer.step, timeBetweenSteps);
//   };
//   dancer.step();

//   dancer.setPosition = function(top, left) {
//     // Use css top and left properties to position our <span> tag
//     // where it belongs on the page. See http://api.jquery.com/css/
//     //
//     var styleSettings = {
//       top: top,
//       left: left
//     };
//     dancer.$node.css(styleSettings);
//   };

//   // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
//   // this one sets the position to some random default point within the body
//   dancer.setPosition(top, left);

//   return dancer;
// };


// var dancer1 = makeDancer(5, 6, 1000);

/*
PsuedoClassical
*/

var makeDancer = function (top, left, timeBetweenSteps) {
  // this.$node = $('<span class="squareDancer"></span>')
  this.timeBetweenSteps = timeBetweenSteps; 
  this.$node = $('<span class="dancer"></span>');
  this.step();
  // this.step(timeBetweenSteps);
  this.setPosition(top, left);
  //invoked this.step after new makeDancer() is created; 
};

makeDancer.prototype.step = function (timeBetweenSteps) {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function (top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};  

makeDancer.prototype.lineUp = function () {
  var styleSettings = {
    left: 0
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.moveAway = function () {
  var styleSettings = {
    top: Math.random() * 300,
    left: Math.random() * 300
  }; 
  this.$node.animate(styleSettings);
};

makeDancer.prototype.getSmol = function () { 
  var styleSettings = {
    height: '20px',
    width: '20px'
  };
  this.$node.css(styleSettings);
  
};

