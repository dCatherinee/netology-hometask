function hex2rgb(hex) {
  let r = hex.slice(1, 3);
  let g = hex.slice(3, 5);
  let b = hex.slice(5);

  r = parseInt(r, 16);
  g = parseInt(g, 16);
  b = parseInt(b, 16);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}

export default hex2rgb;
