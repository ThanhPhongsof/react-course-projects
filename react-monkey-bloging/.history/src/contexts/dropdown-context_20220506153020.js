const { createContext, useContext } = require("react");

const DropdonwContext = createContext();
const DropdonwProvider = (props) => {
  return (
    <DropdonwContext.Provider value={props}>
      {props.children}
    </DropdonwContext.Provider>
  );
};

const useDropdown = () => {
  const context = useContext(DropdonwContext);
  if (typeof context === "underfined")
    throw new Error("useDropdown must be used within DropdownProvider");
  return context;
};

export { useDropdown, DropdownProvider };
