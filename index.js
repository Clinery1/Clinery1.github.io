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
