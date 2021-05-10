import React from 'react' ;
import { Parent, ParentSibling, Child } from '../index'

const OverParent = ():JSX.Element => {

    return (
        <>
            <Parent />
            <ParentSibling> 
                <Child isActive={true} element={{ id: 'Test', age: 46 }}/>
                <Child isActive={true} element={{ id: 'Test', age: 46 }}/>
                <Child isActive={true} element={{ id: 'Test', age: 46 }}/>
            </ParentSibling>
        </>
    );
}
export default OverParent;