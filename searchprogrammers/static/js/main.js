let searchForm = document.getElementById("searchForm");
let pageLinks = document.getElementsByClassName("page-link");

//ENSURE SEARCH FORM EXISTS
if (searchForm) {
  for (let i = 0; pageLinks.length > i; i++) {
    pageLinks[i].addEventListener("click", function (e) {
      e.preventDefault();

      //GET THE DATA ATTRIBUTE
      let page = this.dataset.page;

      //ADD HIDDEN SEARCH INPUT TO FORM
      searchForm.innerHTML += `<input value=${page} name="page" hidden/>`;

      //SUBMIT FORM
      searchForm.submit();
    });
  }
}

let tags = document.getElementsByClassName("project-tag");

const clicked = (e) => {
  let tagId = e.target.dataset.tag;
  let projectId = e.target.dataset.project;
  // console.log(`TagID: ${tagId}`);
  // console.log(`projectId: ${projectId}`);

  fetch("http://127.0.0.1:8000/api/remove-tag/", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ project: projectId, tag: tagId }),
  })
    .then((response) => response.json())
    .then((data) => {
      e.target.remove();
    });
};

for (let i = 0; i < tags.length; i++) {
  tags[i].addEventListener("click", clicked);
}
