import React from "react";
import WelcomeNav from "./welcomeNav";

import { Provider } from "react-redux";
import store from "./redux/store";
import Update from "./update";

const Welcome = () => {
  // store.subscribe(() => console.log(store.getState()));
  // console.log("the store in index or main app", store);
  return (
    <div
      style={{
        border: "1px solid #c3c3c3",
        padding: "8px",
        borderRadius: "4px",
      }}
    >
      <Provider store={store}>
        <WelcomeNav />
        <Update />
      </Provider>
    </div>
  );
};

export default Welcome;
