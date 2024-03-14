import { ScrollView } from "react-native"
import { ButtonCard, ButtonText, TextAge } from "../../Components/AppointmentCard/Style"
import { Container, ContainerLeft, ContainerRow, ContainerSpace } from "../../Components/Container/Style"
import { FotoPerfil } from "../../Components/FotoPerfil/Style"
import { SubTitle } from "../../Components/SubTitle/Style"
import { Title, TitleProntuario } from "../../Components/Title/Style"
import { CaixaProntuario, CaixaProntuarioMenor, CaixaProntuarioRow, Divider, TextCaixaProntuario } from "../../Components/ViewProntuario/Style"
import { SimpleLineIcons } from '@expo/vector-icons';
import { CameraButton, CancelarButton, CancelarText } from "../../Components/Button/Style"
import { CameraButtonTitle } from "../../Components/ButtonTitle/Style"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ContentAccount, TextAccountLink } from "../../Components/ContentAccount/Style"
import { HomePaciente } from "../HomePaciente/HomePaciente"
import { useNavigation } from "@react-navigation/native"
import { useState } from "react"


export const ProntuarioPronto = () => {

    const [showCamera, setShowCamera] = useState(false);

    const Navigation = useNavigation();

    const Voltar = () => {
        Navigation.navigate(HomePaciente)
    }

    const handleOpenCamera = () => {
        Navigation.navigate('CameraProntuario');
      };


    return (
        <ScrollView>

            <Container>
                <ContainerSpace>

                    <FotoPerfil
                        source={require('../../Assets/Images/MaskGroup.png')}
                    />

                    <Title>Dr Claudio</Title>
                    <ContainerRow>
                        <TextAge>Clínico Geral</TextAge>
                        <SubTitle>CRM-15286</SubTitle>
                    </ContainerRow>

                    <ContainerLeft>
                    <TitleProntuario>Descrição da consulta</TitleProntuario>
                    <CaixaProntuario>
                        <TextCaixaProntuario>O paciente possui uma infecção no
                            ouvido. Necessário repouse de 2 dias
                            e acompanhamento médico constante</TextCaixaProntuario>
                    </CaixaProntuario>
                    </ContainerLeft>

                    <ContainerLeft>

                    <TitleProntuario>Diagnóstico do paciente</TitleProntuario>
                    <CaixaProntuarioMenor>
                        <TextCaixaProntuario>Infecção no ouvido</TextCaixaProntuario>
                    </CaixaProntuarioMenor>
                    </ContainerLeft>
                    <ContainerLeft>

                    <TitleProntuario>Prescrição médica</TitleProntuario>
                    <CaixaProntuario>
                        <TextCaixaProntuario>Medicamento: Advil</TextCaixaProntuario>
                        <TextCaixaProntuario>Dosagem: 50 mg</TextCaixaProntuario>
                        <TextCaixaProntuario>Frequência: 3 vezes ao dia</TextCaixaProntuario>
                        <TextCaixaProntuario>Duração: 3 dias</TextCaixaProntuario>
                    </CaixaProntuario>
                    </ContainerLeft>

                    <ContainerLeft>

                    <TitleProntuario>Exames médicos</TitleProntuario>
                    <CaixaProntuarioRow>
                        <SimpleLineIcons name="exclamation" size={24} color="black" />
                        <TextCaixaProntuario>Nenhuma foto informada</TextCaixaProntuario>
                    </CaixaProntuarioRow>
                    </ContainerLeft>

                    <ContainerRow>
                        <CameraButton onPress={handleOpenCamera}>
                            <MaterialCommunityIcons name="camera-plus-outline" size={24} color="white" />
                            <CameraButtonTitle>Enviar</CameraButtonTitle>
                        </CameraButton>
                        <CancelarButton>
                            <CancelarText>Cancelar</CancelarText>
                        </CancelarButton>
                    </ContainerRow>

                    <Divider></Divider>
                    <ContainerLeft>


                    <CaixaProntuario>
                        <TextCaixaProntuario>Resultado do exame de sangue:</TextCaixaProntuario>
                        <TextCaixaProntuario>tudo normal</TextCaixaProntuario>
                    </CaixaProntuario>
                    </ContainerLeft>

                    <ContentAccount onPress={Voltar}>
                        <TextAccountLink>Voltar</TextAccountLink>
                    </ContentAccount>
                </ContainerSpace>
            </Container>
        </ScrollView>
    )
}