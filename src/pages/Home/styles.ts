import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`;

export const Header = styled.View`
    flex-direction: row;
    margin-top: 40px;
    width: 100%;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: #22215B;
    margin-left: 10px;
`;

export const LogoutButton = styled.TouchableOpacity`
    flex-direction: row;
    margin-right: 10px;
    justify-content: center;
    align-items: center;
`;

export const LogoutText = styled.Text`
    font-size: 18px;
    color: red;
    margin-bottom: 3px;
    margin-right: 5px;
`;

export const FoldersList = styled.ScrollView.attrs( props => ({
    showsVerticalScrollIndicator: false,
    vertical: true,
    contentContainerStyle: { 
        paddingVertical: 10,
        alignItems: 'center',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }
}) )`
    width: 100%;
`;
