var tweet1 = new Tweet({
  text: 'Do you know the Muffin Man?',
  timeStamp: Date.now(),
  user: [
    {
      userName: 'pigsty',
      userEmail: 'pigsty@gmail.com',
      userPassword: '123pig',
      followees: ['msLady', 'lunaLove']
    }
  ]
});

tweet1.save();

var tweet2 = new Tweet({
  text: 'Thinking about how I can pass the time?',
  timeStamp: Date.now(),
  user: [
    {
      userName: 'lunaLove',
      userEmail: 'lunaLove@gmail.com',
      userPassword: '123luna',
      followees: ['msLady']
    }
  ]
});

tweet2.save();

var tweet3 = new Tweet({
  text: 'Nom nom nom... and then dream',
  timeStamp: Date.now(),
  user: [
    {
      userName: 'msLady',
      userEmail: 'msLady@gmail.com',
      userPassword: '123msLady',
      followees: ['pigsty']
    }
  ]
});

tweet3.save();

var tweet4 = new Tweet({
  text: 'Ding dong the witch is dead!',
  timeStamp: Date.now(),
  user: [
    {
      userName: 'msLady',
      userEmail: 'msLady@gmail.com',
      userPassword: '123msLady',
      followees: ['pigsty']
    }
  ]
});

tweet4.save();

var tweet5 = new Tweet({
  text: 'The ground was oh so soft... like clouds...',
  timeStamp: Date.now(),
  user: [
    {
      userName: 'trinkieSky',
      userEmail: 'trinkieSky@gmail.com',
      userPassword: '123trinkieSky',
      followees: ['msLady']
    }
  ]
});

tweet5.save();
