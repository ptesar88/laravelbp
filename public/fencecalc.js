//import Box from '@mui/material';
//import React from "react";
//import ReactDOM from "react-dom";
//import UserSelectedFence from "src/components/UserSelectedFence.component";
//import SlopeType from "src/components/SlopeType.component";
//import FenceType from "src/components/FenceType.component";
//import Demand from "src/components/Demand.component.tsx";

const MainLayout = () => {
    return (
        <div>
            <UserSelectedFence />
            <SlopeType />
            <FenceType />
            <Demand />
        </div>
    );
};

//export default MainLayout;

ReactDOM.render(<MainLayout />, document.getElementById("root"));
