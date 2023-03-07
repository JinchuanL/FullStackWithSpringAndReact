import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { Paper } from '@mui/material';

export default function User() {

  const paperStyle = {padding: '50px 20px', width:800, margin:"20px auto"}
  const [firstName, setfirstName] = React.useState('')
  const [lastName, setlastName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [mobile, setMobile] = React.useState('')
  const [user, setUser] = React.useState([])
  
  const handleClick = (e)=>{
    e.preventDefault()
    const User = {firstName, lastName, email, mobile}
    console.log(User)
    fetch("http://localhost:8080/user/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(User)
    }).then(()=>{
      console.log("New User Added")
    })
  }

  React.useEffect(()=>{
    fetch("http://localhost:8080/user/getAll")
    .then(res=>res.json())
    .then((result)=>{
      setUser(result);
    })
  },[])

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Paper elevation={3} style={paperStyle}>
        <h1 style={{color:"blue"}}><u>Add User</u></h1>
      <TextField id="outlined-basic" label="First Name" variant="outlined" fullWidth value={firstName} onChange={(e)=>setfirstName(e.target.value)}/><br/><br/>
      <TextField id="outlined-basic" label="Last Name" variant="outlined" fullWidth value={lastName} onChange={(e)=>setlastName(e.target.value)}/><br/><br/>
      <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth value={email} onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
      <TextField id="outlined-basic" label="Mobile" variant="outlined" fullWidth value={mobile} onChange={(e)=>setMobile(e.target.value)}/><br/><br/>
      <Button variant="contained" endIcon={<SendIcon />} onClick={handleClick}>Submit</Button>
      </Paper>
      
      <Paper elevation={3} style={paperStyle}>
        <h1 style={{color:"blue"}}><u>User Lists</u></h1>
        
        {user.map(user=>(
          <Paper elevation={6} style={{margin:"10px", padding:"15px", textAlign:"left"}} key={user.id}>
            Id:{user.id}<br/>
            First Name:{user.firstName}<br/>
            Last Name:{user.lastName}<br/>
            Email:{user.email}<br/>
            Mobile:{user.mobile}<br/>
          </Paper>  
        ))}

      </Paper>
    </Box>
  );
}