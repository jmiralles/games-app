export function $on(target, type, callback, capture) {
  target.addEventListener(type, callback, !!capture);
}

export function qs(selector, scope) {
  return (scope || document).querySelector(selector);
}

export function qsAll(selector, scope) {
  return (scope || document).querySelectorAll(selector);
}

export const escapeForHTML = s =>
  s.replace(/[&<]/g, c => (c === "&" ? "&amp;" : "&lt;"));
