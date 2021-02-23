import React from 'react';
import { Container } from '@material-ui/core';

const Variable = (props) => {
    const [state, updateState] = React.useState({'name': props.name, 'value': props.value})

    return (
        <Container style={{ backgroundColor: '#fafafa', borderWidth: '1px', borderColor: '#c7c7c7', borderRadius: '50px'}}>
            Variable {state.name}: <br></br>
            {state.value}
        </Container>
    )
}

export default Variable;