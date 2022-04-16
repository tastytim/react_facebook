import React, { Component } from "react";

class ProfileStatus extends Component {


  // STATE
  state = {
    editmode: false,
    status: this.props.status,
  };


  // ACRTIVATE  EDITMODE INPUT
  activateEditMode = () => {
    this.setState({
      editmode: true,
    });
  };


  // DEACTIVE EDIT MODE
  deactivateEditMode = () => {
    this.setState({
      editmode: false,
    });
    this.props.updateStatus(this.state.status);
  };



  // ON CAHANGE SET NEW STATE STATUS
  onChangeStatus = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };


  // ON UPDATE UPDATE COMPONENT
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }


  // RENDER COMPONENT
  render() {
    return (
      <div>

        {/* IF NOT EDIT MODE RETURN SPAN WITH STATUS */}
        {!this.state.editmode && (
          <div>
            <span onDoubleClick={this.activateEditMode}>
              {this.props.status || "No Status"}
            </span>
          </div>
        )}
        {/* OTHERWISE RETUN INPUT */}
        {this.state.editmode && (
          <div>
            <input
              value={this.state.status}
              onBlur={this.deactivateEditMode}
              autoFocus={true}
              onChange={this.onChangeStatus}
              onKeyPress={(e) =>
                e.key === "enter" ? () => this.onChangeStatus : ""
              }
            />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
