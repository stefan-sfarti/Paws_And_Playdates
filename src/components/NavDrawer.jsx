import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import '../App.css';

const StyledListItem = styled(ListItem)(({isactive }) => ({
    '&:focus, &:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.08)',
        borderRadius: '4px',
        outline: 'none',
    },
    '&.Mui-selected': {
        backgroundColor: 'rgba(0, 0, 0, 0.08)',
        borderRadius: '4px',
    },
    backgroundColor: isactive ? 'rgba(0, 0, 0, 0.08)' : 'inherit',
    borderRadius: isactive ? '4px' : 'inherit',
}));

const NavDrawer = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleDrawerToggle = (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setIsOpen(!isOpen);
    };

    const navItems = [
        { url: '/', label: 'Home' },
        { url: '/profile', label: 'Profile' },
        { url: '/map', label: 'Map' },
        { url: '/about', label: 'About' },
    ];

    return (
        <>
            <IconButton
                edge="start"
                aria-label="menu"
                onClick={handleDrawerToggle}
                size="large"
            >
                <MenuIcon />
            </IconButton>

            <Drawer
                anchor="right"
                open={isOpen}
                onClose={handleDrawerToggle}
                aria-label="Navigation Drawer"
            >
                <div
                    role="presentation"
                    onClick={handleDrawerToggle}
                    onKeyDown={handleDrawerToggle}
                >
                    <List className="list">
                        {navItems.map(({ url, label }) => (
                            <StyledListItem
                                button
                                key={url}
                                component={NavLink}
                                to={url}
                                isactive={window.location.pathname === url ? 1 : 0}
                            >
                                <ListItemText primary={label} />
                            </StyledListItem>
                        ))}
                    </List>
                </div>
            </Drawer>
        </>
    );
};

export default NavDrawer;