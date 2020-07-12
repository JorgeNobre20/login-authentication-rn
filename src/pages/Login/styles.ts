import styled from 'styled-components/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export const LoginContainer = styled(KeyboardAwareScrollView)`
    flex: 1;
`;

export const Container = styled.ImageBackground.attrs( props => ({ 
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


export const Title = styled.View`
    flex-direction: column;
    width: 100%;
    margin-top: 75%;
    justify-content: center;
`;

export const BoldText = styled.Text`
    font-weight: bold;
    font-family: 'Roboto';
    font-size: 38px;
    color: #22215B;
    text-align: center;
`;

export const SubTitle = styled.Text`
    font-weight: bold;
    font-family: 'Roboto';
    font-size: 16px;
    color: #7B7F9E;
    font-weight: 600;
    text-align: center;
    margin-bottom: 5px;
`;

export const Input = styled.TextInput`
    width: 300px;
    height: 50px;
    margin: 10px 0px;
    border-radius: 10px;
    padding: 10px;
    border: 2px solid #EEEEEE;
    font-size: 16px;
`;

export const SignInButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 150px;
    padding: 10px;
    height: 50px;
    margin-left: 10px;
    background: rgba(86,125,244,0.1);
    border-radius: 10px;
    background: #567DF4;
    margin: 20px 0px;
`;

export const SignInText = styled.Text`
    font-size: 18px;
    font-weight: 600;
    margin-right: 5px;
    color: #FFFFFF;
`;

export const AlertText = styled.Text`
    color: red;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 5px;
`;