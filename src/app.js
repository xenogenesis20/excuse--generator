/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  var who = ["The dog ", "My lion ", "His turtle ", "My bird ", "My wife "];
  var action = ["ate ", "peed ", "crushed ", "broke ", "Turned off "];
  var what = ["my homework ", "the keys ", "the car ", "My computer "];
  var when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying",
    "In the middle of a game"
  ];
  var animal = who[this.Math.floor(Math.random() * who.length)];
  var verb = action[this.Math.floor(Math.random() * action.length)];
  var thing = what[this.Math.floor(Math.random() * what.length)];
  var time = when[this.Math.floor(Math.random() * when.length)];

  var theExcuse = animal + verb + thing + time;

  var pExcuse = (document.getElementById("excuse").innerText = `${theExcuse}`);

  //   function refreshPage() {
  //     window.location.reload();
  //   }
};
