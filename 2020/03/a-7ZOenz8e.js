const source=new EventSource("/events");source.addEventListener("log",function(a){const b=document.getElementById("log");let c="";a.data.startsWith("\x1B[1;31m")?c="e":a.data.startsWith("\x1B[0;33m")?c="w":a.data.startsWith("\x1B[0;32m")?c="i":a.data.startsWith("\x1B[0;35m")?c="c":a.data.startsWith("\x1B[0;36m")?c="d":a.data.startsWith("\x1B[0;37m")?c="v":b.innerHTML+=a.data+"\n",b.innerHTML+="<span class=\""+c+"\">"+a.data.substr(7,a.data.length-10)+"</span>\n"}),source.addEventListener("state",function(a){const b=JSON.parse(a.data);document.getElementById(b.id).children[1].innerText=b.state});const states=document.getElementById("states");for(let a,b=0;a=states.rows[b];b++)a.classList.contains("switch")&&function(b){a.children[2].children[0].addEventListener("click",function(){const a=new XMLHttpRequest;a.open("POST","/switch/"+b.substr(7)+"/toggle",!0),a.send()})}(a.id),a.classList.contains("fan")&&function(b){a.children[2].children[0].addEventListener("click",function(){const a=new XMLHttpRequest;a.open("POST","/fan/"+b.substr(4)+"/toggle",!0),a.send()})}(a.id),a.classList.contains("light")&&function(b){a.children[2].children[0].addEventListener("click",function(){const a=new XMLHttpRequest;a.open("POST","/light/"+b.substr(6)+"/toggle",!0),a.send()})}(a.id);