import { Container, Typography, TextField, Button, IconButton } from '@material-ui/core';
import React from 'react';
import Stack from '../../components/Stack';
import AddIcon from '@material-ui/icons/Add';
import Variable from '../../components/Variable';

const Canvas = (props) => {
    const [variables, updateVariables] = React.useState([]);

    const addVariable = variable => {
        variables.append(variable);
    };

    return (
        <Container maxWidth="lg" style={{ padding: '15px', borderRadius: '15px', backgroundColor: '#fafafa'}}>
            <Typography component="div" style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', height: '80vh'}}>
                <TextField style={{ width: '25ch' }} id="title" label="Title" defaultValue={props.title}/>
                <Typography component="div" style={{ height: '80vh'}}>
                    <IconButton>
                        <AddIcon></AddIcon>
                    </IconButton>
                    <Button></Button>
                    <p>Registers</p>
                    <Variable name="x" value="0x105F"></Variable>
                    <Stack></Stack>
                </Typography>
            </Typography>
        </Container>
    );
}

export default Canvas;
