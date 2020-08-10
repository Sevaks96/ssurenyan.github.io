document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, );
  });

document.onscroll = function() {myFunction()};
function myFunction() {

    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    	document.getElementById("exp").className = "experience";
        document.getElementById("skill").className = "skills";
        setTimeout(function(){
	        document.getElementById("line").className = "slideDown";
    	},1000)
    }
    if(document.body.scrollTop > 800 || document.documentElement.scrollTop > 400){
   	    document.getElementById("port").className = "portfolio";
   	    document.getElementById("con").className = "contact";
    }
}

var i = 0;
var txt = "Hello, I am Sevak Surenyan, a health and safety professional from Goris/Armenia, I was born in 1996. I studied and graduated from high school. Then studied and graduated from Goris State University, the profession ''electrical engineer''. Also, I successfully passed the exam of ‘’IOSH  Managing Safely’’ course on 30 July of 2020." ;
var speedTypeWriter = 50;
typeWriter();

function typeWriter() {
  if (i < txt.length){
    document.getElementById("about").textContent += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speedTypeWriter);
  }
}
