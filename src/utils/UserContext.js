import { createContext } from "react";

const UserContext = createContext({
    loggedInUser:"dummyUser",
});

export default UserContext;