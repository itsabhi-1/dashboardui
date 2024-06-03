import React from 'react'
import { FaDatabase } from "react-icons/fa6";
import { GiWarhammer } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
import { FcDataProtection } from "react-icons/fc";
import { MdDevices } from "react-icons/md";
import { MdOutlineSecurity } from "react-icons/md";
import { MdCancel } from "react-icons/md";

import { styled, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PeopleIcon from '@mui/icons-material/People';
import { BiSolidAnalyse } from "react-icons/bi";
import LineChart from '../component/LineChart'
import DoughnutChart from './DoughnutChart';
import BarChart from './BarChart';
import PolarChart from '../component/PolarChart';


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function ResponsiveDrawer() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [open, setOpen] = React.useState(!isMobile);
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    React.useEffect(() => {
        setOpen(!isMobile);
    }, [isMobile]);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };
    const menuItems = [
        { text: 'Dashboard', icon: <DashboardIcon /> },
        { text: 'Traffic', icon: <MdOutlineSecurity  /> },
        { text: 'Charts', icon: <TrendingUpIcon /> },
        { text: 'Analytics', icon: <BiSolidAnalyse /> },
        { text: 'Attacks', icon: <GiWarhammer /> },
        { text: 'Data security', icon: <FaDatabase /> },
        { text: 'User behavior', icon: <FaUserCircle /> },
        { text: 'Destination', icon: <BiSolidAnalyse /> },
        { text: 'Protection', icon: <FcDataProtection  /> },
        { text: 'Devices', icon: <MdDevices  /> },
        { text: 'Users', icon: <PeopleIcon /> }
    ];

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                open={open && !isMobile}
                sx={{ bgcolor: '#2a3142' }} // Change navbar background color here
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && !isMobile && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div" >
                        <div className="d-flex ">
                            <a href="#" className="logo">
                                <i className="bx bx-code-alt" />
                                <div className="logo-name"><span>Cyber</span>Security</div>
                            </a>
                        </div>

                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer

                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        bgcolor: '#2a3949', // Change sidebar background color here
                    },
                }}
                variant={isMobile ? 'temporary' : 'persistent'}
                anchor="left"
                open={open}
                onClose={handleDrawerClose}
            >

                <DrawerHeader>

                    <IconButton onClick={handleDrawerClose} sx={{ color: '#8295a9' }}>
                        {theme.direction === 'ltr' ? <MdCancel /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                {/* <Divider /> */}
                <List sx={{ mt: 5 }}>
                    {menuItems.map((item, index) => (
                        <ListItem key={item.text} disablePadding>

                            <ListItemButton
                                selected={selectedIndex === index}
                                onClick={(event) => handleListItemClick(event, index)}
                                sx={{

                                    color: selectedIndex === index ? '#ffffff' : '#8295a9', // Change color when active
                                    bgcolor: selectedIndex === index ? '#263442' : 'transperent', // Change background color when active
                                }}
                            >
                                <ListItemIcon
                                    sx={{ color: '#ffffff' }} >
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Main open={open && !isMobile} sx={{ padding: 0, bgcolor: '#1f2330' }}>
                <DrawerHeader />
                <div className="container" >
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="page_title_box">
                                <h4>Dashboard</h4>
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-xl-3">
                            <div className="mini-stat card">
                                <div className="card-body mini-stat-img card_body">
                                    <div className="mini-stat-icon">
                                        <i className="float-end mdi mdi-cube-outline" />
                                    </div>
                                    <div className="text-white">
                                        <h6 className="text-uppercase mb-3 font-size-16 text-white">high risk events</h6>
                                        <h2 className="mb-4 text-white">29</h2>
                                        {/* <span className="badge bg-info"> +11% </span> */}
                                        <span className="ms-2">of 38 total</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-xl-3">
                            <div className="mini-stat card">
                                <div className="card-body mini-stat-img card_body">
                                    <div className="mini-stat-icon">
                                        <i className="float-end mdi mdi-cube-outline" />
                                    </div>
                                    <div className="text-white">
                                        <h6 className="text-uppercase mb-3 font-size-16 text-white">Risky activities</h6>
                                        <h2 className="mb-4 text-white">08</h2>
                                        {/* <span className="badge bg-info"> +11% </span> */}
                                        <span className="ms-2"> of 26 total</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-xl-3">
                            <div className="mini-stat card">
                                <div className="card-body mini-stat-img card_body">
                                    <div className="mini-stat-icon">
                                        <i className="float-end mdi mdi-cube-outline" />
                                    </div>
                                    <div className="text-white">
                                        <h6 className="text-uppercase mb-3 font-size-16 text-white">high risk users</h6>
                                        <h2 className="mb-4 text-white">06</h2>
                                        {/* <span className="badge bg-info"> +11% </span> */}
                                        <span className="ms-2">of 09 total</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-xl-3">
                            <div className="mini-stat card">
                                <div className="card-body mini-stat-img card_body">
                                    <div className="mini-stat-icon">
                                        <i className="float-end mdi mdi-cube-outline" />
                                    </div>
                                    <div className="text-white">
                                        <h6 className="text-uppercase mb-3 font-size-16 text-white">devices with issues</h6>
                                        <h2 className="mb-4 text-white">01</h2>
                                        {/* <span className="badge bg-info"> +11% </span> */}
                                        <span className="ms-2">of 12 total</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-md-6 ">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="charts-lable ">Destination Ports</h4>
                                    <div className='doughnut_chart_height'>
                                        <PolarChart />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 ">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="charts-lable ">Alerts</h4>
                                    <div className='doughnut_chart_height'>
                                        <BarChart />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 ">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="charts-lable ">Categories</h4>
                                    <div className='doughnut_chart_height'>
                                        <DoughnutChart />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12 col-md-6 col-sm-12">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="charts-lable ">Timestamps</h4>
                                    <div className='line_chart_height'>
                                        <LineChart />
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="row">
                    </div>
                </div>
            </Main>

        </Box>
    );
}




// function Sidebar() {
// <div className="sidebar ">
//     <a href="#" className="logo">
//         <i className="bx bx-code-alt" />
//         <div className="logo-name"><span>Cyber</span>Security</div>
//     </a>
//     <ul className="side-menu">
//         <li className="active"><a href="#"><i className="bx bxs-dashboard"><MdDashboard /></i>Dashboard</a></li>
//         <li><a href="#"><i className="bx bx-store-alt"><LuLineChart /></i>charts</a></li>
//         <li><a href="#"><i className="bx bx-analyse"><BiAnalyse /></i>Analytics</a></li>
//         <li><a href="#"><i className="bx bx-message-square-dots"><IoChatbubbleEllipsesOutline /></i>Chat</a></li>
//         <li><a href="#"><i className="bx bx-group"><ImUsers /></i>Users</a></li>
//         <li><a href="#"><i className="bx bx-cog"><IoMdSettings /></i>Settings</a></li>
//     </ul>
//     <ul className="side-menu">
//         <li>
//             <a href="#" className="logout">
//                 <i className="bx bx-log-out-circle"><BiLogOutCircle/></i>
//                 Logout
//             </a>
//         </li>
//     </ul>
// </div>

//     )
// }

// export default Sidebar;
