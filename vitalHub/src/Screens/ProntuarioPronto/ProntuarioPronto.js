import { ScrollView } from "react-native"
import { ButtonCard, ButtonText, TextAge } from "../../Components/AppointmentCard/Style"
import { Container, ContainerRow } from "../../Components/Container/Style"
import { FotoPerfil } from "../../Components/FotoPerfil/Style"
import { SubTitle } from "../../Components/SubTitle/Style"
import { Title, TitleProntuario } from "../../Components/Title/Style"
import { CaixaProntuario, CaixaProntuarioMenor, CaixaProntuarioRow, Divider, TextCaixaProntuario } from "../../Components/ViewProntuario/Style"
import { SimpleLineIcons } from '@expo/vector-icons';
import { CameraButton, CancelarButton, CancelarText } from "../../Components/Button/Style"
import { CameraButtonTitle } from "../../Components/ButtonTitle/Style"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ContentAccount, TextAccountLink } from "../../Components/ContentAccount/Style"

export const ProntuarioPronto = () => {
    return (
        <ScrollView>

            <Container>
                <FotoPerfil
                    source={require('../../Assets/Images/MaskGroup.png')}
                />

                <Title>Dr Claudio</Title>
                <ContainerRow>
                    <TextAge>Clínico Geral</TextAge>
                    <SubTitle>CRM-15286</SubTitle>
                </ContainerRow>

                <TitleProntuario>Descrição da consulta</TitleProntuario>
                <CaixaProntuario>
                    <TextCaixaProntuario>O paciente possui uma infecção no
                        ouvido. Necessário repouse de 2 dias
                        e acompanhamento médico constante</TextCaixaProntuario>
                </CaixaProntuario>

                <TitleProntuario>Diagnóstico do paciente</TitleProntuario>
                <CaixaProntuarioMenor>
                    <TextCaixaProntuario>Infecção no ouvido</TextCaixaProntuario>
                </CaixaProntuarioMenor>

                <TitleProntuario>Prescrição médica</TitleProntuario>
                <CaixaProntuario>
                    <TextCaixaProntuario>Medicamento: Advil</TextCaixaProntuario>
                    <TextCaixaProntuario>Dosagem: 50 mg</TextCaixaProntuario>
                    <TextCaixaProntuario>Frequência: 3 vezes ao dia</TextCaixaProntuario>
                    <TextCaixaProntuario>Duração: 3 dias</TextCaixaProntuario>
                </CaixaProntuario>

                <TitleProntuario>Exames médicos</TitleProntuario>
                <CaixaProntuarioRow>
                    <SimpleLineIcons name="exclamation" size={24} color="black" />
                    <TextCaixaProntuario>Nenhuma foto informada</TextCaixaProntuario>
                </CaixaProntuarioRow>

                <ContainerRow>
                    <CameraButton>
                        <MaterialCommunityIcons name="camera-plus-outline" size={24} color="white" />
                        <CameraButtonTitle>Enviar</CameraButtonTitle>
                    </CameraButton>
                    <CancelarButton>
                        <CancelarText>Cancelar</CancelarText>
                    </CancelarButton>
                </ContainerRow>

                <Divider></Divider>

                <CaixaProntuario>
                    <TextCaixaProntuario>Resultado do exame de sangue:</TextCaixaProntuario>
                    <TextCaixaProntuario>tudo normal</TextCaixaProntuario>
                </CaixaProntuario>

                <ContentAccount>
                    <TextAccountLink>Voltar</TextAccountLink>
                </ContentAccount>
            </Container>
        </ScrollView>
    )
}