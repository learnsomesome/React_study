import React, { createContext } from 'react';
import Cpn from "./06_useCallback/01_callback无性能优化";
// import Cpn2 from "./05_useReducer/profile";

export const UserContext = createContext();

export default function App() {
  
  // const [isShow, setIsShow] = useState(true);

  return (
    <div>
      <UserContext.Provider value={{name: "mike", age: 18}}>
        <Cpn />
      </UserContext.Provider>
      {/* { isShow && <Cpn /> }
      <button onClick={() => setIsShow(!isShow)}>切换</button> */}
    </div>
  )
}

