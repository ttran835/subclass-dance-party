

var squareColorDancers = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  // this.$node = ('<span class="squareCol"></span>')
  this.step();
};

//step and position methods; 

squareColorDancers.prototype = Object.create(makeDancer.prototype); 
squareColorDancers.prototype.constructor = squareColorDancers;

squareColorDancers.prototype.step = function () {
  var oldStep = makeDancer.prototype.step.bind(this);
  oldStep();
  
  var getRandomColor = function() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // console.log(this)
  // makeDancer.prototype.step();
  this.$node.css('border-radius', '0px');
  this.$node.css('border-color', getRandomColor());
};






