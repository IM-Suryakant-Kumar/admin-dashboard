import styled from "@emotion/styled";
import { Box, Button, Stack, Typography } from "@mui/material";

export const Container = styled(Box)`
	flex: 4;
`;

export const Title = styled(Typography)``;
export const Form = styled.form`
	display: flex;
	flex-wrap: wrap;
`;
export const FormItem = styled(Stack)`
	width: 400px;
	margin: 0.625em 1.25em 0 0;
`;
export const Label = styled.label`
	margin-bottom: 0.75em;
	font-size: 0.875rem;
	font-weight: 600;
	color: #a09a9a;
`;
export const Input = styled.input`
	height: 40px;
	padding: 0.625em;
	border: 1px solid gray;
	border-radius: 5px;
`;
export const GenderCont = styled(Stack)`
	flex-direction: row;
	align-items: center;
	& > label {
		font-size: 1rem;
		font-weight: 400;
		margin: 0.625em;
		color: #555;
	}
`;
export const Options = styled.select`
	height: 40px;
	border-radius: 0.3125em;
`;
export const Option = styled.option``;

export const SButton = styled(Button)`
	width: 200px;
	background-color: darkblue;
	color: white;
	font-weight: 600;
	border-radius: 0.625em;
    margin-top: 1.9em;
    align-self: flex-end;
	& {
		background-color: darkblue !important;
	}
`;
