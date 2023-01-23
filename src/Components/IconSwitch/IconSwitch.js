import React from "react";
import PropTypes from "prop-types";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";

const IconSwitch = (props) => {
  return (
    <div className="icon-switch">
      {props.icon === "view_list" ? (
        <ViewListIcon onClick={props.onSwitch} />
      ) : (
        <ViewModuleIcon onClick={props.onSwitch} />
      )}
    </div>
  );
};

IconSwitch.propTypes = {
  icon: PropTypes.string,
  onSwitch: PropTypes.func,
};

export default IconSwitch;
