/** @format */

import React from 'react';
import { Container } from '@material-ui/core';

const Variable = (props) => {
    const [state, updateState] = React.useState({
        name: props.name,
        value: props.value,
    });

    const editVariable = (v) => {
        updateState({ name: v.name, value: v.value });
    };

    return (
        <Container
            style={{
                backgroundColor: '#fafafa',
                borderWidth: '1px',
                borderColor: '#c7c7c7',
                borderRadius: '50px',
            }}>
            Variable {state.name}: <br></br>
            {state.value}
            {state.name == null
                ? state.value == null
                    ? editVariable({ name: 'x', value: '0x4325FA1' })
                    : editVariable({ name: 'x', value: state.value })
                : state.value == null
                ? editVariable({ name: state.name, value: '0x4325FA1' })
                : null}
        </Container>
    );
};

export default Variable;
