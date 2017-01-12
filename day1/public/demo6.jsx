var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: "Guest",
      email: "guest@example.com"
    };
  },
  getInitialState: function () {
    return {
      name: this.props.name,
      email: this.props.email
    };
  },
  render: function() {
    var name = this.state.name;
    var email = this.state.email;
    return (
      <div>
        <h1>Hello {name}! Your email as per our records is: {email}</h1>
        <form onSubmit={this.onBtnClick}>
          <p><input type="text" ref="name" /></p>
          <p><input type="text" ref="email" /></p>
          <button>Submit</button>
        </form>
      </div>
    );
  },
  onBtnClick: function(e) {
    e.preventDefault();
    var name = this.refs.name.value;
    var email = this.refs.email.value;
    if (typeof name === 'string' && name.length > 0) {
      this.setState ({
        name: name
      });
    } else {
      alert('name not provided');
    }
    if (typeof email === 'string' && email.length > 0) {
      this.setState ({
        email: email
      });
    } else {
      alert('email not provided');
    }
    this.refs.name.value = '';
    this.refs.email.value = '';
  }
});

ReactDOM.render(
  <Greeter/>,
  document.getElementById('app')
);
