import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  const footerPath = '/content/caps/footer';
  const fragment = await loadFragment(footerPath);

  block.textContent = '';
  const footer = document.createElement('div');
  const footNote = fragment.getElementsByTagName('p')[0];
  if (footNote) {
    footNote.classList.add('footnote');
    footer.append(footNote);
  }
  block.append(footer);
  return block;
}
