function Hello() {
  return React.createElement('div', null, `Hello Worls`);
}

ReactDOM.render(
  React.createElement(Hello, null),
  document.getElementById('root')
);
