import React, { createContext } from 'react';
import Cpn from "./11_自定义Hook/04_自定义Hook练习-localStorage存储";
// import Cpn2 from "./05_useReducer/profile";

export const UserContext = createContext();
export const TokenContext = createContext();

export default function App() {
  
  // const [isShow, setIsShow] = useState(true);

  return (
    <div>
      <UserContext.Provider value={{name: "mike", age: 18}}>
        <TokenContext.Provider value="asdscxasd">
          <Cpn />
        </TokenContext.Provider>
      </UserContext.Provider>
      {/* { isShow && <Cpn /> }
      <button onClick={() => setIsShow(!isShow)}>切换</button> */}
    </div>
  )
}

