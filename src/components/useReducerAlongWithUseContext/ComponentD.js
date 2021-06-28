import React, { useCallback, useContext } from 'react';
import { countContext } from '../../App';

function ComponentD() {
    const counterContext = useContext(countContext);
    return (
        <div>
             Comp D - {counterContext.countState}
            <button onClick={() => counterContext.countDispatch('increment')}>Increment</button>
            <button onClick={() => counterContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={() => counterContext.countDispatch('reset')}>Reset</button>
        </div>
    );
}

export default ComponentD;