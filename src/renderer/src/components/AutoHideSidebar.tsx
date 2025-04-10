import React, { useState } from 'react'
import { Drawer, List, ListItemButton, ListItemText, Box, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

const drawerWidth = 300

interface AutoHideSidebarProps {
  setActiveView: (view: string) => void
}

export const AutoHideSidebar: React.FC<AutoHideSidebarProps> = ({ setActiveView }) => {
  const [open, setOpen] = useState<boolean>(false)

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
          <ListItemButton onClick={() => setActiveView('Dashboard')}>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
          <ListItemButton onClick={() => setActiveView('Estoque')}>
            <ListItemText primary="Estoque" />
          </ListItemButton>
          <ListItemButton onClick={() => setActiveView('Relatórios')}>
            <ListItemText primary="Relatórios" />
          </ListItemButton>
        </List>
      </Drawer>
    </Box>
  )
}
