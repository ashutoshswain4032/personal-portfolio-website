
var a=document.querySelector(".download");
var b=document.querySelector(".skills");
var c=document.querySelector(".exp");
var d=document.querySelector(".edu");
var e=document.querySelector(".ser");
var f=document.querySelector(".abt");
var g=document.querySelector(".cnt");

a.addEventListener("click",()=>{
    window.open("https://drive.google.com/file/d/1Ke2JPuH-SwOapwO73s0opyJa9qB233Kn/view?usp=drive_link");
});


b.addEventListener("click",()=>{
    document.querySelector(".see").innerHTML="Core Java | HTML | CSS | JavaScript | MySQL <br> Git | SpringBoot | JQuery  | JDBC | Hibernate | Bootstarp";
    b.classList.add("cls");
    c.classList.remove("cls");
    d.classList.remove("cls");
});

c.addEventListener("click",()=>{
    document.querySelector(".see").innerHTML="I am a fresher.But, I have done a project named student attendance System  using SpringMVC,Bootstarp and MySQL.Other project is To-Do-List using HTML,CSS,EJS and NodeJS.";
    b.classList.remove("cls");
    c.classList.add("cls");
    d.classList.remove("cls");
});

d.addEventListener("click",()=>{
    document.querySelector(".see").innerHTML="* 10th from Panchayat High School, Bilikana with 72.5%.<br>* 12th from Shanti Institute of management and Studies, Cuttack with 80%.<br>* BSc. in  Mathematics from Kendrapara Autonomous College with CGPA 8.90 .<br>* Masters in Computer Application from Ravenshaw University, Cuttack with CGPA 9.0 .";
    d.classList.add("cls");
    b.classList.remove("cls");
    c.classList.remove("cls");
});
e.addEventListener("click",()=>{
    let e = document.querySelector(".services");
    e.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
      inline: 'start'
    });
});
f.addEventListener("click",()=>{
    let e = document.querySelector(".cards");
    e.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
      inline: 'start'
    });
});
g.addEventListener("click",()=>{
    let e = document.querySelector(".footer");
    e.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
      inline: 'start'
    });
});
