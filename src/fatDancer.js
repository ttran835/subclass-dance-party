var fatDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  
  this.step();
};

//step and position methods; 

fatDancer.prototype = Object.create(makeDancer.prototype); 
fatDancer.prototype.constructor = fatDancer;

fatDancer.prototype.step = function () {
  var oldStep = makeDancer.prototype.step.bind(this);
  oldStep();

  //random color
  var getRandomColor = function() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  this.$node.css('border-color', getRandomColor());
  this.$node.css('height', '100px');
  this.$node.css('width', '100px');
  this.$node.css('background-color', getRandomColor());
};

