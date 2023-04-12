import { Button } from '@mui/material'
import React from 'react'
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import BottomNavigation from '@mui/material/BottomNavigation';
import Footer from './footer';
import Autocomplete from '@mui/material/Autocomplete';




const Auth = () => {
    return (
        <>
        <body>
        <div className='signin'>
            <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 96, height: 96}}/><br></br>
            <h1>Welcome!</h1>
            <p>Let's connect to your workspace.<br></br> Please enter your email to continue.</p>
            <TextField id="outlined-basic" label="Email Address" variant="outlined" size="small" fullWidth /> <br>
            </br>
                    {/* <TextField
                error
                id="outlined-error"
                label="Error"
                defaultValue="Hello World"
                /> */}
            <TextField id="outlined-basic" label="Password" variant="outlined" size="small" fullWidth/> <br>
            </br>
            <Button variant="contained" disableElevation>SIGN IN</Button>
            </div>

            </body>
            <footer>
            <Footer/></footer>
            </>
    )
}

export default Auth
