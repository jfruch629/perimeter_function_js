let perimeter = (length,width) => {
  return length * 2 + width * 2;
}

let mainDiv = document.getElementById("main");
mainDiv.innerHTML = perimeter(3,5);
