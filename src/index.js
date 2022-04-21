const stars = document.getElementsByClassName("starpackage-rating");
const results = document.getElementsByClassName("result");

for (var i = 0; i < stars.length; i++) {
  stars[i].starValue = i + 1;
  stars[i].addEventListener("click", countValue);
}
function countValue() {
  let value = this.starValue;
  results[0].innerText = "My rating is" + " " + value;
  for (let i = 0; i < stars.length; i++) {
    let s = stars[i];

    if (value > i) {
      s.classList.add("over");
    } else {
      s.classList.remove("over");
    }
  }
}
