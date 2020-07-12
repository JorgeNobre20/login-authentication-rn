import React from 'react';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { 
        WelcomeContainer,
        Container,
        Title, 
        LightText, 
        BoldText, 
        RegularText, 
        SubText, 
        CommandText,
        Buttons,
        FingerPrintButton,
        SignInButton,
        FingerPrintText,
        SignInText
    } from './styles';


const Welcome:React.FC = () => {

    const navigation = useNavigation();

    function handleSignIn(){
        navigation.navigate('Login');
    }

    return(
        <WelcomeContainer source={require('../../assets/Background.png')}>

                <Container>
                    <Title>

                        <LightText>Welcome to</LightText>

                        <BoldText>Dribbox</BoldText>

                        <RegularText>
                            <SubText>Best cloud storage platform for all</SubText>
                            <SubText>business and individuals to</SubText>
                            <SubText>manager there data</SubText>
                            <CommandText>Join For Free.</CommandText>
                        </RegularText>

                    </Title>

                    <Buttons>

                        <FingerPrintButton onPress ={ () => {handleSignIn()} }>
                                <MaterialIcons name='fingerprint' size={30} color='#567DF4' />
                                <FingerPrintText>Smart ID</FingerPrintText>
                        </FingerPrintButton>

                        <SignInButton onPress = { () => {handleSignIn()} }>
                                <SignInText>Sign In</SignInText>
                                <FontAwesome name='long-arrow-right' size={18} color='#FFFFFF' />
                        </SignInButton>

                    </Buttons>
                </Container>
        </WelcomeContainer>
    );
} 

export default Welcome;
