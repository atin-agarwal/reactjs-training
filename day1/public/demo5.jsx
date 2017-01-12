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
        <form onSubmit={this.onBtnClick}>
          <input type="text" ref="user" />
          <button>Set Name</button>
        </form>
      </div>
    );
  },
  onBtnClick: function(e) {
    e.preventDefault();
    var usr = this.refs.user.value;
    alert(usr);
  }
});

ReactDOM.render(
  <Greeter/>,
  document.getElementById('app')
);
