import React, { useState, useContext } from 'react';
import { Entypo } from '@expo/vector-icons';
import { AuthContext } from '../../contexts/Auth';

import {
    LoginContainer,
    Container,
    Title,
    BoldText,
    SubTitle,
    AlertText,
    Input,
    SignInButton,
    SignInText
} from './styles';

const Login: React.FC = () => {

    const { signIn } = useContext(AuthContext);

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [alertText, setAlertText] = useState<string | null>(null);

    function handleLogin(){
        if(!email || !password){
            setAlertText("Preencha todos os campos");
        }else{
            setAlertText(null);
            signIn({ email, password });
        }
    }

    return (

        <LoginContainer >
            <Container source={require('../../assets/Background.png')}>
                <Title>
                    <BoldText>Dirbbox</BoldText>
                    <SubTitle>Faça seu login</SubTitle>
                    <AlertText>{ alertText && alertText }</AlertText>
                </Title>

                <Input 
                    placeholder='Email' 
                    autoCapitalize='none'
                    placeholderTextColor='#CCCCCC' 
                    onChangeText={ (text: React.SetStateAction<string>) => setEmail(text) }
                />

                <Input 
                    placeholder='Senha' 
                    secureTextEntry
                    placeholderTextColor='#CCCCCC' 
                    onChangeText={ (text: React.SetStateAction<string>) => setPassword(text) }
                />

                <SignInButton onPress={ handleLogin }>
                    <SignInText>Entrar</SignInText>
                    <Entypo name="arrow-long-right" size={24} color="#FFFFFF" />
                </SignInButton>

            </Container>
        </LoginContainer>

    );
}

export default Login;