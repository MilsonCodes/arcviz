/** @format */

import { Container, Typography, TextField } from '@material-ui/core';
import React from 'react';
import Stack from '../../components/Stack';
import Variable from '../../components/Variable';
import AddVariableModal from '../../components/Variable/add';
import styled from 'styled-components';

const Settings = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: row;
`;

const Canvas = (props) => {
    const [variables, updateVariables] = React.useState([]);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const addVariable = (v) => {
        variables.push(<Variable name={v.name} value={v.value}></Variable>);
        updateVariables(variables);
    };

    return (
        <Container
            maxWidth="lg"
            style={{
                padding: '15px',
                borderRadius: '15px',
                backgroundColor: '#fafafa',
            }}>
            <Settings>
                <TextField
                    style={{ width: '25ch' }}
                    id="title"
                    label="Title"
                    defaultValue={props.title}
                />
                <AddVariableModal
                    open={open}
                    handleClose={handleClose}
                    handleOpen={handleOpen}
                    add={addVariable}></AddVariableModal>
            </Settings>
            <Typography
                component="div"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '20px',
                    height: '80vh',
                }}>
                <Container>{variables}</Container>
                <p>Registers</p>
                <Stack></Stack>
            </Typography>
        </Container>
    );
};

export default Canvas;
