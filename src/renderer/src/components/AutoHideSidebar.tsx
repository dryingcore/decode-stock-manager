import React, { useState } from 'react'
import { Drawer, List, ListItemButton, ListItemText, Box, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

const drawerWidth = 300

export const AutoHideSidebar: React.FC = () => {
  const [open, setOpen] = useState(false)

  const handleMouseEnter = () => setOpen(true)
  const handleMouseLeave = () => setOpen(false)

  return (
    <Box
      sx={{
        width: open ? drawerWidth : 60,
        transition: 'width 0.3s',
        overflow: 'hidden',
        height: '100vh',
        position: 'fixed',
        zIndex: 1200,
        top: 0,
        left: 0,
        bgcolor: 'lightgray',
        borderRight: '1px solid #ccc',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <IconButton sx={{ mt: 2 }}>
        <MenuIcon />
      </IconButton>

      <Drawer
        variant="permanent"
        open={open}
        PaperProps={{
          sx: {
            width: open ? drawerWidth : 0,
            boxSizing: 'border-box',
            overflowX: 'hidden',
            transition: 'width 0.3s'
          }
        }}
      >
        <List>
          <ListItemButton>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Estoque" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Relatórios" />
          </ListItemButton>
        </List>
      </Drawer>
    </Box>
  )
}
