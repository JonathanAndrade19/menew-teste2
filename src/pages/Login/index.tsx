import React from 'react';
import { Image , StyleSheet} from 'react-native';
import { Zocial , Feather } from '@expo/vector-icons';

import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold,
  CustomButtonFacebook,
  CustomButtonTextFacebook,
  IconsFacebook,
  IconsSeta,
} from './styles';

import SignInput from '../../components/SingInput';

const styles = StyleSheet.create({
  tinyLogo: {
    width: 100,
    height: 120,
    marginBottom: 15,
    marginLeft: 100,
  },
});

const Login: React.FC = () => {
  return (
    <Container>
      <InputArea>
        <Image style={styles.tinyLogo} source={require('../../images/logo.jpg')}/>
        <SignInput
          placeholder="Digite seu e-mail"
        />
        <SignInput
          placeholder="*******"
        />
        <CustomButton>
          <CustomButtonText>
            Entrar
          </CustomButtonText>
          <IconsSeta>
            <Feather name="arrow-right" size={18} color="#FFFAF0" />
          </IconsSeta>
        </CustomButton>
      </InputArea>

      <SignMessageButton>
        <SignMessageButtonText>Ainda não possui uma conta?</SignMessageButtonText>
        <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
      </SignMessageButton>
      <CustomButtonFacebook>
        <IconsFacebook>
          <Zocial name="facebook" size={18} color="#FFFAF0"/>
        </IconsFacebook>
        <CustomButtonTextFacebook>
          Entre com Facebook 
        </CustomButtonTextFacebook>
        <IconsSeta>
         <Feather name="arrow-right" size={18} color="#FFFAF0" />
        </IconsSeta>
      </CustomButtonFacebook>
    </Container>
  );
};

export default Login;
