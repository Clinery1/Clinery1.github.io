// Copyright © 2021 Christopher Nguyen clinery8237@gmail.com
// At the time of writing, the only thing here is the dropdown functionality. This is really a great idea (in my opinion), and won't be changed unless I become aware of a better idea.


var projectsVisibility=false;
var globalList;


function showItemList(elem,list) {
    if (elem.listVisibility) {
        let listElem=elem.firstElementChild;
        let text=listElem.innerHTML;
        listElem.innerHTML="▸"+text.substring(1);
        elem.listVisibility=false;
        list.style.fontSize="";
    } else {
        let listElem=elem.firstElementChild;
        let text=listElem.innerHTML;
        listElem.innerHTML="▾"+text.substring(1);
        elem.listVisibility=true;
        list.style.fontSize="medium";
    }
}
