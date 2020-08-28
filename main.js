var slider = document.getElementById("mySlider");
var output = document.getElementById("used-GB");
var remaining = document.getElementById("bubble-value");
var selector = document.getElementById("selector-button");
var progress = document.getElementById("progress-bar");

output.innerHTML = slider.value;
remaining.innerHTML = 1000 - slider.value;
slider.oninput = function () {
  selector.style.left = this.value / 10 + "%";
  output.innerHTML = this.value;
  remaining.innerHTML = 1000 - this.value;
  progress.style.width = this.value / 10 + "%";
};
