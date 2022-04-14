const { test, expect } = require("@jest/globals");
const { hands, player1, player2, playRound } = require("../rockPaperScissors.js");

// -  'toBe()' OR 'toEqual()'
test('handsArray', () => {
        expect(hands).toEqual(['rock' , 'paper', 'scissors']);
  });



// -  'toHaveLength()'
  test('player1Name', () => {
    expect(player1.name).toHaveLength(3);
});



// - 'toBeTruthy()'
test('player2Name', () => {
    expect(player2.name).toBeTruthy();
});


//-  'toHaveBeenCalled()'
const multi = jest.fn(() => 21);

test('multi',()=>{
    expect(multi(7,3)).toBe(21)
    expect(multi).toHaveBeenCalled();
});



//  -  'toHaveReturned()'
test('returns true', () => {
    const returnsTrue = jest.fn(() => false);
        returnsTrue();
      expect(returnsTrue).toHaveReturned();
  });