import React, { useEffect, useState } from "react";

const ProfileStatusWithHooks = (props) => {
  // RENDER COMPONENT

  // USESTATE

  // return array with boolean and setBoolean
  let [editMode, setEditMode] = useState(false);
  // return array with status and setStatus
  let [status, setStatus] = useState(props.status);

  // USEEFFECT
  useEffect(()=>{
    setStatus(props.status);
  }, [props.status]);

  // ACTIVATE INPUT
  let activateEditMode = () => {
    setEditMode(true);
  };
  // DEACTIVATE INPUT AND UPDATE STATUS GOT FROM USESTATE
  let deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };
  // ON CHANGE TEXT SET VALUE OF INPUT
  let onStatusChange = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div>
      {/* IF NOT EDIT MODE RETURN SPAN WITH STATUS */}
      {!editMode && (
        <div>
          <span onDoubleClick={activateEditMode}>
            {props.status || "No Status"}
          </span>
        </div>
      )}
      {/* OTHERWISE RETUN INPUT */}
      {editMode && (
        <div>
          <input
            onChange={onStatusChange}
            onBlur={deactivateEditMode}
            value={status}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
