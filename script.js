

document.addEventListener("DOMContentLoaded", () => {
  const buttonTOChoose = document.querySelector("#choosing_button");
  let Sqrs;
  buttonTOChoose.addEventListener("click", () => {
    Sqrs = prompt("How many squares do you want each side!?", 16);
    console.log(Sqrs);
    if(Sqrs > 100 || Sqrs===null){
      alert("cannot choose greater than 100 or null !! Setting size to 20");
      Sqrs = 20;
    }

    const prev_grid_container = document.querySelector('.grid_Container');
    if(prev_grid_container !== null){
      prev_grid_container.remove();
    }

    const gridContainer = document.createElement("div");
    gridContainer.setAttribute("class", "grid_Container");

      //     Type Coercion: JavaScript implicitly converts null to a number before performing arithmetic operations. When you multiply two null values, JavaScript coerces each null to 0.
    // Thus, null * null becomes 0 * 0, which equals 0.
    console.log(Sqrs * Sqrs);

    for (let i = 1; i <= Sqrs * Sqrs; i++) {
      const grid_box = document.createElement("div");

      grid_box.setAttribute("class", "grid_item");
      grid_box.style.cssText = `width:${600 / Sqrs}px;height:${600 / Sqrs}px`;

      gridContainer.appendChild(grid_box);
    }

    const body_container = document.querySelector("body");
    body_container.appendChild(gridContainer);
  });


});
