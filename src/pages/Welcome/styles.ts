import styled from 'styled-components/native';

export const WelcomeContainer = styled.ImageBackground.attrs( props => ({ 
    resizeMode: 'contain',
    imageStyle: {
        width: '100%',
        top: '-25%'
    }
}))`
    flex: 1;
    flex-direction: column;
    align-items: center;
`;

export const Container = styled.ScrollView`
    flex: 1;
`;

export const Title = styled.View`
    flex-direction: column;
    width: 100%;
    padding-left: 30px;
    margin-top: 80%;
`;

export const BoldText = styled.Text`
    font-weight: bold;
    font-family: 'Roboto';
    font-size: 38px;
    color: #22215B;
`;

export const LightText = styled.Text`
    font-family: 'Roboto';
    font-size: 20px;
    color: #22215B;
    font-weight: 100;
`;

export const RegularText = styled.View`
    flex-direction: column;
`;

export const SubText = styled.Text`
    font-size: 14px;
    font-weight: 100;
    color: #7B7F9E;
`;

export const CommandText = styled.Text`
    font-size: 14px;
    font-weight: 100;
    color: #7B7F9E;
    margin-top: 20px;
`;

export const Buttons = styled.View`
    width: 100%;
    padding: 10px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
`;

export const FingerPrintButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 60px;
    margin-right: 10px;
    background: rgba(86,125,244,0.1);
    border-radius: 10px;
`;

export const SignInButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 60px;
    margin-left: 10px;
    background: rgba(86,125,244,0.1);
    border-radius: 10px;
    background: #567DF4;
`;

export const FingerPrintText = styled.Text`
    font-size: 18px;
    font-weight: 600;
    margin-left: 3px;
    color: #567DF4;
`;

export const SignInText = styled.Text`
    font-size: 18px;
    font-weight: 600;
    margin-right: 5px;
    color: #FFFFFF;
`;