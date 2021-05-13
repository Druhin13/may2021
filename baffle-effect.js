const text1 = baffle(".data1");
const text2 = baffle(".data2");
const text3 = baffle(".data3");
const text4 = baffle(".data4");
const text5 = baffle(".data5");
const text6 = baffle(".data6");
const text7 = baffle(".data7");
const text8 = baffle(".data8");
const text9 = baffle(".data9");

text1.set({characters:'WORKS',speed:120});
text2.set({characters:'CONTACT',speed:120});
text3.set({characters:'CONTACT@DRUH.IN',speed:120});
text4.set({characters:'DRIBBBLE',speed:120});
text5.set({characters:'BEHANCE',speed:120});
text6.set({characters:'TWITTER',speed:120});
text7.set({characters:'LINKEDIN',speed:120});
text8.set({characters:'GITHUB',speed:120});
text9.set({characters:'CHECK MY CV',speed:120});

$(document).ready(function(){
$("#work-link").on("mouseover",function(){text1.start();text1.reveal(1500);});});
$(document).ready(function(){
$("#contact-link").on("mouseover",function(){text2.start();text2.reveal(1500);});});
$(document).ready(function(){
$("#mail-link").on("mouseover",function(){text3.start();text3.reveal(1500);});});
$(document).ready(function(){
$("#dribbble-link").on("mouseover",function(){text4.start();text4.reveal(1500);});});
$(document).ready(function(){
$("#behance-link").on("mouseover",function(){text5.start();text5.reveal(1500);});});
$(document).ready(function(){
$("#twitter-link").on("mouseover",function(){text6.start();text6.reveal(1500);});});
$(document).ready(function(){
$("#linkedin-link").on("mouseover",function(){text7.start();text7.reveal(1500);});});
$(document).ready(function(){
$("#github-link").on("mouseover",function(){text8.start();text8.reveal(1500);});});
$(document).ready(function(){
$("#cv-link").on("mouseover",function(){text9.start();text9.reveal(1500);});});
