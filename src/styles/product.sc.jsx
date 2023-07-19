import styled from "@emotion/styled";
import { Publish } from "@mui/icons-material";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";

export const Container = styled(Box)`
	flex: 4;
	padding: 1.25em;
`;

export const Wrapper = styled(Stack)`
	flex-direction: row;
	justify-content: space-between;
`;

export const Title = styled(Typography)`
	&.name {
		font-weight: 600;
	}
`;

export const SButton = styled(Button)`
	padding: 0.3125em 1.5em;
	background-color: teal;
	color: white;
	border-radius: 0.3125em;
	font-size: 1rem;
	font-weight: 600;
	&:hover {
		background-color: teal;
	}
    &.update {
        padding: 0.3125em;
        background-color: darkblue;
        color: white;
    }
`;

export const Left = styled(Box)`
	flex: 1;
`;
export const Right = styled(Paper)`
	flex: 1;
	padding: 1.25em;
	margin: 1.25em;
`;
export const InfoContainer = styled(Box)`
	&.top {
		display: flex;
		align-items: center;
	}
	&.bottom {
		margin-top: 0.625em;
	}
`;
export const Image = styled.img`
	margin-right: 1.25em;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	object-fit: cover;
    &.upload {
        width: 100px;
        height: 100px;
        border-radius: 0.625em;
    }
`;
export const InfoItem = styled(Stack)`
	width: 150px;
	flex-direction: row;
	justify-content: space-between;
`;
export const ProductKey = styled(Box)``;
export const ProductValue = styled(Box)`
	font-weight: 300;
`;

export const Bottom = styled(Paper)`
    padding: 1.25em;
    margin: 1.25em;
`;

export const Form = styled.form`
    display: flex;
    justify-content: space-between;
`;

export const FormLeft = styled(Stack)`
    display: flex;
`;


export const Label = styled.label`
    margin-bottom: 0.625em;
    color: gray;
`

export const Input = styled.input`
    margin-bottom: 0.625em;
    color: gray;
    border: none;
    padding: 0.3125em;
    border-bottom: 1px solid gray;
    &.hidden {
        display: none;
    }
`
export const Options = styled.select`
    margin-bottom: 0.625em;
`
export const Option = styled.option``

export const UploadCont = styled(Box)`
    display: flex;
    align-items: center;
`

export const FormRight = styled(Stack)`
    justify-content: space-around;
`;

// Icon 
export const PublishIcon = styled(Publish)``


