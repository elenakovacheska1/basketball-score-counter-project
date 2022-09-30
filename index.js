let homeScoreEl = document.getElementById("home-score");
let homeScore = parseInt(homeScoreEl.textContent);
let guestScoreEl = document.getElementById("guest-score");
let guestScore = parseInt(guestScoreEl.textContent);

function add(home, num) {
  if (home) {
    homeScoreEl.textContent = homeScore += num;
  } else {
    guestScoreEl.textContent = guestScore += num;
  }
  scoreCompare();
}

function scoreCompare() {
  homeScoreEl.style.boxShadow = "none";
  guestScoreEl.style.boxShadow = "none";
  if (homeScore > guestScore) {
    // home wins
    homeScoreEl.style.boxShadow = "0px 0px 10px white";
  } else if (homeScore === guestScore) {
    // tie
    homeScoreEl.style.boxShadow = "0px 0px 10px white";
    guestScoreEl.style.boxShadow = "0px 0px 10px white";
  } else {
    // guest wins
    guestScoreEl.style.boxShadow = "0px 0px 10px white";
  }
}
