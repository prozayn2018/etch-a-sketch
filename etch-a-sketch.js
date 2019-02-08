
function resetTitle(){

// mouseover for title color change
function mouse() {

const mouseover = document.querySelector('#title');
mouseover.addEventListener("mouseover", function(){
  document.querySelector('#title').style.color = 'yellow';
})

const mouseout = document.querySelector('#title');
mouseout.addEventListener("mouseout", function(){
  document.querySelector('#title').style.color = 'white';
})

}

mouse()

//connected to reset button
function resetbtn(){
const btn = document.querySelector('#resetbtn');
btn.addEventListener('click', function(){
  const griditem = document.querySelectorAll("div.grid-item").forEach(function(e){
      e.style.backgroundColor = 'white';
    });
  });
 }
resetbtn()

}

resetTitle()



// change grid-row & column size
//get's user input
function userinput(){

   const btn = document.querySelector('#switchbtn');
   btn.addEventListener('click', function(){

     // global variables
    userPrompt = prompt("Enter a number from 1 to 68 to change game area cell size: ");
    if(userPrompt > 0 && userPrompt < 68){

// changes row & column value
// jQuery $('div.grid-container').css("grid-template-rows" , "");

  function rowColumn(){
    const grid = document.querySelector('#container');
    grid.style.gridTemplateRows = 'repeat(' + userPrompt + ',' + 'auto)';
    grid.style.gridTemplateColumns = 'repeat(' + userPrompt + ',' + 'auto)';
  };
  rowColumn()

//counts total grid items

  function userEntry(){

  x = countDivitems();

  if(x < userPrompt * userPrompt){
    for(let i = 0; i < userPrompt * userPrompt - x; i++){
      const container = document.querySelector('#container');
      const gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");
      gridItem.id = "gridelem";
      container.append(gridItem)
      y = griditem()
      gridItem.setAttribute("style",y);
      newX = countDivitems();
      };
      console.log(x);
      console.log(newX);
  }else if(x >= userPrompt * userPrompt){
    for(let i = 0; i < x - userPrompt * userPrompt; i++){
      const gridItem = document.querySelector('#gridelem');
      gridItem.remove();
      y = griditem()
      gridItem.setAttribute("style",y);
    };
   };
  };
  userEntry()
      }else{
      console.log("Enter number greater than 1 and less than 68 please!")
   };
  });
 };
userinput()


// total grid items number
  function countDivitems(){
    var x = document.querySelectorAll("div.grid-item").length
    return x
  }
  countDivitems()


// function that changes each grid element to random color
function griditem(){

  // random color
  function randomColor() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var Color = "rgb(" + x + "," + y + "," + z + ")";
    return Color;

  };
  randomColor()
  // creates a node list of all grid items
  // (e) is a object handler, in other words at each nodelist
  // e is that specific object
  function allGridItems(){
  const griditem = document.querySelectorAll("div.grid-item").forEach(function(e){
    e.addEventListener("mouseover", function(){
    var y =  e.style.backgroundColor = randomColor();
    return y;
    });
   });
 };
 return allGridItems()
};
 griditem()
