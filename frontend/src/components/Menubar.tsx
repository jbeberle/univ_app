import React, {useState} from 'react';
import {
    AppBar,
    Box,
    Button,
    Container, Divider,
    Grid, ListItemIcon, ListItemText, MenuItem, MenuList, Paper,
    Tab,
    Tabs,
    Toolbar,
    Typography,
    useMediaQuery,
    useTheme
} from "@mui/material";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import DrawerComp from "./DrawerComp";
import {Cloud, ContentCopy, ContentCut, ContentPaste} from "@mui/icons-material";
import Menu from '@mui/material/Menu';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';


type Props = {
    links: string[];
    children: string[];
};

const Menubar2 = (props:Props) => {
    return (
    <Paper sx={{ width: 320, maxWidth: '100%' }}>
        <MenuList>
            <MenuItem>
                <ListItemIcon>
                    <ContentCut fontSize="small" />
                </ListItemIcon>
                <ListItemText>Cut</ListItemText>
                <Typography variant="body2" color="text.secondary">
                    ⌘X
                </Typography>
            </MenuItem>
            <MenuItem>
                <ListItemIcon>
                    <ContentCopy fontSize="small" />
                </ListItemIcon>
                <ListItemText>Copy</ListItemText>
                <Typography variant="body2" color="text.secondary">
                    ⌘C
                </Typography>
            </MenuItem>
            <MenuItem>
                <ListItemIcon>
                    <ContentPaste fontSize="small" />
                </ListItemIcon>
                <ListItemText>Paste</ListItemText>
                <Typography variant="body2" color="text.secondary">
                    ⌘V
                </Typography>
            </MenuItem>
            <Divider />
            <MenuItem>
                <ListItemIcon>
                    <Cloud fontSize="small" />
                </ListItemIcon>
                <ListItemText>Web Clipboard</ListItemText>
            </MenuItem>
        </MenuList>
    </Paper>
);

}

 function MenuPopupState(props:Props) {
    const children = props.children;
    return (
        <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
                <React.Fragment>
                    <Button variant="contained" {...bindTrigger(popupState)}>
                        Accounts
                    </Button>
                    <Menu {...bindMenu(popupState)}>
                        {children.map((child, index) =>
                             <MenuItem key={index} onClick={popupState.close}>{child}</MenuItem>
                        )}
                    </Menu>
                </React.Fragment>
            )}
        </PopupState>
    );
}

const Menubar = (props: Props) => {
    const [value, setValue] = useState(0);
    const theme = useTheme();
    //const isMatch=true;
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
    console.log(isMatch);
    const links = props.links;
    const children = props.children;

    return (
        <>
            <header>
            <AppBar
                sx={{background: "linear-gradient(90deg, rgba(150,0,36,1) 0%, rgba(31,9,121,1) 50%, rgba(200,50,255,1) 100%)"}}>
                <Container sx={{paddingLeft: "inherit"}}>
                    <Toolbar>
                        {isMatch ?
                            <>
                                <Typography>
                                    <ShoppingCartCheckoutIcon/>
                                </Typography>
                                <DrawerComp links={links} children={children}/>
                            </> :
                            <Grid container sx={{placeItems: 'center'}} spacing={1}>
                                <Grid item xs={2}>
                                    <Typography>
                                        <ShoppingCartCheckoutIcon/>
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Tabs indicatorColor="secondary" textColor="inherit" value={value}
                                          onChange={(e, val) => setValue(val)}>
                                        {links.map((link, index) =>
                                            <Tab key={index} label={link}/>
                                        )}
                                    </Tabs>
                                </Grid>
                                <Grid item xs={1}>
                                    <MenuPopupState {...props}/>
                                </Grid>
                                <Grid item xs={3}>
                                    <Box display="flex">
                                        <Button sx={{marginLeft: 'auto', background: "rgba(150,0,36,1)"}}
                                                variant="contained">Login</Button>
                                        <Button sx={{marginLeft: 1, background: "rgba(150,0,36,1)"}}
                                                variant="contained">SignUp</Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        }
                    </Toolbar>
                </Container>
            </AppBar>
            </header>
        </>
    );
};

export default Menubar;