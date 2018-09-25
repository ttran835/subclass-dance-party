
// var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
//   var blinkyDancer = makeDancer(top, left, timeBetweenSteps); //inherite all props and methods from makeDancer

//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function

//   var oldStep = blinkyDancer.step;

//   blinkyDancer.step = function() {
//     // call the old version of step at the beginning of any call to this new version of step
//     oldStep();
//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//     blinkyDancer.$node.toggle();
//   };

//   return blinkyDancer;
// };

var makeBlinkyDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  
  this.step();
};

//step and position methods; 

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype); 
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function () {
  var oldStep = makeDancer.prototype.step.bind(this);
  oldStep();
  // console.log(this)
  // makeDancer.prototype.step();
  this.$node.fadeToggle();
};


// var test = new makeBlinkyDancer(); //this creates a copy of the obj ; 

