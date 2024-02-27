import { Button } from "../../Components/Button/Style"
import { ButtonTitle } from "../../Components/ButtonTitle/Style"
import { CardMedico, CardMedicoContent, ImagemCardMedico, TextCardMedico } from "../../Components/CardMedico/Style"
import { Container, ContainerClinicas } from "../../Components/Container/Style"
import { ContentAccount, TextAccountLink } from "../../Components/ContentAccount/Style"
import { Title, TitleClinica } from "../../Components/Title/Style"

export const SelecionarMedico = () => {
    return(
        <Container>

        <Title>Selecionar Médico</Title>

        <ContainerClinicas>
            <CardMedico>
                <ImagemCardMedico
                    source={require('../../Assets/Images/DraAlessandra.png')}
                />
                <CardMedicoContent>

                <TitleClinica>Dra Alessandra</TitleClinica>

                <TextCardMedico>Demartologa, Esteticista</TextCardMedico>
                </CardMedicoContent>
            </CardMedico>
            <CardMedico>
                <ImagemCardMedico
                    source={require('../../Assets/Images/DrKumushiro.png')}
                />
                <CardMedicoContent>

                <TitleClinica>Dr Kumushiro</TitleClinica>

                <TextCardMedico>Cirurgião, Cardiologista</TextCardMedico>
                </CardMedicoContent>
            </CardMedico>
            <CardMedico>
                <ImagemCardMedico
                    source={require('../../Assets/Images/DrRodrigo.png')}
                />
                <CardMedicoContent>

                <TitleClinica>Dr Rodrigo Santos</TitleClinica>

                <TextCardMedico>Clínico, Pediatra</TextCardMedico>
                </CardMedicoContent>
            </CardMedico>
        </ContainerClinicas>

        <Button>
            <ButtonTitle>Continuar</ButtonTitle>
        </Button>

        <ContentAccount>
            <TextAccountLink>Cancelar</TextAccountLink>
        </ContentAccount>

        </Container>
    )
}