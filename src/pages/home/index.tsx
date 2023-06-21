import React from 'react';
import {Link} from 'react-router-dom';

const Index = () => {
    return (
        <div>
            <h1>home</h1>
            <Link to={'/about'}>跳转about</Link>
        </div>
    );
};

export default Index;
