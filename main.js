
const navbar = document.querySelector('#navbar-container');
const navbarHtml = `
<ul class="nav nav-underline">
    <li class="nav-item"> 
      <a class="nav-link active" aria-current="page" href="#">Overview</a>
    </li>
    <li class="nav-item">
    <a class="nav-link" href="#">Repositories</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Projects</a>
      </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Packages</a>
      </li>
  </ul>
`

// const cardsOnDom = (array) => { 
//   let domString = "";
//   for (const student of array) {
//     domString += 
const profile = document.querySelector('#profile-container');

const sampleString = 'WHEEEEEEE'
const profileHTML = `
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${sampleString}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button type="button" class="btn btn-primary">Follow</button>
    <button type="button" class="btn btn-primary">Sponsor</button>
    <button type="button" class="btn btn-primary">...</button>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
    </ul>
    <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
  </div>
 `

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
  }

  startApp();
