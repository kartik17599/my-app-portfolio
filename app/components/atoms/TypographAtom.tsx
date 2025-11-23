import { Typography } from '@mui/material';
import React from 'react';

type TypographyAtomProps = {
    text: string;
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2';
    align?: 'left' | 'center' | 'right' | 'justify';
    fontFamily?: string;
    fontSize?: string | number;
    children?: React.ReactNode;
}

export const TypographyAtom: React.FC<TypographyAtomProps> = ({
    text,
    variant,
    align,
    fontFamily,
    fontSize,
    children
}) => {
    return(
       <>
      <Typography sx={{ textAlign: align, fontFamily: fontFamily, fontSize: fontSize }} variant={variant}>
        {text}
        {children}
        </Typography>
       </>
    )
}