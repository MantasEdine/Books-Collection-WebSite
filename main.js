// document.addEventListener("DOMContentLoaded", () => {
//   const bookList = document.querySelector("#book-list ul");

//   bookList.addEventListener("click", (e) => {
//     if ((e.target.className = "delete")) {
//       const li = e.target.parentElement;
//       bookList.removeChild(li);
//     }
//   });

//   const addForm = document.querySelector("#add-book");
//   console.log(addForm);

//   addForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const value = addForm.querySelector('input[type="text"]').value;
//     const title = document.createElement("span");
//     const del_button = document.createElement("span");
//     const li = document.createElement("li");
//     title.textContent = value;
//     del_button.textContent = "delete";
//     li.appendChild(title);
//     li.appendChild(del_button);
//     bookList.appendChild(li);
//     console.log(li);
//     title.classList.add("name");
//     del_button.classList.add("delete");
//   }); //

//   const HideBox = document.querySelector("#hide");

//   HideBox.addEventListener("change", (e) => {
//     if (HideBox.checked) {
//       bookList.style.display = "none";
//     } else {
//       bookList.style.display = "initial";
//     }
//   }); //
//   window.addEventListener("keydown", function (event) {
//     console.log("A key was pressed!");
//   });

//   const searchBar = document
//     .querySelector("#search-books")
//     .querySelector("input");
//   console.log(searchBar);

//   searchBar.addEventListener("keyup", (e) => {
//     const content = e.target.value.toLowerCase();
//     const titles = bookList.querySelectorAll("li span.name");
//     titles.forEach((title) => {
//       const text = title.textContent.toLowerCase();
//       if (text.indexOf(content) !== -1) {
//         title.parentElement.style.display = "block";
//       } else {
//         title.parentElement.style.display = "none";
//       }
//     });
//   });

//   const tabs = document.querySelector(".tabs");
//   const panels = document.querySelectorAll(".panel");
//   tabs.addEventListener("click", (e) => {
//     if (e.target.tagName == "LI") {
//       const targetPanel = document.querySelector(e.target.dataset.target);
//       Array.from(panels).forEach((panel) => {
//         if (panel == targetPanel) {
//           panel.classList.add("active");
//         } else {
//           panel.classList.remove("active");
//         }
//       });
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const del_buttons = document.querySelectorAll(".delete");
  //  Deleting A Book-Title
  del_buttons.forEach((del_button) => {
    del_button.addEventListener("click", (e) => {
      const li = e.target.parentElement;
      li.remove();
    });
  });

  //  Adding A Book-Title
  const bookList = document.querySelector("#book-list ul");
  const addBook = document.querySelector("#add-book");
  addBook.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent
    const value = addBook.querySelector('input[type="text"]').value;
    const title = document.createElement("span");
    const del = document.createElement("span");
    const li = document.createElement("li");
    bookList.appendChild(li);
    li.appendChild(title);
    li.appendChild(del);
    title.textContent = value;
    del.textContent = "delete";
    title.classList.add("name");
    del.classList.add("delete");
  });

  // Hide
  const HideBox = document.querySelector("#hide");

  HideBox.addEventListener("change", (e) => {
    if (HideBox.checked) {
      bookList.style.display = "none";
    } else {
      bookList.style.display = "initial";
    }
  });
  // Customized Search Filter
  const searchBar = document
    .querySelector("#search-books")
    .querySelector("input");

  searchBar.addEventListener("keyup", (e) => {
    const content = e.target.value.toLowerCase();
    const titles = bookList.querySelectorAll("li span.name");
    titles.forEach((title) => {
      const text = title.textContent.toLowerCase();
      if (text.indexOf(content) !== -1) {
        title.parentElement.style.display = "block";
      } else {
        title.parentElement.style.display = "none";
      }
    });
  });
  const tabs = document.querySelector(".tabs");
  const panels = document.querySelectorAll(".panel");
  tabs.addEventListener("click", (e) => {
    if (e.target.tagName == "LI") {
      const targetPanel = document.querySelector(e.target.dataset.target);
      Array.from(panels).forEach((panel) => {
        if (panel == targetPanel) {
          panel.classList.add("active");
        } else {
          panel.classList.remove("active");
        }
      });
    }
  });
});
