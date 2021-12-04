import "../sass/main.scss";

import gsap from "gsap";
import generateRandomQuote from "./functions/generateRandomQuote";
import updateTime from "./functions/updateTime";
import setTimeDetails from "./functions/setTimeDetails";
import expandAnimation from "./functions/expandAnimation";
// import { data } from "autoprefixer";

// getting random quote ///////////////////////////////////////////////////////
const quotationText = document.querySelector(".quotation__text");
const quotationAuthor = document.querySelector(".quotation__author");
const replaceButton = document.querySelector(".replace-button");

generateRandomQuote(quotationText, quotationAuthor);

replaceButton.addEventListener("click", function () {
      if (this.classList.contains("spin")) return;

      generateRandomQuote(quotationText, quotationAuthor);
      this.classList.add("spin");
      setTimeout(() => {
            this.classList.remove("spin");
      }, 450);
});
///////////////////////////////////////////////////////////////////////////////

// gettin local time //////////////////////////////////////////////////////////
const clockDisplay = document.querySelector(".clock__displayTime");
updateTime(clockDisplay);

const location = document.querySelector(".clock__location");
const zoneShort = document.querySelector(".clock__zone");
const zone = document.querySelector("#timeZone");
const dayOfYear = document.querySelector("#dayOfYear");
const dayOfWeek = document.querySelector("#dayOfTheWeek");
const weekNumber = document.querySelector("#weekNumber");
setTimeDetails(location, zoneShort, zone, dayOfYear, dayOfWeek, weekNumber);
////////////////////////////////////////////////////////////////////////////////

// expand animatoin ////////////////////////////////////////////////////////////
const toggler = document.querySelector(".expand-button");
const togglerSpans = document.querySelectorAll(".expand-button__text span");
const upperSection = document.querySelector(".section-clock");
const lowerSection = document.querySelector("#details");
const quotation = document.querySelector(".quotation");
const details = document.querySelectorAll(".data-box__data");
const animation = expandAnimation(
      upperSection,
      lowerSection,
      quotation,
      details
);

toggler.addEventListener("click", () => {
      if (animation.isActive()) return;

      togglerSpans[0].setAttribute("aria-hidden", "true");
      togglerSpans[1].setAttribute("aria-hidden", "true");
      animation.reversed() ? animation.play() : animation.reverse();

      if (toggler.getAttribute("aria-pressed") === "false") {
            toggler.setAttribute("aria-pressed", "true");
            togglerSpans[1].setAttribute("aria-hidden", "false");
            quotation.setAttribute("aria-expanded", "false");

            return;
      }
      toggler.setAttribute("aria-pressed", "false");
      togglerSpans[0].setAttribute("aria-hidden", "false");
      quotation.setAttribute("aria-expanded", "true");
});
////////////////////////////////////////////////////////////////////////////////
