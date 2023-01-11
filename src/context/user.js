import React, {useState} from "react";

const UserContext = React.createContext(); //ContextObject

//Provider component
function UserProvider({children}){
   const [user, setUser] = useState(null);

   return (
   <UserContext.Provider value={ {user, setUser} }>
      {children}
   </UserContext.Provider>
   )
}

export { UserContext, UserProvider };