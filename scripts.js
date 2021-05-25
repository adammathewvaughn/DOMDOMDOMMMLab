document.addEventListener("DOMContentLoaded", function () {
  let button = document.createElement("button");
  button.innerText = "Add a Square";
  document.body.appendChild(button);
  button.className= "button";
  let colorSelection = ["red", "pink", "orange", "aqua", "cyan", "magenta", "yellow", "green", "blue", "purple", "maroon", "gold"];
  let squareCounter = 1;
  
  let squareContainer = document.createElement("div");
  squareContainer.className = "container";
  document.body.appendChild(squareContainer);
  
  button.addEventListener("click", function () {
    let div = document.createElement("div");
    div.className = "square";
    div.id = squareCounter++;
    
    div.addEventListener("click", function () {
      div.style.backgroundColor = changeColors(div);
    });
    
    div.addEventListener("dblclick", function () {
      if (div.id % 2 === 0) {
        if (div.nextElementSibling) {
          div.nextElementSibling.remove();
        } else {
          alert("There is no element to remove!");
        }
      } else {
        if (div.previousElementSibling) {
          div.previousElementSibling.remove();
        } else {
          alert("There is no element to remove!");
        }
      }
      
      squareCounter = squareContainer.children.length;
    });
    
    let h3 = document.createElement("h3");
          h3.className = "displayIdNumber";
          h3.innerText = div.id;
          div.appendChild(h3);
          
          squareContainer.appendChild(div);
        });
        
        function changeColors(div) {
          let changeNumbers = Math.ceil((Math.random() * colorSelection.length));
          div.style.backgroundColor = colorSelection[changeNumbers];
        }
        
        
  /*function generateRandomColor()
  {
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
    //random color will be freshly served
  }
  document.body.style.backgroundColor = generateRandomColor() 
  someDiv.style.color = generateRandomColor()*/
  


});