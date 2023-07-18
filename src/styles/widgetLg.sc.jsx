import styled from "@emotion/styled";
import { Box, Button, Paper, Typography } from "@mui/material";

export const Container = styled(Paper)`
    flex: 2;
    padding: 1.25em;
`
export const Title = styled(Typography)`
    font-weight: 600;
    font-size: 1.5rem;
`

export const Table = styled.table`
    width: 100%;
    border-spacing: 1.25em;
`
export const Tr = styled.tr``
export const Th = styled.th`
    text-align: left;
`
export const Td = styled.td`
    &.user {
        display: flex;
        align-items: center;
        font-weight: 600;
    }
    &.date, &.amount {
        font-weight: 300;
    }
`
export const Image = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 0.625em;
`
export const Name = styled(Box)``
export const SButton = styled(Button)`
    padding: 0.2em 0.6em;
    &.approved {
        background-color: #e5faf2;
        color: #3bbb07;
    }
    &.declined {
        background-color: #fff0f1;
        color: #d95087;
    }
    &.pending {
        background-color: #ebf1fe;
        color: #2a7ade;
    }
`