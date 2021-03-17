import React from 'react';

import Menu from './Menu';

const Layout = props => {
    return (
        <React.Fragment>
            <Menu />
            <h3>And this the profile details</h3>
            <h3>And this one the 'Practice' button</h3>
            {props.children}
        </React.Fragment>
    );
}

export default Layout;