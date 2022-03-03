// component name should always starts with capital letters.
import React from "react";

// importing props types so that we dont makes mistakes with the props to assign with text, object, number, boolean, array etc
import PropTypes from "prop-types";

// pass props in this arrow function then use {props.variavle} to get the data  for props from the next page
const Navbar = (props) => {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  {props.aboutText}
                </a>
              </li>
            </ul>
            {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            {/*we can use $and put varible in js under curly bracket 
            and we can also use object in curly bracket within curly bracket.   */}
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Enable Dark Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
// defining props types to pass the specific values to the props variable.
Navbar.prototypes = {
  title: PropTypes.string, //defining the title should always be a string.
  //title: PropTypes.string.isRequired  //console will throw an error if there is no default props assigned else it will just take the default props.
  aboutText: PropTypes.string.isRequired,
};

//we can also set default props so that we can get notified(pass the default values) if there is no value passed in the defined props.Title

Navbar.defaultProps = {
  title: "set title here",
  aboutText: "About",
};

export default Navbar;
