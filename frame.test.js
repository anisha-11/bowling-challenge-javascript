const Frame = require('./frame');

describe('Frame', () => {
  it('calculates score when ball is rolled', () => {
    expect(new Frame(1,2).getTotalScore()).toBe(3);
  });

  it('true when roll_1 is a strike', () => {
    expect(new Frame(10,0).getStrike()).toBe(true);
  });

  it('false when roll_2 is a score of 10', () => {
    expect(new Frame(0,10).getStrike()).toBe(false);
  });

  it('true if there is a spare', () => {
    expect(new Frame(1,9).getSpare()).toBe(true);
  });

  it('false if there is not a spare', () => {
    expect(new Frame(1,1).getSpare()).toBe(false);
  });
})