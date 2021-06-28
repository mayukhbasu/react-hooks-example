import React from 'react';
import ComponentB from './ComponentB';

export const UserContext = React.createContext();
export const channelContext = React.createContext();

function ComponentA() {
   
    return (
        <div>
           <UserContext.Provider value={'Mayukh'}>
                <channelContext.Provider value={'Memories of Tekken'}>
                    <ComponentB/>
                </channelContext.Provider>
            </UserContext.Provider> 
        </div>
    );
}

export default ComponentA;