import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const List = styled.ScrollView.attrs({
    horizontal: true,
})`
    padding: 8px 0 24px;
`;
export const CategoryContainer = styled.TouchableOpacity`
    margin-right: 10px;
`;
export const CategoryImage = styled.Image`
    width: 98;
    height: 160;
`;
export const CategoryName = styled.Text`
    margin-top: 5px;
    max-width: 98px;
    color: ${colors.black};
    font-family: roboto_700;
    font-size:13.5px;
`;
