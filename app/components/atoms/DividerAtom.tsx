import { Divider } from '@mui/material';
import React from 'react';

type DividerAtomProps = {
orientation?: 'horizontal' | 'vertical';
borderRadius?: number
textAlign?: 'left' | 'center' | 'right' | 'justify';
borderBottomWidth?: number;
borderBottomColor?: string;
}

export const DividerAtom: React.FC<DividerAtomProps> = ({ orientation, borderRadius, textAlign, borderBottomWidth, borderBottomColor }) => {
    return(
        <>
        <Divider orientation={orientation} sx={{borderRadius: borderRadius, textAlign: textAlign, borderBottomWidth: borderBottomWidth, borderBottomColor: borderBottomColor}} flexItem/>
        </>
    )
}