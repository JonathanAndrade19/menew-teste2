import React from 'react';
import { Feather } from '@expo/vector-icons';

import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  TitleCadastro,
  IconsSeta,
  CustomInformacoes,
  TextoCampoInformacoes,
  TextoCampoInformacoesBold,
} from './styles';

import SignInput from '../../components/SingInput';

const Cadastro: React.FC = () => {
  return (
    <Container>
      <InputArea>
        <TitleCadastro>Cadastre-se</TitleCadastro>
        <SignInput
          placeholder="Seu Nome"
        />
        <SignInput
          placeholder="Seu e-mail"
        />
        <SignInput
          placeholder="Seu CPF"
        />

        <CustomInformacoes>
          <TextoCampoInformacoes>Ao Cadastra-se você concorda com os</TextoCampoInformacoes>
          <TextoCampoInformacoesBold>Termos de Serviços e a Política de Privacidade.</TextoCampoInformacoesBold>
        </CustomInformacoes>

        <CustomButton>
          <CustomButtonText>Entrar</CustomButtonText>
          <IconsSeta>
            <Feather name="arrow-right" size={18} color="#FFFAF0" />
          </IconsSeta>
        </CustomButton>
      </InputArea>
    </Container>
  );
};

export default Cadastro;
