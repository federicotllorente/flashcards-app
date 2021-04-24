import React, { Fragment } from 'react';

import Menu from './Menu';
import PracticeButton from './PracticeButton';

type LayoutProps = {
    children: React.ReactNode | null;
};

const Layout = ({ children }: LayoutProps): JSX.Element => {
    return (
        <Fragment>
            <Menu />
            <PracticeButton />
            {children}
        </Fragment>
    );
}

export default Layout;