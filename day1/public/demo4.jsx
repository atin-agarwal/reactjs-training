var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: "React",
      email: "hello@example.com"
    };
  },
  render: function() {
    var name = this.props.name;
    var email = this.props.email;
    return (
      <div>
        <h1>Hello {name} {email}</h1>
        <p>This is a paragraph</p>
      </div>
    );
  }
});

ReactDOM.render(
  <Greeter name="atin"/>,
  document.getElementById('app')
);
