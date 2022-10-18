const card = document.querySelector(".my_project");
const buttons = document.querySelector(".buttons");
const img = document.querySelector(".category_image");
const cat_parent = document.querySelector(".category_parent");
const cat_details = document.querySelector(".category_details");
const button = document.querySelector(".create");
const multiplayer = document.getElementById("multiplayer_quiz");

const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");

const myGameCode = document.getElementById("generated_game_code");
const enteredGameCode = document.getElementById("entered_game_code");

function toggleModal() {
  modal.classList.toggle("show-modal");
  if (modal.classList.contains("show-modal")) {
    myGameCode.innerText = `${generateUserGameCode()}`;
  }
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

function change() {
  img.style.webkitFilter = "blur(8px)";
  cat_parent.style.webkitFilter = "blur(8px)";
  cat_details.style.webkitFilter = "blur(8px)";
  buttons.style.display = "block";
}
function revert() {
  img.style.webkitFilter = "none";
  cat_parent.style.webkitFilter = "none";
  cat_details.style.webkitFilter = "none";
  buttons.style.display = "none";
}

// button.addEventListener("click", async () => {
//   let categories = {
//     category_name: "",
//     category_data: "",
//   };

//   const headers = new Headers({ "Content-Type": "application/json" });
//   const opts = {
//     method: "post",
//     headers: headers,
//     body: JSON.stringify(categories),
//   };

//   const resp = await fetch("/categories/createCategories", opts);
// });

multiplayer.addEventListener("click", () => {
  console.log("quiz button clicked");
});

function generateUserGameCode() {
  return Math.floor(1000 + Math.random() * 9000);
}
