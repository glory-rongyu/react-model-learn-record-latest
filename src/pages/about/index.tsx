import React from 'react';
import {Link} from "react-router-dom";

const Index = () => {
    return (
        <div>
            <h1>about</h1>
            <Link to={'/home'}>跳转home</Link>
        </div>
    );
};

export default Index;
