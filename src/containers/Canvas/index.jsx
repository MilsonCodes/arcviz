import { Container, Typography, TextField, Button, Modal } from '@material-ui/core';
import React from 'react';
import Stack from '../../components/Stack';
import AddIcon from '@material-ui/icons/Add';
import Variable from '../../components/Variable';

const Canvas = (props) => {
    const [variables, updateVariables] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const [formState, setFormState] = React.useState({'name': null, 'value': null})

    const handleChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        setFormState({...formState, [name]: value});
    };

    const handleSubmit = event => {
        event.preventDefault();
        addVariable({'name': formState.name, 'value': formState.value});
        handleClose();
        setFormState({'name': null, 'value': null});
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const addVariable = variable => {
        variables.push(variable);
        updateVariables(variables);
    };

    return (
        <Container maxWidth="lg" style={{ padding: '15px', borderRadius: '15px', backgroundColor: '#fafafa'}}>
            <Typography component="div" style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', height: '80vh'}}>
                <TextField style={{ width: '25ch' }} id="title" label="Title" defaultValue={props.title}/>
                <Typography component="div" style={{ display: 'flex', flexDirection: 'column', padding: '20px', height: '80vh'}}>
                    <Button endIcon={<AddIcon></AddIcon>} variant="contained" onClick={() => handleOpen()}>
                        Add New Variable
                    </Button>
                    <Modal open={open} onClose={() => handleClose()}>
                        <Container maxWidth="sm" style={{ display: 'flex', marginTop: '100px', padding: '15px', backgroundColor: '#fafafa'}}>
                            <Typography variant="h6">Create New Variable</Typography>
                            <form onSubmit={handleSubmit} style={{ margin: '5px', padding: '5px', width: '25ch'}}>
                                <TextField name="name" onChange={handleChange} value={formState.name} id="name" label="Name"></TextField>
                                <TextField name="value" onChange={handleChange} value={formState.value} id="value" label="Value"></TextField>
                                <Button type="submit">Add</Button>
                            </form>
                        </Container>
                    </Modal>
                    <Container>
                        {variables.map(v => (<Variable key={v.name + "" + (v.value)} name={v.name} value={v.value}/>))}
                    </Container>
                    <p>Registers</p>
                    <Stack></Stack>
                </Typography>
            </Typography>
        </Container>
    );
}

export default Canvas;
