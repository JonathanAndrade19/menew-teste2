import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const List = styled.View`
    padding: 8px 0 0;
`;
export const ListContainer = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-right: 14px;
    margin-bottom: 25px;
`;
export const LeftSide = styled.View`
    flex-direction: row;
    align-items: center;
`;
export const Logo = styled.Image`
    background: ${colors.tag};
    width: 58px;
    height: 58px;
    border-radius: 29px;
`;
export const Column = styled.View`
    padding-left: 10px;
`;
export const Username = styled.Text`
    color :${colors.black};
    font-family: roboto_500;
    font-size: 16px;
`;
export const Info = styled.Text`
    margin-top: 1px;
    color :${colors.gray};
    font-size: 13px;

`;