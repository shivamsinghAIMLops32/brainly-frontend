import React from "react";
import Button from "./components/ui/Button";
import PlusIcon from "./icons/PlusIcon";
import ShareIcon from "./icons/ShareIcon";

const App = () => {
  const onclick = ()=>{
    console.log("Button clicked");
  }
  return (
    <>
      <Button title={"SignUp"} frontIcon={<PlusIcon size="md"/>} size={"md"} onclick={onclick} variants="primary"/>
      <Button title={"Share"} frontIcon={<ShareIcon size="md" />} size={"md"} variants="secondary"/>
    </>
  );
};

export default App;
