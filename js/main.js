// let dropdown = document.querySelector(".dropdown");
// let dropdownNav = document.querySelector(".dropdown nav");
// dropdown.style.cursor = "pointer";
// dropdown.addEventListener("click", function () {
//     let dropdownNav = document.querySelector(".dropdown nav");
//     dropdownNav.style.marginLeft = "20%"
//     if(dropdownNav.classList.contains("d-none")){
//         dropdownNav.classList.remove("d-none");
//         dropdownNav.classList.add("d-block");
//     }
//     else{
//         dropdownNav.classList.add("d-none");
//         dropdownNav.classList.remove("d-block");
//     }
// });
// dropdown.addEventListener("mouseover", function () {
//     let dropdownNav = document.querySelector(".dropdown nav");
//     dropdownNav.style.marginLeft = "20%"
//     if(dropdownNav.classList.contains("d-none")){
//         dropdownNav.classList.remove("d-none");
//         dropdownNav.classList.add("d-block");
//     }
//     else{
//         dropdown.addEventListener("mouseout", function () {
//             dropdownNav.classList.add("d-none");
//             dropdownNav.classList.remove("d-block");
//         });
//     }
// });


let dropdown = document.querySelector(".btn-group");
let dropdownNav = document.querySelector(".btn-group .dropdown-menu");
dropdown.style.cursor = "pointer";
dropdown.addEventListener("click", function () {
    let dropdownNav = document.querySelector(".btn-group .dropdown-menu");
  
    if(dropdownNav.classList.contains("d-none")){
        dropdownNav.classList.remove("d-none");
        dropdownNav.classList.add("d-block");
    }
    else{
        dropdownNav.classList.add("d-none");
        dropdownNav.classList.remove("d-block");
    }
});
dropdown.addEventListener("mouseover", function () {
    let dropdownNav = document.querySelector(".btn-group .dropdown-menu");
   
    if(dropdownNav.classList.contains("d-none")){
        dropdownNav.classList.remove("d-none");
        dropdownNav.classList.add("d-block");
    }
    else{
        dropdown.addEventListener("mouseout", function () {
            dropdownNav.classList.add("d-none");
            dropdownNav.classList.remove("d-block");
        });
    }
});