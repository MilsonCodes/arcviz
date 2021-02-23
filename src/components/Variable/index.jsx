import React from 'react';
import { Container } from '@material-ui/core';

const Variable = (props) => {
    const [state, updateState] = React.useState({'name': props.name, 'value': props.value})

    return (
        <Container>
            Variable
            {console.log(state)}
        </Container>
    )
}

export default Variable;