import React from "react";
import {SideBar} from "../components/sidebar/SideBar";
import './MainLayout.style.css'
import {Outlet} from "react-router-dom";

export const MainLayout = () => {
    return (
        <div className={'main-container'}>
            <SideBar/>
            <Outlet/>
        </div>
    )
}