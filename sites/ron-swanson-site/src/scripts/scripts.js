import $ from "jquery";
import "../styles/styles.css";
import "./slick/slick";
import "./jquery/dist/jquery.js";
$(document).ready(function () {
  $(".slides").slick({
    accessibility: true,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    speed: 700,
  });
});
