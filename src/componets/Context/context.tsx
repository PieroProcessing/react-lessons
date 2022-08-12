import React from 'react';

type ContextType = { value: boolean, setter: Function };


export const ThemeContext = React.createContext < ContextType | undefined >(undefined);