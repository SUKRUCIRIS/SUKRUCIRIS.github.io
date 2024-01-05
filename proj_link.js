var link_number = 16;
var urls = [];

function getWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}

const proj_link = () => {
  if (getWidth() < 700) {
    for (var i = 1; i < link_number + 1; i++) {
      var idx = "pl" + i.toString();
      var elx = document.getElementById(idx);
      elx.outerHTML =
        `<button id="pl` +
        i.toString() +
        `" onclick="location.href='` +
        urls[i] +
        `'" type="button" class="proj_link" >Open Link</button>`;
    }
  } else {
    for (var i = 1; i < link_number + 1; i++) {
      var idx = "pl" + i.toString();
      var elx = document.getElementById(idx);
      elx.outerHTML =
        `<a id="pl` +
        i.toString() +
        `" href="` +
        urls[i] +
        `">` +
        urls[i] +
        `</a>`;
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  for (var i = 1; i < link_number + 1; i++) {
    var idx = "pl" + i.toString();
    var elx = document.getElementById(idx);
    urls[i] = elx.innerHTML;
  }
});

document.addEventListener("DOMContentLoaded", proj_link);
window.addEventListener("resize", proj_link);
