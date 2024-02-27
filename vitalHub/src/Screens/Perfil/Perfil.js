import { Container, ContainerRow, ContainerLeft } from "../../Components/Container/Style";
import { FotoPerfil } from "../../Components/FotoPerfil/Style";
import { SubTitle } from "../../Components/SubTitle/Style";
import { Title } from "../../Components/Title/Style";
import { TitleComponent } from "../../Components/TitleComponent/TitleComponent";
import { InputCinza, InputCinzaMenor } from "../../Components/InputCinza/Style";
import { Button} from "../../Components/Button/Style";
import { ButtonTitle } from "../../Components/ButtonTitle/Style";

export const Perfil = () => {
    return (

        <ContainerLeft>

            <FotoPerfil
                source={require('../../Assets/Images/Richard.png')}
            />

            <Title>Richard Kosta</Title>

            <SubTitle>richard.kosta@gmail.com</SubTitle>

            <TitleComponent>Data de nascimento</TitleComponent>

            <InputCinza
                placeholder="04/05/1999"
            />

            <TitleComponent>CPF</TitleComponent>

            <InputCinza
                placeholder="85968457319"
            />

            <TitleComponent>Endereço</TitleComponent>

            <InputCinza
                placeholder="Rua Vicenso Silva, 987"
            />

            <ContainerRow>

                <TitleComponent>CEP</TitleComponent>

                <InputCinzaMenor
                    placeholder="06548-909"
                />

                <TitleComponent>Cidade</TitleComponent>

                <InputCinzaMenor
                    placeholder="Moema-SP"
                />

            </ContainerRow>

            <Button>
                <ButtonTitle>Salvar</ButtonTitle>
            </Button>

            <Button>
                <ButtonTitle>Editar</ButtonTitle>
            </Button>
            
        </ContainerLeft>
    )
}