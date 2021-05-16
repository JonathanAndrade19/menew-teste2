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

export const SignMessageButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    margin-top: 40px;
    margin-bottom: 10px;
`;

export const SignMessageButtonText = styled.Text`
    font-size: 16px;
    color: #778899;
`;

export const SignMessageButtonTextBold = styled.Text`
    font-size: 16px;
    color: #778899;
    font-weight: bold;
    margin-left: 5px;
`;

export const CustomButtonFacebook = styled.TouchableOpacity`
    flex-direction: row;
    margin-top: 10px;
    background: #3B5998;
    padding: 15px;
    border-radius: 30px;
    width: 80%;
    justify-content: center;
`;

export const CustomButtonTextFacebook = styled.Text`
    color: ${colors.primary};
    font-size: 18px;
    text-align: center;
`;

export const IconsFacebook = styled.Text`
    margin-right: 30px;
`;

export const IconsSeta = styled.Text`
    margin-left: 5px;
`;