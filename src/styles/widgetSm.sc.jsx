import styled from "@emotion/styled";
import { Visibility } from "@mui/icons-material";
import { Box, Button, List, ListItem, Paper, Stack, Typography } from "@mui/material";

export const Container = styled(Paper)`
	flex: 1;
	padding: 1.25em;
	margin-right: 1.25em;
`;

export const Title = styled(Typography)`
	font-weight: 600;
    font-size: 2rem;
`;

export const SList = styled(List)`
    list-style: none;
`;

export const SListItem = styled(ListItem)`
    justify-content: space-between;
    padding: 0;
    margin: 1.25em 0;
`;

export const Image = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
`;

export const UserInfoConatiner = styled(Stack)``;

export const Name = styled(Box)`
    font-weight: 600;
`;

export const UserTitle = styled(Box)`
    font-weight: 300;
`;

export const SButton = styled(Button)`
    background-color: #eeeef7;
    color: #555;
    padding: 0.375em 0.625em;
    text-transform: capitalize;
`;

// Icon
export const VisibilityIcon = styled(Visibility)`` 
