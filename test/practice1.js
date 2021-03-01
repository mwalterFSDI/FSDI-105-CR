// attributes
var links = document.getElementsByTagName('a');
console.log(links);
links[0].setAttribute('target','blank');
links[0].setAttribute('class','bordered');

// cereate html elements
var h1=document.createElement('h1');
console.log(h1);
var text=document.createTextNode("Hello world");
h1.appendChild(text);
console.log(h1);
var main=document.getElementById("main");
main.appendChild(h1);

//hide an element
//main.style.display="none";
//remove the element
//main.remove();

//challenge ***
//create an ul with three li
//
//append it to the main

//mortal level solution
var ul=document.createElement('ul');
var li1=document.createElement('li');
var text1 = document.createTextNode('Item 1');
li1.appendChild(text1);
ul.appendChild(li1);
var li2 =  document.createElement('li');
var text2 = document.createTextNode('Item 2');
li2.appendChild(text2);
ul.appendChild(li2);
var li3 =  document.createElement('li');
var text3 = document.createTextNode('Item 3');
li3.appendChild(text3);
ul.appendChild(li3);

main.appendChild(ul);

//immortal level solution
var ol=document.createElement("ol");
for(var i=1;i<=3;i++){
    var li = document.createElement('li');
    var text=document.createTextNode('Element'+i);
    li.appendChild(text);
    ol.appendChild(li);
}

main.appendChild(ol);