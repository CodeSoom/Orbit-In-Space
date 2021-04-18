export const get = (key) => (state) => state[key];

export function equal(key, value) {
  return (obj) => obj[key] === value;
}

export function scrollToTop() {
  window.scrollTo(0, 0);
}
