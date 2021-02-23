/** @format */

import { Link, BottomNavigation, Typography } from '@material-ui/core';
import React from 'react';

const Footer = () => {
    return (
        <BottomNavigation>
            <Typography
                component="div"
                style={{ zIndex: 1, marginTop: 'calc(5%)', bottom: 0 }}>
                <Link
                    rel="noreferrer"
                    href="https://github.com/MilsonCodes/arcviz">
                    Project GitHub
                </Link>
            </Typography>
        </BottomNavigation>
    );
};

export default Footer;
