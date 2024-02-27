import { Container, ContainerRow } from "../../Components/Container/Style"
import { InputCinza, InputCinzaMenor } from "../../Components/InputCinza/Style"
import { Mapa } from "../../Components/Mapa/Style"
import { SubTitle } from "../../Components/SubTitle/Style"
import { Title } from "../../Components/Title/Style"
import { TitleComponent } from "../../Components/TitleComponent/TitleComponent"

export const Local = () => {
    return (

        <Container>

            <Mapa
                source={require('../../Assets/Images/mapa.png')}
            />

            <Title>Clínica Natureh</Title>

            <SubTitle>São Paulo, SP</SubTitle>

            <TitleComponent>Endereço</TitleComponent>

            <InputCinza
                placeholder="Rua Vicenso Silva, 987"
            />

            <ContainerRow>

                <TitleComponent>Número</TitleComponent>
                <InputCinzaMenor
                    placeholder="578"
                />
                
                <TitleComponent>Bairro</TitleComponent>
                <InputCinzaMenor
                    placeholder="Moema-SP"
                />

            </ContainerRow>

        </Container>
    )
}