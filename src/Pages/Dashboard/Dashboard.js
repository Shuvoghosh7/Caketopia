import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSideber from './DashboardSideber';

const Dashboard = () => {
    return (
        <div>
            <DashboardSideber>
                <Outlet></Outlet>
            </DashboardSideber>
        </div>
    );
};

export default Dashboard;