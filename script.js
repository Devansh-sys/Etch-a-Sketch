

document.addEventListener("DOMContentLoaded", () => {
  const buttonTOChoose = document.querySelector("#choosing_button");
  let Sqrs;
  buttonTOChoose.addEventListener("click", () => {
    Sqrs = prompt("How many squares do you want each side!?", 16);

    if(Sqrs > 100 || Sqrs===null){
      alert("cannot choose greater than 100 or null !! Setting size to 16(default)");
      Sqrs = 16;
    }

    const prev_grid_container = document.querySelector('.grid_Container');

    //taking prevOpacity of grid not the grid container to ensure full opacity after 10 interactions 
    const prev_grids = document.querySelector('.grid_item');
    
    //below removing previous container
    if(prev_grid_container !== null){
      prev_grid_container.remove();
    }

    const gridContainer = document.createElement("div");
    gridContainer.setAttribute("class", "grid_Container");
 
      //Type Coercion: JavaScript implicitly converts null to a number before performing arithmetic operations. When you multiply two null values, JavaScript coerces each null to 0.
    // Thus, null * null becomes 0 * 0, which equals 0.
    console.log("total squares is",Sqrs * Sqrs);
    let prevOpacity = 0.0001;
   
    for (let i = 1; i <= Sqrs * Sqrs; i++) {
      const grid_box = document.createElement("div");

      grid_box.setAttribute("class", "grid_item");
      
      
      grid_box.style.cssText = `width:${600 / Sqrs}px;height:${600 / Sqrs}px;border:0.3px solid black`;
      
      let presentOpacity;
      grid_box.addEventListener('mouseenter',()=>{
        

        if(prevOpacity < 1){
          presentOpacity = parseFloat(prevOpacity)+0.1;
        }else{
          presentOpacity = 0;
        }
        console.log("opacity presently is ",presentOpacity);
        //feature added of randomizing the sqr color on every interaction
        const color = getRandomColor();
        console.log("Random color is",color);
        grid_box.style.backgroundColor = `${color}`;
        grid_box.style.opacity = `${presentOpacity}`;

        let computedStyle = window.getComputedStyle(grid_box);
        prevOpacity = computedStyle.opacity;
        console.log("prev opacity is ",prevOpacity);
        }
      );
      

      gridContainer.appendChild(grid_box);
    }

    const body_container = document.querySelector("body");
    body_container.appendChild(gridContainer);
  });

  function getRandomColor(){

//     it is giving me the output undefined at 15 

// The issue arises because the string letter = "123456789ABCDEF" only contains 15 characters, indexed from 0 to 14. However, you're using Math.random() * 16 to generate a random index, which can sometimes generate 15 (out of the valid range for your string). This causes an undefined value to be returned.

// Fix
// You need to update the letter string to include a complete hexadecimal range, which should be "0123456789ABCDEF" (note the added 0 at the beginning).


    const letter = "0123456789ABCDEF";
    let color = '#';
    for(let i=0;i<6;i++){
      const randomIndex = Math.floor(Math.random() * 16);

      // console.log(`Random index: ${randomIndex}, Letter: ${letter[randomIndex]}`); 

      color += letter[randomIndex];
    }
    return color;
  }


});
