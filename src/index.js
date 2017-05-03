import bespoke from 'bespoke';
import nebula from 'bespoke-theme-nebula';
import keys from 'bespoke-keys';
import touch from 'bespoke-touch';
import bullets from 'bespoke-bullets';
import backdrop from 'bespoke-backdrop';
import scale from 'bespoke-scale';
import hash from 'bespoke-hash';
import progress from 'bespoke-progress';

import './slides/slides.styl';

bespoke.from('article', [
  nebula(),
  keys(),
  touch(),
  bullets('ul:not(.no-bullets) li, .bullet'),
  backdrop(),
  scale(),
  hash(),
  progress()
]);
