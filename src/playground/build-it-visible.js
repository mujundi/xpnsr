class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

    this.state = {
      visibility: false
    };
  }
  handleToggleVisibility() {
    this.setState(prevState => {
      return {
        visibility: !prevState.visibility
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? "Hide Details" : "Show Details"}
        </button>
        {this.state.visibility && (
          <div>
            <p>Hey. These are some details!</p>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));

// console.log("build-it-visible.js is running!");

// const appRoot = document.getElementById("app");

// const details = "These are some details!";

// // default display and text state
// let hidden = true;
// let buttonText = "Show details";

// const onDisplayToggle = () => {
//   if (hidden) {
//     buttonText = "Hide details";
//   } else {
//     buttonText = "Show details";
//   }

//   hidden = !hidden;
//   render();
// };

// const render = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={onDisplayToggle}>{buttonText}</button>
//       <p hidden={hidden}>{details}</p>
//     </div>
//   );

//   ReactDOM.render(template, appRoot);
// };

// render();
