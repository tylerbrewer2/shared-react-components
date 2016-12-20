// var Header = require('./components/Header.jsx');

// var SharedReactComponents = {
//   Header: Header
// }

// module.exports = SharedReactComponents;

module.exports = function({percent = 100, amount}) {  
  const percentOff = (percent / 100) * amount;
  return percentOff;
}
