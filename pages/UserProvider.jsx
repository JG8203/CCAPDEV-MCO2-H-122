import React, { useState } from 'react';
import { UserContext } from './UserContext';
export default UserProvider;
 function UserProvider({ children }) {
    const [user, setUser] = useState(null);
     const [isLoggedIn, setIsLoggedIn] = useState(false);
     const users = [
         { username: 'SammyPaws', password: 'sam' },
         { username: 'user2', password: 'password2' },
         // Add more users as needed
     ];
     const login = ({ username, password }) => {
         const user = users.find(user => user.username === username && user.password === password);

         if (user) {
             setUser(user);
             setIsLoggedIn(true);
         } else {
             // TODO
         }
     };

     return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}