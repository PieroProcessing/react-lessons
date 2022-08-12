import React from 'react';
import { Consumer } from './Consumer';
import { ThemeContextComponent } from './Provider';


export const  ThemeComponent = (): JSX.Element => (
  <ThemeContextComponent>
    <Consumer />
  </ThemeContextComponent>
);