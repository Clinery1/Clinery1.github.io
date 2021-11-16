// Copyright © 2021 Christopher Nguyen clinery8237@gmail.com
// hint: `window.location.search` is for the `?wasd=whatever` part of a URL
// hint: `window.location.hash` is for the `#thingHere` part of a URL


var HTTP=new XMLHttpRequest();
HTTP.onreadystatechange=function() {
    if (this.readyState==4&&this.status==200) {
        INDEX=JSON.parse(this.responseText);
        console.log("Blog index found and parsed");
        updateBlogIndex();
    }
    if (this.status==404) {
        posts.innerHTML="<h3>The blog index file was not found. Please file an issue <a href=\"https://github.com/Clinery1/Clinery1.github.io/issues\">here</a></h3>";
        console.log("Blog index not found");
    }
};
HTTP.open("GET","posts/index.json",true);
HTTP.send();
console.log("Loading blog index...");
var JSON_READY=false;
// page object example:
// {
//     page:"example.html",
//     title:"Example Post",
//     created:"MM/DD/YYYY@HH:MM"  // HH is 24hr
//     edited:"MM/DD/YYYY@HH:MM"  // HH is 24hr
// }
var INDEX=[];
var PAGE=0;
var VALUES_PER_PAGE=10;


function itemsPerPageUpdate() {
    VALUES_PER_PAGE=Number(blogItemsPerPage.value);
    displayPage();
}
function updateBlogIndex() {
    console.log(INDEX);
    displayPage();
}
function nextPage() {
    if (PAGE<INDEX.length) {
        PAGE+=1;
        displayPage();
    }
}
function prevPage() {
    if (PAGE>0) {
        PAGE-=1;
        displayPage();
    }
}
function displayPage() {
    let data="<h3>Page "+String(PAGE)+"</h3>";
    let index=PAGE*VALUES_PER_PAGE;
    for (var i=index;i<index+VALUES_PER_PAGE&&i<INDEX.length;i+=1) {
        let name=INDEX[i].page_path;
        let title=INDEX[i].title
        let creation_date=INDEX[i].creation_date;
        data+="<a href=\""+name+"\">"+title+" ("+creation_date+")</a><br>";
    }
    if (index>0) {
        data+="<button onclick=\"prevPage()\">Previous page</button>";
    } else {
        data+="<button onclick=\"prevPage()\" disabled>Previous page</button>";
    }
    if (index+VALUES_PER_PAGE<INDEX.length-1) {
        data+="<button onclick=\"nextPage()\">Next page</button>";
    } else {
        data+="<button onclick=\"nextPage()\" disabled>Next page</button>";
    }
    posts.innerHTML=data;
}
