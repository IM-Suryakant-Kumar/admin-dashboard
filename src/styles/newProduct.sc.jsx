import styled from "@emotion/styled";
import { Box, Button, Stack, Typography } from "@mui/material";

export const Container = styled(Box)`
	flex: 4;
	margin-top: 1.25rem;
`;

export const Title = styled(Typography)``;

export const Form = styled.form`
    margin-top: 0.625em;
`;

export const FormItem = styled(Stack)`
    width: 250px;
    margin-bottom: 0.625em;
`;

export const Label = styled.label`
    color: gray;
    font-weight: 600;
    margin-bottom: 0.625em;
`;

export const Input = styled.input`
    padding: 0.625em;
`;

export const Options = styled.select`
    padding: 0.625em;
`;

export const Option = styled.option``;

export const SButton = styled(Button)`
    margin-top: 0.625em;
    padding: 0.4375em 0.625em;
    border-radius: 10px;
    background-color: darkblue;
    color: white;
    font-weight: 600;
    &:hover {
        background-color: darkblue;
    }
`;
