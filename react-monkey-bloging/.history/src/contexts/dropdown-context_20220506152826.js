const { createContext } = require("react");

const DropdonwContext = createContext();
const DropdonwProvider = (props) => {
  return (
    <DropdonwContext.Provider value={props}>
      {props.children}
    </DropdonwContext.Provider>
  );
};
