var quates = [
  {
    quate: "“Be yourself; everyone else is already taken.”",
    auther: "-- Oscar Wilde",
  },
  {
    quate:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    auther: "-- Albert Einstein",
  },
  {
    quate:
      "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    auther: "-- Bernard M. Baruch",
  },
  {
    quate:
      "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
    auther: "-- Dr. Seuss",
  },
  {
    quate:
      "“In three words I can sum up everything I've learned about life: it goes on.”",
    auther: "-- Robert Frost",
  },
];

function genrateNewQuate() {
  var randdomQuates = Math.floor(Math.random() * quates.length);
  document.getElementById("quatee").innerHTML = quates[randdomQuates].quate;
  document.getElementById("auther").innerHTML = quates[randdomQuates].auther;
}
