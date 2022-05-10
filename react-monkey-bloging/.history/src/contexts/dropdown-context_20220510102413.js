const { createContext, useContext, useState } = require("react");

const DropdonwContext = createContext();
const DropdonwProvider = (props) => {
  const [show, setShow] = useState(false);
  const handleToggleDropdown = () => {
    setShow((show) => !show);
  };
  return (
    <DropdonwContext.Provider value={props}>
      {props.children}
    </DropdonwContext.Provider>
  );
};

const useDropdown = () => {
  const context = useContext(DropdonwContext);
  if (typeof context === "undefined")
    throw new Error("useDropdown must be used within DropdownProvider");
  return context;
};

export { useDropdown, DropdonwProvider };