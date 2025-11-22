import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import React from 'react';


export const Header: React.FC = () => {
    return(
        <>
       <Container maxWidth='lg' >
                <Typography sx={{textAlign: 'center', fontFamily: 'cursive', fontSize: '36px'}}>Kartik Karanwal</Typography>
          
            <Typography sx={{textAlign: 'center', fontFamily: 'cursive', fontSize: '18px', width: '100%'}}>
            Front-End Developer | Data Analyst | DevOps Engineer    
            </Typography> 
             </Container>   
         <AppBar position='fixed' color='primary' sx={{top: 0}}>

         </AppBar>
        </>
    )
}