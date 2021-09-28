setInterval(function(){
	var date=new Date();
	var h=date.getHours();
	var m=date.getMinutes();
	var s=date.getSeconds();
	var hourDeg=30*h+m/2;
	var minDeg=6*m;
	var secDeg=6*s;


	var hour=document.querySelector("#hour")
	var minute=document.querySelector("#minute")
	var second=document.querySelector("#second")


	hour.style.transform="rotate("+hourDeg+"deg)";
	minute.style.transform="rotate("+minDeg+"deg)";
	second.style.transform="rotate("+secDeg+"deg)";


	document.querySelector("#divH").innerHTML=h;
	document.querySelector("#divM").innerHTML=m;
	document.querySelector("#divS").innerHTML=s;

},100)

var divs=document.querySelectorAll(".container div")
for(var i =0;i<divs.length;i++)
{
	divs[i].addEventListener("click",function(){
		this.classList.add("pressed");
		var btn=this;
		setTimeout(function() {btn.classList.remove("pressed");},300);
	})
}
 var myXML="<SubmissionDetails> <name>Gagan Walia</name> <rollNo>19124024</rollNo>"
			+"<branch>Information Technology</branch>"
			+" <group>G-1</group>"
			+"</SubmissionDetails>"

parser = new DOMParser();
xmlDoc = parser.parseFromString(myXML,"text/xml");

document.querySelector("#name").innerHTML="Name: "+xmlDoc.getElementsByTagName("name")[0].childNodes[0].nodeValue;
document.querySelector("#branch").innerHTML="Branch: "+xmlDoc.getElementsByTagName("branch")[0].childNodes[0].nodeValue;
document.querySelector("#rollNo").innerHTML="Roll No.: "+xmlDoc.getElementsByTagName("rollNo")[0].childNodes[0].nodeValue;
document.querySelector("#group").innerHTML="Group: "+xmlDoc.getElementsByTagName("group")[0].childNodes[0].nodeValue;