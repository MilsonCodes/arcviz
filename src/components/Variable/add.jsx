/** @format */

import React from 'react';
import {
    Container,
    Button,
    Modal,
    TextField,
    Typography,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const AddVariableModal = (props) => {
    const [formState, setFormState] = React.useState({
        name: null,
        value: null,
    });

    const handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        setFormState({ ...formState, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.add({ name: formState.name, value: formState.value });
        props.handleClose();
        setFormState({ name: null, value: null });
    };

    return (
        <Container>
            <Button
                endIcon={<AddIcon></AddIcon>}
                variant="contained"
                onClick={props.handleOpen}>
                Add New Variable
            </Button>
            <Modal open={props.open} onClose={props.handleClose}>
                <Container
                    maxWidth="sm"
                    style={{
                        display: 'flex',
                        marginTop: '100px',
                        padding: '15px',
                        backgroundColor: '#fafafa',
                    }}>
                    <Typography variant="h6">Create New Variable</Typography>
                    <form
                        onSubmit={handleSubmit}
                        style={{
                            margin: '5px',
                            padding: '5px',
                            width: '25ch',
                        }}>
                        <TextField
                            name="name"
                            onChange={handleChange}
                            value={formState.name}
                            id="name"
                            label="Name"></TextField>
                        <TextField
                            name="value"
                            onChange={handleChange}
                            value={formState.value}
                            id="value"
                            label="Value"></TextField>
                        <Button type="submit">Add</Button>
                    </form>
                </Container>
            </Modal>
        </Container>
    );
};

export default AddVariableModal;
