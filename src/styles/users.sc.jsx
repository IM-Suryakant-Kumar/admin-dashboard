import styled from "@emotion/styled";
import { DeleteOutline } from "@mui/icons-material";
import { Box, Button, Stack } from "@mui/material";

export const Container = styled(Box)`
	flex: 4;
`;

export const UserInfoContainer = styled(Stack)`
	flex-direction: row;
	align-items: center;
`;

export const Image = styled.img`
	width: 32px;
	height: 32px;
	border-radius: 50%;
	object-fit: cover;
	margin-right: 1.25em;
`;

const SButton = styled(Button)`
    border: none;
    border-radius: 0.625em;
    padding: 0.3125em 0.625em;
`;

export const EditButton = styled(SButton)`
    background-color: #3bb077;
    color: white;
    margin-right: 1.25em;
    &:hover {
        background-color: #3bb077;
    }
`;
export const DeleteButton = styled(SButton)`
    color: red;
    
`;

// Icon
export const DeleteIcon = styled(DeleteOutline)``
