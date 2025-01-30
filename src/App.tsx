import React from "react";
import Button from "./components/ui/Button";
import PlusIcon from "./icons/PlusIcon";
import ShareIcon from "./icons/ShareIcon";

const App = () => {
  return (
    <>
      <Button variant="primary" text="Share" size="sm" startIcon={<span><ShareIcon/></span>} />
      <Button variant="secondary" text="Add Content" size="lg" startIcon={<span><PlusIcon/></span>} />
    </>
  );
};

export default App;
