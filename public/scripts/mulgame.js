document.addEventListener("DOMContentLoaded", () => {
  let iSelected = false;
  const socket = io("http://localhost:3000");

  const optA = document.getElementById("optA");
  const optB = document.getElementById("optB");
  const optC = document.getElementById("optC");
  const optD = document.getElementById("optD");

  const query = window.location.search.substring(1);
  const temp = query.split("&");
  // const array = query.split("=");
  // const param = array[1];
  // console.log("param is:" + param);
  const uid = temp[0].split("=");
  const userId = uid[1];

  const cat = temp[1].split("=");
  const category = cat[1];

  console.log("userId=" + userId + ", category= " + category);

  function optionSelected(opt) {
    socket.emit("option-selected", { id: userId, opt });
  }

  function clearActiveSelection() {
    if (optA.classList.contains("active")) {
      optA.classList.toggle("active");
    } else if (optB.classList.contains("active")) {
      optB.classList.toggle("active");
    } else if (optC.classList.contains("active")) {
      optC.classList.toggle("active");
    } else if (optD.classList.contains("active")) {
      optD.classList.toggle("active");
    }
  }

  optA.addEventListener("click", () => {
    if (!iSelected) {
      iSelected = true;
      optA.classList.toggle("active");
      optionSelected(1);
    }
  });
  optB.addEventListener("click", () => {
    if (!iSelected) {
      iSelected = true;
      optB.classList.toggle("active");
      optionSelected(2);
    }
  });
  optC.addEventListener("click", () => {
    if (!iSelected) {
      iSelected = true;
      optC.classList.toggle("active");
      optionSelected(3);
    }
  });
  optD.addEventListener("click", () => {
    if (!iSelected) {
      iSelected = true;
      optD.classList.toggle("active");
      optionSelected(4);
    }
  });

  socket.on("update option", (option) => {
    switch (option) {
      case 1:
        // clearActiveSelection();
        optA.classList.add("active");
        break;
      case 2:
        // clearActiveSelection();
        optB.classList.add("active");
        break;
      case 3:
        // clearActiveSelection();
        optC.classList.add("active");
        break;
      case 4:
        // clearActiveSelection();
        optD.classList.add("active");
        break;
      default:
        clearActiveSelection();
    }
  });
});
