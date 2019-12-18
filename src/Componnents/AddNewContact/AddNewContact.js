import React, { Fragment } from "react";
import "./AddNewContact.css";

class AddNewContact extends React.Component {
  state = {
    name: "",
    description: "",
    avatar: ""
  };

  GetName = event => {
    this.setState({
      name: event.target.value
    });
  };

  GetDesc = event => {
    this.setState({
      description: event.target.value
    });
  };

  GetAvatar = event => {
    this.setState({
      avatar: event.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { name, description, avatar } = this.state;
    this.props.onEditContact(name, description, avatar);
  };

  render() {
    return (
      <Fragment>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Name</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Name"
              onChange={this.GetName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Description</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Description"
              onChange={this.GetDesc}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Avatar</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Avatar"
              onChange={this.GetAvatar}
            />
          </div>
          <div className="custom-control custom-radio">
            <input
              type="radio"
              id="customRadio1"
              name="customRadio"
              class="custom-control-input"
            />
            <label className="custom-control-label" htmlfor="customRadio1">
              Woman
            </label>
          </div>
          <div className="custom-control custom-radio">
            <input
              type="radio"
              id="customRadio2"
              name="customRadio"
              class="custom-control-input"
            />
            <label className="custom-control-label" htmlfor="customRadio2">
              Man
            </label>
          </div>
          <button type="submit" className="btn btn-success">
            Add
          </button>
        </form>
      </Fragment>
    );
  }
}

export default AddNewContact;
