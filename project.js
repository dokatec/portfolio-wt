let projectData = [
  {
    image: "img/project-1.png",
    name: "project one",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue",
    github: "#",
    live: "#",
    tags: "#javascript, #fullstack, #css",
  },
  {
    image: "img/project-2.png",
    name: "project one",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue",
    github: "#",
    live: "#",
    tags: "#javascript, #fullstack, #css",
  },
  {
    image: "img/project-3.png",
    name: "project one",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue",
    github: "#",
    live: "#",
    tags: "#javascript, #fullstack, #css",
  },
  {
    image: "img/project-4.png",
    name: "project one",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue",
    github: "#",
    live: "#",
    tags: "#javascript, #fullstack, #css",
  },
  {
    image: "img/project-5.png",
    name: "project one",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue",
    github: "#",
    live: "#",
    tags: "#javascript, #fullstack, #css",
  },
  {
    image: "img/project-6.png",
    name: "project one",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue",
    github: "#",
    live: "#",
    tags: "#javascript, #fullstack, #css",
  },
  {
    image: "img/project-7.png",
    name: "project one",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue",
    github: "#",
    live: "#",
    tags: "#javascript, #fullstack, #css",
  },
  {
    image: "img/project-8.png",
    name: "project one",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue",
    github: "#",
    live: "#",
    tags: "#javascript, #fullstack, #css",
  },
];

const createProjectCards = (data) => {
  let projectContainer = document.querySelector(".project-container");

  projectContainer.innerHTML += `<div class="project-card" data-tags="${data.tags}">
<div class="project-wrapper">
<div class="project-thumbnail">
<img src="img/close.png" class="close-btn" alt="">
<img src="${data.image}" class="project-img" alt="">
<span class="tags">${data.tags}</span>
</div>
<div class="project-body">
<h1 class="project-name">${data.name}</h1>
<p class="project-detail">${data.detail}</p>
<a href="${data.github}" class="btn">github</a>
<a href="${data.live}" class="btn">see live</a>
</div>
</div>
</div>
`;
};

projectData.forEach((data) => createProjectCards(data));
