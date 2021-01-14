import {
  Bounce, Slide, Zoom,
} from 'react-toastify';

export function getTransition(type) {
  switch (type) {
  case 'slide': return Slide;
  case 'zoom': return Zoom;
  case 'bounce': return Bounce;
  }
}