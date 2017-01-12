var Greeter = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Hello Atin</h1>
        <p>This is a paragraph</p>
      </div>
    );
  }
});

ReactDOM.render(
  <Greeter/>,
  document.getElementById('app')
);
