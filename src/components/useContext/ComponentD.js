import React, { useContext } from 'react';
import { channelContext, UserContext } from './ComponentA';

function ComponentD(props) {
    const user = useContext(UserContext);
    const channel = useContext(channelContext);
    return (
        <div>
            <div>{user}</div>
            <div>{channel}</div>
        </div>
    );
}

export default ComponentD;