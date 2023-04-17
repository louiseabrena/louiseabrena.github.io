window.onload = function () {
  // loading form
  var checkinForm = document.forms.checkintime;
  checkinForm.onsubmit = submitCheckin;

  // variables
  var checkinbutton = document.getElementById("checkinbutton");
  var summarybutton = document.getElementById("summaryButton");
  var checkin = document.getElementById("checkin");
  var checkinquestions = document.getElementById("checkinquestions");
  var summary1 = document.getElementById("summary1");
  var summary2 = document.getElementById("summary2");

  //form id
  var questions1 = checkinForm.questions1;
  var questions2 = checkinForm.questions2;
  var questions3 = checkinForm.questions3;
  var skip = checkinForm.skip;

  // variables for results
  var sleep = document.getElementById("result_sleep");
  var emotions = document.getElementById("result_emotions");
  var note = document.getElementById("result_note");

  function checkinIntro() {
    checkin.style.display = "none";
    checkinquestions.style.display = "block";
  }
  checkinbutton.onclick = checkinIntro;

  function skipquestions() {
    checkinquestions.style.display = "none";
    summary1.style.display = "block";
  }
  skip.onclick = skipquestions;

  // function for each questions
  function submitCheckin() {
    checkinForm.style.display = "none";
    summary1.style.display = "block";

    // show all results
    sleep.innerHTML = questions1.value;
    emotions.innerHTML = questions2.value;
    note.innerHTML = questions3.value;

    return false;
  } // end of function

  // show the whole summary
  function summaryCheckin() {
    summary1.style.display = "none";
    summary2.style.display = "block";
  }
  summarybutton.onclick = summaryCheckin;
};
