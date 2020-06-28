import React from 'react';

export const StoreContext=React.createContext(null);
export const Provider=(props)=>{
    return(
        <StoreContext.Provider value={props.value}>
            {props.children}
        </StoreContext.Provider>
    )
}