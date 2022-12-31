document.write(`\
<script>\
function navbar_hamburger_change(x, y) {\
  x.classList.toggle("change");\
  y.classList.toggle("change");\
}\
</script>\
<nav id="navbar">\
	<a href="../index.html">Home</a>\
	<a href="../html/resume.html">Resume</a>\
	<div class="hamburger" onclick="navbar_hamburger_change(this,document.getElementById('navbar'))">\
		<div class="bar1"></div>\
		<div class="bar2"></div>\
		<div class="bar3"></div>\
	</div>\
</nav>\
`);