import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@material-ui/icons/Menu'

import { Link } from 'react-router-dom'
import MuiLink from '@material-ui/core/Link'

export default function TemporaryDrawer({authenticatedUser, authenticatedcompany, firstname, lastname, userid, companyName}) { 
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
        <List>
            <ListItem button key={'signupcompany'}>
                <MuiLink component = {Link} to ={ `/signup`} style={{color : '#424242'}} > 
                    <ListItemText>Signup Customer</ListItemText>
                </MuiLink>
            </ListItem>
            <ListItem button key={'logincompany'}>
                <MuiLink component = {Link} to ={ `/login`} style={{color : '#424242'}} > 
                    <ListItemText>Login Customer</ListItemText>
                </MuiLink>
            </ListItem>

            <Divider />

            <ListItem button key={'signupcompany'}>
                <MuiLink component = {Link} to ={ `/companySignup`} style={{color : '#424242'}} > 
                    <ListItemText>Signup Company</ListItemText>
                </MuiLink>
            </ListItem>
            <ListItem button key={'logincompany'}>
                <MuiLink component = {Link} to ={ `/companyLogin`} style={{color : '#424242'}} > 
                    <ListItemText>Login Company</ListItemText>
                </MuiLink>
            </ListItem>

      </List>
    </Box>
  )

  return (
    <div>
        <React.Fragment key={'left'}>
            <Button onClick={toggleDrawer('left', true)}>
                <MenuIcon style={{color : 'black'}}/>
            </Button>
          <Drawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
          >
            {list('left')}
          </Drawer>
        </React.Fragment>
    </div>
  )
}