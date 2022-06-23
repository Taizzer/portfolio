import React from "react";
// using css module
// name it a because i can name as i like
import a from "./Colors.module.css";
import "./Colors.css";

// for inline style css
const styleColorGreen = { color: "green" };
const Colors = () => {
 return (
  <div className="">
   <h6> i am comp from colors</h6>
   <div className="">
    {/* in calss with module css able to add one class maybe there is another way but is hard 
    
    need to nkow how to add multi class with css module
    found it with `` template literal i could
    className={`${a.box} ${a.box0}`}
    */}

    {/* note:
    
    if you do this : for css module
    then the last class only taken yea weird!!
    className={(a.box0, a.box)}
    */}

    {/* style with css module from import a from "./Colors.module.css";*/}
    <div className={`${a.box} ${a.box0}`}>i am div with box module css</div>

    {/* normal css from import "./Colors.css"; */}
    <div className="box box1"></div>
    <div className="box box1-"></div>
    <div className="box box2"></div>
    <div className="box box3"></div>
   </div>
   <div className="box-2">
    <div className="box  box4"></div>
    <div className="box  box5-"></div>
    <div className="box  box5"></div>
    <div className="box  box6"></div>
    <div className="box   box7"></div>

    {/* 
    first { for JS} {2nd for object}
    style={{ color: "red" }}
  */}
    <h2 style={{ color: "red" }}>i am h2 in line style</h2>
    {/* only {one coz for JS variable} */}
    <h2 style={styleColorGreen}>i am h2 variable style</h2>
   </div>
  </div>
 );
};
export default Colors;
