const repos = [
  {
    id: 0,
    name: 'calculator',
    description: 'A basic calculator',
    tags: [
      'javascript', 
      'html',
      'css'
    ],
    pinned: true,
  },
  {
    id: 1,
    name: 'spongebob-ranking',
    description: 'A web app which allows users to rank episodes of the tv series SpongeBob Squarepants',
    tags: [
      'javascript', 
      'html',
      'css',
      'spongebob'
    ],
    pinned: true,
  },
  {
    id: 2,
    name: 'one-app-to-rule-them-all',
    description: 'One app to find them',
    tags: [
      'one app to bring them all', 
      'and in the darkness',
      'bind them'
    ],
    pinned: true,
  },
  {
    id: 3,
    name: 'colombian-decaffinated-coffee-crystals',
    description: 'YOU LIED TO ME',
    tags: [
      'js',
      'html',
      'snl'
    ],
    pinned: false,
  }
]

const packages = [
  {
    id: 0,
    name: 'example 1',
    description: 'this is a package',
  }
]

const projects = [
  {
    id: 0,
    name: 'project 1',
    description: 'This is the first project!',
  },
  {
    id: 1,
    name: 'project 2',
    description: 'This is the second project!',
  },
  {
    id: 2,
    name: 'project 3',
    description: 'This is the third project!',
  },
  {
    id: 3,
    name: 'project 4',
    description: 'This is the fourth project!',
  },
  {
    id: 4,
    name: 'project 5',
    description: 'This is the fifth project!',
  }
]

const navbar = document.querySelector('#navbar-container');
const navbarHtml = `
<ul class="nav nav-underline">
    <li class="nav-item"> 
      <a class="nav-link" aria-current="page" href="index.html">Overview</a>
    </li>
    <li class="nav-item">
    <a class="nav-link" href="repos.html">Repositories</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="projects.html" id="projects-link">Projects</a>
      </li>
    <li class="nav-item">
      <a class="nav-link" href="packages.html" id="packages-link">Packages</a>
      </li>
  </ul>
`

const profile = document.querySelector('#profile-container');

const profileHTML = `
<div class="card" style="width: 18rem;">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL5oj80oSnu0hbavRhtC-brZkifcmNBShH4A&s" class="card-img-top" alt="Bob Sample">
  <div class="card-body">
    <h5 class="card-title">Bob Sample</h5>
    <p class="card-text">I'm a fake web developer made up for the purposes of this project!</p>
    <button type="button" class="btn btn-primary">Follow</button>
    <button type="button" class="btn btn-primary">Sponsor</button>
    <button type="button" class="btn btn-primary">...</button>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Location: Nashville, TN</li>
    <li class="list-group-item">Email: bob@sample.com</li>
    <li class="list-group-item">Twitter: @bobthesample</li>
    </ul>
    <div class="card-body">
    <a href="#" class="card-link">PRO User</a>
    <a href="#" class="card-link">Repo Master</a>
  </div>
  </div>
  `

  const pinnedPackages = document.querySelector("#packages-container")
  const packOnDom = (array) => {
    let domString = "";
    for (const package of array) {
      domString += `
        <div class="col-sm-6">
          <div class="Kcard">
            <div class="card-body">
              <h5 class="card-title">${package.name}</h5>
              <p class="card-text">${package.description}</p>
              <a href="package.html" class="btn btn-primary">learn more</a>
            </div>
          </div>
        </div>`
};

renderToDom("#packages-container", domString);
  };

  const pForm = document.querySelector("#packages-form")

  if (document.URL.includes("packages.html")) {
    pForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const newPackage = {
        
        id: repos.length + 1,
        name: document.querySelector("#packageName").value,
        description: document.querySelector("#package-description").value,
      };
      
      packages.push(newPackage);
      packOnDom(packages);
      pForm.reset();
    });
  }

  const pinnedRepos = document.querySelector("#pinnedRepo-container")

 const cardsOnDom = (array) => { 
  let domString = "";
  for (const repo of array) {
    domString += `
    <div class="col-sm-6">
      <div class="Kcard">
        <div class="card-body">
          <h5 class="card-title">${repo.name}</h5>
          <p class="card-text">${repo.description}</p>
          <a href="#" class="btn btn-primary">☆</a>
        </div>
      </div>
    </div>`
  };
//<div class="row">
//<div class="col-sm-6">
renderToDom("#pinnedRepo-container", domString);
};


//create buttons for tags for repos
const createTags = (repo) => {
  let tagString = '';
  repo.tags.map((tag) => {
      tagString += `<a href="#" class="btn btn-primary">${tag}</a>`
  })
  return tagString
};

//render star if pinned
const renderStar = (pin) => {
  if (pin === true) {
    return '<a href="#" class="btn btn-primary">☆</a>'
  } else {
    return ''
  }
}

//add cards for repositories
const reposOnDom = (array) => {
  let domString = "";
  for (const repo of array) {
    domString += `
    <div class="col-sm-6">
      <div class="Kcard">
        <div class="card-body">
          <h5 class="card-title">${repo.name}</h5>
          <p class="card-text">${repo.description}</p>
          ${renderStar(repo.pinned)}
          ${createTags(repo)}
        </div>
      </div>
    </div>`
  };

  renderToDom('#repo-container', domString);
};

const repoForm = document.querySelector('#repo-form')
if (document.URL.includes("repos.html")) {
  repoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const newRepo = {
      id: repos.length + 1,
      name: document.querySelector("#repo-name").value,
      description: document.querySelector("#repo-description").value,
      tags: [],
      pinned: false
    };
    
    repos.push(newRepo);
    reposOnDom(repos);
    repoForm.reset();
  });
}

const filterPinned = (array) => {
  let newArr = [];
  array.map((entry) => {
    if (entry.pinned === true) {
      newArr.push(entry);
    }
  })
  return newArr;
}

const form = document.querySelector('#pinned-repo-form')

if (document.URL.includes("index.html")) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newPinnedRepo = {
      
      id: repos.length + 1,
      name: document.querySelector("#projectBoardName").value,
      description: document.querySelector("#pin-repo-description").value,
    };
    
    repos.push(newPinnedRepo);
    cardsOnDom(repos);
    form.reset();
  });
}

const projOnDom = (array) => { 
  let domString = "";
  for (const project of array) {
    domString += `
      <div class="col-sm-6">
        <div class="Kcard">
          <div class="card-body">
            <h5 class="card-title">${project.name}</h5>
            <p class="card-text">${project.description}</p>
            <a href="#" class="btn btn-primary">Add Project</a>
          </div>
        </div>
      </div>`
  };

renderToDom("#projects-container", domString);
};

const projForm = document.querySelector('#projects-form')

if (document.URL.includes("projects.html")) {
  projForm.addEventListener("submit", (e) => {
    e.preventDefault(); 
    const taco = {
      
      id: projects.length + 1,
      name: document.querySelector("#projectsName").value,
      description: document.querySelector("#projects-description").value,
    };
    
    projects.push(taco);
    projOnDom(projects);
    projForm.reset();
  });
}

const footerEl = document.querySelector('#footerEl-container')
const footerHTML = `
  <footer></footer>
    <p>&#169; GitSub, Inc.</p>
    <p><a href=example.com>example.com</a></p>
    <p><a href=leonard.com>leonard.com</a></p>
  </footer>
`


  const renderToDom = (divId, htmlToRender) => {
    const targetingApp = document.querySelector(divId);
    targetingApp.innerHTML = htmlToRender;
  };

  const startApp = () => {
    navbar.innerHTML = navbarHtml;
    profile.innerHTML = profileHTML;
    footerEl.innerHTML = footerHTML;
    if (document.URL.includes('packages.html')) {
    packOnDom(packages);
  } else if (document.URL.includes('index.html')) {
    cardsOnDom(filterPinned(repos))
  } else if (document.URL.includes('projects.html')) {
    projOnDom(projects)
  } else if (document.URL.includes('repos.html')) {
    reposOnDom(repos);
  }
};

startApp();
