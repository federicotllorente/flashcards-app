import React from 'react';

import Menu from './Menu';
import PracticeButton from './PracticeButton';

const Layout = props => {
    return (
        <React.Fragment>
            <Menu />
            <PracticeButton />
            {props.children}
        </React.Fragment>
    );
}

export default Layout;