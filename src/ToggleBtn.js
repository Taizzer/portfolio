import React, { useState } from "react";

const ToggleBtn = () => {
  //TO do make the switch btn a component
  const [btnToggle, setBtnToggle] = useState(false);

  //  switch btn on / off
  const switchBtn = () => {
    setBtnToggle(!btnToggle);
  };
  //class will turn the text to red when btnToggle True
  const classTog = btnToggle ? "red" : "";
  // setBtnToggle(!BtnToggle)

  return (
    // h6 not important just for testing
    <div className="">
      {/* {btnToggle ? "red" : ""} */}
      <h6 className={classTog}>Hello i am toggeld color</h6>

      {/* input checkbox btn for toggle */}
      <div className="div-btn-switch">
        <input className="switch-btn" type="checkbox" onClick={switchBtn} />
      </div>
    </div>
  );
};
export default ToggleBtn;
