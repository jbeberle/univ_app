import React, {useState} from 'react'
import {
    Collapse,
    Drawer,
    IconButton,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    MenuItem,
    Select
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {ExpandLess, ExpandMore} from "@mui/icons-material";

type Props = {
    links: string[];
    children: string[]
};

const DrawerComp = (props: Props) => {
    const [open, setOpen] = useState(false);
    const links = props.links;
    const children = props.children;
    const [collapse, setCollapse] = useState(true);

    const handleClick = () => {
        setCollapse(!collapse)
    }

    return (
        <>
            <Drawer PaperProps={{
                sx: {backgroundColor: "rgba(40, 40, 116, 1)"}
            }} anchor="left" open={open} onClose={() => setOpen(false)}>
                <List>
                    {links.map((link, index) =>
                        <ListItemButton onClick={() => setOpen(false)} key={index} divider>
                            <ListItemIcon>
                                <ListItemText sx={{color: 'white'}}>{link}</ListItemText>
                            </ListItemIcon>
                        </ListItemButton>)}
                    <ListItemButton onClick={handleClick}>
                        <ListItemIcon>
                            <ListItemText primary="Accounts" sx={{color: 'white'}} />
                        </ListItemIcon>
                        {collapse ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>

                    <Collapse in={collapse} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {children.map((child, index) =>
                                <ListItemButton sx={{pl: 4}} onClick={() => setOpen(false)} key={index} divider>
                                <ListItemIcon>
                                    <ListItemText sx={{color: 'white'}}>{child}</ListItemText>
                                </ListItemIcon>
                            </ListItemButton>
                            )}
                        </List>
                    </Collapse>
                </List>
            </Drawer>
            <IconButton sx={{marginLeft: 'auto', color: 'white'}} onClick={() => {
                setOpen(!open)
            }}>
                <MenuIcon/>
            </IconButton>
        </>
    )
}

export default DrawerComp