import React, { Component } from "react";

class ProfileStatus extends Component {
  state = {
    editmode: false,
    status: this.props.status,
  };

  activateEditMode = () => {
    this.setState({
      editmode: true,
    });
  };
  deactivateEditMode = () => {
    this.setState({
      editmode: false,
    });
    this.props.updateStatus(this.state.status);
  };

  onChangeStatus = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }
  render() {
    return (
      <div>
        {!this.state.editmode && (
          <div>
            <span onDoubleClick={this.activateEditMode}>
              {this.props.status || "No Status"}
            </span>
          </div>
        )}
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
