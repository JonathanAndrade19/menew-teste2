import styled from 'styled-components/native';
import colors from '../../styles/colors';


export const InputArea = styled.View`
    width: 100%;
    height: 60px;
    background-color: #D3D3D3;
    flex-direction: row;
    border-radius: 30px;
    padding-left: 15px;
    align-items: center;
    margin-bottom: 15px;
`;

export const Input = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #000;
    margin-left: 10px;
`;