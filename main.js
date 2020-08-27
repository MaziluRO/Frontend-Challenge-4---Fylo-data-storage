var slider = document.getElementById("mySlider");
var output = document.getElementById("used-GB");
var remaining = document.getElementById("bubble-value");

output.innerHTML = slider.value;
remaining.innerHTML = 1000 - slider.value;
slider.oninput = function () {
  output.innerHTML = this.value;
  remaining.innerHTML = 1000 - this.value;
};
