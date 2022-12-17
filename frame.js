class Frame {
  constructor(one,two) {
    this.one = one;
    this.two = two;
  };

  getTotalScore() {
    return (this.one + this.two);
  };

  getStrike() {
    if (this.one === 10) {
      return true
    } else if (this.two === 10){
      return false
    };
  };

  getSpare() {
    if (this.one + this.two === 10) {
      return true 
    } else {
      return false 
    };
  };
}    

module.exports = Frame;