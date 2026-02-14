const headerLinkElement = document.querySelector('.header-link');

let isLinksOpen = false;

const linkArray = [
  {
    text: 'Felix-Files',
    href: 'Felix-files.html',
    className: 'felix-link links',
  },
  {
    text: 'Felix-Files',
    href: 'Felix-files.html',
    className: 'felix-link links',
  },
];

function createButton() {
  const btn = document.createElement('button');
  btn.className = 'links-button';
  btn.textContent = 'x';
  btn.addEventListener('click', toggleLinks);
  return btn;
}

function createHomeLink() {
  const a = document.createElement('a');
  a.className = 'home-link links js-home-link';
  a.href = 'index.html';
  a.textContent = 'BAOSITE';
  return a;
}

function toggleLinks() {
  if (!isLinksOpen) {
    linkArray.forEach((link) => {
      const a = document.createElement('a');
      a.className = link.className;
      a.href = link.href;
      a.textContent = link.text;
      headerLinkElement.appendChild(a);
    });
    isLinksOpen = true;
  } else {
    headerLinkElement.innerHTML = '';
    headerLinkElement.appendChild(createButton());
    headerLinkElement.appendChild(createHomeLink());
    isLinksOpen = false;
  }
}

headerLinkElement.appendChild(createButton());
headerLinkElement.appendChild(createHomeLink());

const sideButtonElement = document.querySelector('.sidebar-button');
sideButtonElement.addEventListener('click', () => {
  howareu();
});
function howareu() {
  document.querySelector('.box-overlay').innerHTML = `<div class="overlay">
    <div class="text-box">
      <h2>Hallo</h2>
      <p>Wie geht es dir?</p>
      <button onclick="gut()">Mir geht's gut.</button>
    </div>
  </div>`;
}
function gut() {
  document.querySelector('.box-overlay').innerHTML = `
  <h1>TOLL.</h1>`;
}
