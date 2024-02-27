import { ScrollView } from "react-native"
import { ButtonCard, ButtonText, TextAge } from "../../Components/AppointmentCard/Style"
import { Button, ButtonCinza } from "../../Components/Button/Style"
import { Container, ContainerLeft } from "../../Components/Container/Style"
import { ContainerRow } from "../../Components/ContainerRow/Style"
import { FotoPerfil } from "../../Components/FotoPerfil/Style"
import { ProntuarioInputMaior, ProntuarioInputMenor } from "../../Components/Input/Style"
import { SubTitle } from "../../Components/SubTitle/Style"
import { Title, TitleProntuario } from "../../Components/Title/Style"
import { ButtonTitle } from "../../Components/ButtonTitle/Style"

export const Prontuario = () => {
    return (
        <Container>

            <ScrollView>

                <FotoPerfil
                    source={require('../../Assets/Images/Richard.png')}
                />

                <Title>Richard Kosta</Title>

                <ContainerRow>
                    <TextAge>22 Anos</TextAge>
                    <SubTitle>richard.kosta@gmail.com</SubTitle>
                </ContainerRow>

                <TitleProntuario>Descrição da consulta</TitleProntuario>

                <ProntuarioInputMaior
                    placeholder="Descrição"
                />

                <TitleProntuario>Diagnóstico do paciente</TitleProntuario>

                <ProntuarioInputMenor
                    placeholder="Diagnóstico"
                />

                <TitleProntuario>Prescrição médica</TitleProntuario>

                <ProntuarioInputMaior
                    placeholder="Prescrição médica"
                />

                <Button>
                    <ButtonTitle>Salvar</ButtonTitle>
                </Button>

                <ButtonCinza>
                    <ButtonTitle>Editar</ButtonTitle>
                </ButtonCinza>

                <ButtonCard>
                    <ButtonText>Cancelar</ButtonText>
                </ButtonCard>

            </ScrollView>

        </Container>
    )
}