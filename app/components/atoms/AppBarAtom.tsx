import { AppBar } from '@mui/material';
import React from 'react';

type AppBarAtomProps = {
position?: 'fixed' | 'absolute' | 'relative' | 'static' | 'sticky';
color?: 'primary' | 'secondary' | 'default' | 'inherit' | 'transparent';
sx?: object;
children?: React.ReactNode;
}

export const AppBarAtom: React.FC<AppBarAtomProps> = ({ position, color, sx, children }) => {
    return(
        <>
        <AppBar position={position} color={color} sx={sx}>
            {children}
        </AppBar>
        </>
    )
}