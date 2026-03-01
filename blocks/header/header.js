import { loadFragment } from '../fragment/fragment.js';

export default async function decorate(block) {
  const navPath = '/content/caps/nav';
  const fragment = await loadFragment(navPath);
  block.textContent = '';
  const nav = document.createElement('nav');
  nav.id = 'nav';
  const main = fragment.getElementsByTagName('main')[0];
  const picture = main.getElementsByTagName('picture')[0];
  if (picture) {
    picture.classList.add('nav-logo');
    nav.append(picture);
  }
  const btn = main.getElementsByClassName('button-container')[0];
  if (btn) {
    btn.classList.add('nav-button');
    nav.append(btn);
  }
  block.append(nav);
  return block;
}
