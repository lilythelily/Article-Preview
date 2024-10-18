"use strict";

const arrow = document.querySelector(".arrow");
const shape = document.querySelector(".shape");
const body = document.querySelector("body");
const wrapper = document.querySelector(".wrapper2");

const arrow2 = document.querySelector(".arrow2");
const social = document.querySelector(".mobile-social");
const desc = document.querySelector(".description2");

arrow.addEventListener("click", function (e) {
  shape.classList.remove("hide");
  arrow.src = "images/new_arrow.svg";
});

body.addEventListener("keydown", function (key) {
  shape.classList.add("hide");
  arrow.src = "images/default_arrow.svg";
  wrapper.classList.remove("hidden");
  social.classList.add("hidden");
  arrow2.src = "images/default_arrow.svg";
  desc.style.borderBottomRightRadius = "20px";
  desc.style.borderBottomLeftRadius = "20px";
});

arrow2.addEventListener("click", function (e) {
  wrapper.classList.add("hidden");
  social.classList.remove("hidden");
  arrow2.src = "images/new_arrow.svg";
  desc.style.borderBottomRightRadius = "0px";
  desc.style.borderBottomLeftRadius = "0px";
});
