newsPerPage = 5;

document.addEventListener("DOMContentLoaded", function() {
  insertPage();
  pageClick(1);
});

function insertPage() {
  var navbar = document.getElementById("pagenav");
  var pages = Math.ceil(news.length / newsPerPage);

  for (i = 1; i <= pages; i++) {
    // Create a link element and set its properties
    var link = document.createElement("a");
    link.text = i;
    link.href = "#";
    // Attach a click listener, not in an eval() way
    link.addEventListener("click", clickHandler(i));
    // Add it to the container
    navbar.appendChild(link);
    navbar.appendChild(document.createTextNode(" "))
  }
}

// A function that returns the appropriate click handler
// Needed to avoid closure-in-a-loop problem: http://stackoverflow.com/q/750486/
function clickHandler(i) {
  return function() {
    pageClick(i);
  };
}

function pageClick(page) {
  var container = document.getElementById("content");
  clearChildren(container);
  for (i = (page - 1) * newsPerPage + 1; i <= (page * newsPerPage) && i <= news.length; i++) {
    var element = document.createElement("div");
    // There's hardly a way around innerHTML if we're parsing a raw HTML string - but we're not adding
    element.innerHTML = news[news.length - i];
    container.appendChild(element);
  }
}

// Clear a node, DOM manipulation way
function clearChildren(parent) {
  while (parent.hasChildNodes()) {
    parent.removeChild(parent.firstChild);
  }
  // Also possible to do just
  //   parent.innerHTML = ""
  // but we're trying to avoid innerHTML as much as possible
}