import { Platform } from 'react-native';
import styled from 'styled-components/native';
import Constants from 'expo-constants';
import colors from '../../styles/colors';

const statusBarHeight = Platform.OS === 'android' ? Constants.statusBarHeight: 0;


export const Container = styled.SafeAreaView`
    background: ${colors.primary};
    flex: 1;
    padding-top: ${statusBarHeight + 'px'};

    justify-content: center;
    align-items: center;
`;

export const InputArea = styled.View`
    width: 100%;
    padding: 40px;
`;

export const CustomButton = styled.TouchableOpacity`
    height: 60px;
    background-color: ${colors.red};
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const CustomButtonText = styled.Text`
    font-size: 18px;
    color: ${colors.primary};
    font-weight: bold;

`;

export const TitleCadastro = styled.Text`
    margin-bottom: 25px;
    font-size: 35px;
    color: #778899;
    font-weight: bold;
    text-align: center;
`;

export const IconsSeta = styled.Text`
    margin-left: 5px;
`;

export const CustomInformacoes = styled.TouchableOpacity`
    flex-direction: column;
    justify-content: center;
    margin-top: 40px;
    margin-bottom: 40px;
`;

export const TextoCampoInformacoes = styled.Text`
    font-size: 14px;
    color: #778899;
    text-align: center;
`;

export const TextoCampoInformacoesBold = styled.Text`
    font-size: 14px;
    color: #778899;
    font-weight: bold;
    text-align: center;
`;
