var list_el = document.querySelector(".list-element");
var list_el = document.querySelector(".list-elements");
var list1 = document.querySelector(".first-li");
var list2 = document.querySelector(".second-li");
var list3 = document.querySelector(".third-li");
var list4 = document.querySelector(".fourth-li");
var list5 = document.querySelector(".fifth-li");

var newList1 = document.querySelector(".new1-click");
var newList2 = document.querySelector(".new2-click");
var newList3 = document.querySelector(".new3-click");
var newList4 = document.querySelector(".new4-click");
var newList5 = document.querySelector(".new5-click");

var span_el = document.querySelector(".hide");
var span2_el = document.querySelector(".second-hide");
var span3_el = document.querySelector(".third-hide");
var span4_el = document.querySelector(".fourth-hide");
var span5_el = document.querySelector(".fifth-hide");

newList1.addEventListener("click", () => {
    span_el.classList.toggle("active")
})
newList2.addEventListener("click", () => {
    span2_el.classList.toggle("active1")
})
newList3.addEventListener("click", () => {
    span3_el.classList.toggle("active2")
})
newList4.addEventListener("click", () => {
    span4_el.classList.toggle("active3")
})
newList5.addEventListener("click", () => {
    span5_el.classList.toggle("active4")
})



list1.addEventListener("click", () => {
    span_el.classList.toggle("active")
})
list2.addEventListener("click", ()=> {
    span2_el.classList.toggle("active1")
})
list3.addEventListener("click", () => {
    span3_el.classList.toggle("active2")
})
list4.addEventListener("click", () => {
    span4_el.classList.toggle("active3")
})
list5.addEventListener("click", () => {
    span5_el.classList.toggle("active4")
})