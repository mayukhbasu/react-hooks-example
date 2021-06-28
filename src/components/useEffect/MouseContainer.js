import React, {useState} from 'react';
import MouseEffect from './MouseEffect';


function MouseContainer(props) {
    const [display, setDisplay] = useState(true);
    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle Display</button>
            {display && <MouseEffect/>}
        </div>
    );
}

export default MouseContainer;