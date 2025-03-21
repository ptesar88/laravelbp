import { Grid, useMediaQuery, Theme } from '@mui/material';

import Welcome from './Welcome';
import MonthlyRevenue from './MonthlyRevenue';
const Logo = './../assets/logo.png';

const Dashboard = () => {
    const isXSmall = useMediaQuery((theme: Theme) =>
        theme.breakpoints.down('sm')
    );
    const isSmall = useMediaQuery((theme: Theme) =>
        theme.breakpoints.down('lg')
    );
    const BLOCKS_SPACING = 2;

   
    return isXSmall ? (
        <Grid container spacing={1}>
            <Grid item xs={12} justifyContent={"center"} alignItems={"center"}> 
                <img src={Logo} alt="Logo" />
            </Grid>
            <Grid item xs={12}>
                <Welcome />
            </Grid>
            <Grid item xs={12}>
                <MonthlyRevenue />
            </Grid>
        </Grid>
    ) : isSmall ? (
        <Grid container spacing={BLOCKS_SPACING} padding={1}>
            <Grid item xs={12} justifyContent={"center"} alignItems={"center"}> 
                <img src={Logo} alt="Logo" />
            </Grid>
            <Grid item xs={12}>
                <Welcome />
            </Grid>
            <Grid item xs={12}>
                <MonthlyRevenue />
            </Grid>
        </Grid>
    ) : (
        <Grid container spacing={BLOCKS_SPACING} padding={1}>
            <Grid item xs={12} justifyContent={"center"} alignItems={"center"}> 
                <img src={Logo} alt="Logo" />
            </Grid>
            <Grid item xs={12}>
                <Welcome />
            </Grid>
            <Grid item xs={12}>
                <MonthlyRevenue />
            </Grid>
        </Grid>
    );
};

export default Dashboard;