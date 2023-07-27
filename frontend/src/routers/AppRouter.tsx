import React, {ReactNode} from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import {BrowserRouter, Link, NavLink, Route, Routes} from "react-router-dom";
import About from "../components/About";
import NewCourse from "../components/NewCourse";
import Courses from "../components/Courses";
import Menubar from "../components/Menubar";
import Footer from "../components/Footer";
import Students from '../components/Students';
import NewStudent from '../components/NewStudent';

type Props = {};
const AppRouter =  () => {
    const linksArray=["Courses", "Enrollments"]
    const childrenArray=["Profile", "My Account", "Logout"]

    return (
    <>
    <BrowserRouter>
        <div>
            {<Menubar links={linksArray} children={childrenArray}/>}
            <main>
            <Routes>
                <Route path="/" element={<App/>} index/>
                {<Route path="/about" element={<About/>}/>}
                {<Route path="/courses/new" element={<NewCourse/>}/>}
                {<Route path="/courses/index" element={<Courses/>}/>}
                {<Route path="/students/new" element={<NewStudent/>}/>}
                {<Route path="/students/index" element={<Students/>}/>}
            </Routes>
            </main>
            <Footer/>
        </div>
    </BrowserRouter>
    </>
    );
};

export default AppRouter;
