// table.js: your State Table, in code.
//
// Copy your paper table in here row for row. Nothing else in the starter needs to
// change for a new state to work: sense.js applies these rules, fake-sense.js uses
// the names, piece.js reads the result.
//
// signals: the numbers your sensing writes, each 0 to 1. Each partner owns one.
// states:  checked top to bottom; the first row whose rule is true wins.
//          hold is in seconds: how long a rule has to stay true before the state
//          changes. Without it the piece flickers between two words.
//          Keep "nobody" last, so it catches everything the other rows miss.

window.TABLE = {
  signals: ['present', 'open', 'smile'],

  states: [
    { name: 'smile', when: s => s.present > 0.5 && s.smile > 0.5, hold: 0.5 },
    { name: 'open',  when: s => s.present > 0.5 && s.open > 0.4, hold: 0.5 },
    { name: 'here',  when: s => s.present > 0.5,                 hold: 1 },
    { name: 'nobody', when: s => s.present < 0.2,                 hold: 2 },
  ],
};
