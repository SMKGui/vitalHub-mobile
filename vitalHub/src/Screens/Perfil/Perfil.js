import { Container, ContainerRow, ContainerLeft, ContainerLocal } from "../../Components/Container/Style";
import { FotoPerfil } from "../../Components/FotoPerfil/Style";
import { SubTitle } from "../../Components/SubTitle/Style";
import { Title } from "../../Components/Title/Style";
import { TitleComponent } from "../../Components/TitleComponent/TitleComponent";
import { InputCinza, InputCinzaMenor } from "../../Components/InputCinza/Style";
import { Button } from "../../Components/Button/Style";
import { ButtonTitle } from "../../Components/ButtonTitle/Style";
import { ScrollView } from "react-native";

export const Perfil = () => {
    return (

        <ScrollView>

            <Container>

                <FotoPerfil
                    source={require('../../Assets/Images/Richard.png')}
                />

                <Title>Richard Kosta</Title>

                <SubTitle>richard.kosta@gmail.com</SubTitle>

                <ContainerLeft>

                    <TitleComponent>Data de nascimento</TitleComponent>

                    <InputCinza
                        placeholder="04/05/1999"
                    />
                </ContainerLeft>

                <ContainerLeft>

                    <TitleComponent>CPF</TitleComponent>

                    <InputCinza
                        placeholder="85968457319"
                    />
                </ContainerLeft>

                <ContainerLeft>

                    <TitleComponent>Endereço</TitleComponent>

                    <InputCinza
                        placeholder="Rua Vicenso Silva, 987"
                    />
                </ContainerLeft>

                <ContainerRow>

                    <ContainerLocal>

                        <TitleComponent>CEP</TitleComponent>

                        <InputCinzaMenor
                            placeholder="06548-909"
                        />
                    </ContainerLocal>

                    <ContainerLocal>

                        <TitleComponent>Cidade</TitleComponent>

                        <InputCinzaMenor
                            placeholder="Moema-SP"
                        />
                    </ContainerLocal>

                </ContainerRow>

                <Button>
                    <ButtonTitle>Salvar</ButtonTitle>
                </Button>

                <Button>
                    <ButtonTitle>Editar</ButtonTitle>
                </Button>

            </Container>
        </ScrollView>
    )
}