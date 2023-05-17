// ****** create by me *****

// const Inputtitle = document.getElementById("title");
// const Inputdesc = document.getElementById("desc");
// const removeButton = document.getElementById("removebtn");
// const contrainer = document.getElementById("showNotes");
// const showNotes = document.getElementById("showNotes");

// const fillForm = (e) => {
//   e.preventDefault();
//   const titleValue = Inputtitle.value;
//   const descValue = Inputdesc.value;

//   const inshownotes = document.createElement("div");

//   contrainer.append(inshownotes);

//   const para = document.createElement("p");
//   inshownotes.append(para);
//   para.setAttribute("class", "titleNotes");
//   para.textContent = titleValue;

//   const span = document.createElement("span");
//   inshownotes.append(span);
//   //   span.textContent("class", "span")
//   span.textContent = descValue;

//   const deletebutton = document.createElement("button");
//   inshownotes.append(deletebutton);
//   deletebutton.setAttribute("class", "removebtn");
//   deletebutton.textContent = "remove";

//   deletebutton.addEventListener("click", function () {
//     inshownotes.remove();
//   });
// };

// ******** Adding more features from 6 pack programmer

// const title = document.getElementById("title");
// const description = document.getElementById("desc");
// const form = document.querySelector("form");
// const container = document.getElementById("inshownotes");

// const tasks = localStorage.getItem("tasks")
//   ? JSON.parse(localStorage.getItem("tasks"))
//   : [];
// // showAllTasks();

// const showAllTasks = () => {
//   tasks.forEach((value, index) => {
//     // const titleValue = title.value;
//     // const descValue = description.value;
//     const titleValue = value.title;
//     const descValue = value.description;

//     const inshownotes = document.createElement("div");
//     container.append(inshownotes);

//     const para = document.createElement("p");
//     inshownotes.append(para);
//     para.setAttribute("class", "titleNotes");
//     para.textContent = titleValue;

//     const span = document.createElement("span");
//     inshownotes.append(span);
//     span.textContent = descValue;

//     const deletebutton = document.createElement("button");
//     inshownotes.append(deletebutton);
//     deletebutton.setAttribute("class", "removebtn");
//     deletebutton.textContent = "remove";

//     deletebutton.addEventListener("click", () => {
//       removeTask();
//       tasks.splice(index, 1);
//       localStorage.setItem("tasks", JSON.stringify(tasks));
//       showAllTasks();
//     });
//   });
// };

// function removeTask() {
//   const notes = document.querySelectorAll("#inshownotes > div");
//   notes.forEach((note) => {
//     note.remove();
//   });
// }

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   removeTask();
//   tasks.push({
//     title: title.value,
//     description: description.value,
//   });
//   localStorage.setItem("tasks", JSON.stringify(tasks));
//   console.log(tasks);
//   showAllTasks();
// });


const title = document.getElementById("title");
const description = document.getElementById("desc");
const form = document.querySelector("form");
const container = document.getElementById("inshownotes");

const tasks = localStorage.getItem("tasks")
  ? JSON.parse(localStorage.getItem("tasks"))
  : [];
showAllTasks();
function showAllTasks(){
  tasks.forEach((value, index) => {
    const titleValue = value.title;
    const descValue = value.description;

    const inshownotes = document.createElement("div");
    inshownotes.setAttribute("class", "inshownotes")
    container.append(inshownotes);

    const para = document.createElement("p");
    inshownotes.append(para);
    para.setAttribute("class", "titleNotes");
    para.textContent = titleValue;

    const span = document.createElement("span");
    inshownotes.append(span);
    span.textContent = descValue;

    const deletebutton = document.createElement("button");
    inshownotes.append(deletebutton);
    deletebutton.setAttribute("class", "removebtn");
    deletebutton.textContent = "remove";

    deletebutton.addEventListener("click", () => {
      removeTask();
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      showAllTasks();
    });
  });
};

function removeTask() {
  const notes = document.querySelectorAll("#inshownotes > div");
  notes.forEach((note) => {
    note.remove();
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  removeTask();
  tasks.push({
    title: title.value,
    description: description.value,
  });
  localStorage.setItem("tasks", JSON.stringify(tasks)); // Save tasks to local storage
  showAllTasks();
});
