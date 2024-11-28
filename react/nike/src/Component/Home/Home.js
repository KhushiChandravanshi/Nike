import React from 'react';
import Navigation from './Navigation';
import Xyz from './Xyz';
import Box1 from './Box1';
import Box2 from './Box2';
import Productslider from './Productslider';
import Search from './Search';
import QuickSearch from './QuickSearch';
import Signin from './Signin';
import Btt from './Btt';
import Describe from './Describe';

const Home = () => {
    return(
        <>
            <Navigation/>
            <Xyz/>
            <Box1/>
            <Box2/>
            <Productslider/>
            <Search/>
            <QuickSearch/>
            <Signin/>
            <Btt/>
            <Describe/>
        </>
    );
}


export default Home;