import { TouchableOpacity } from "react-native"
import { Container } from "../../Components/Container/Style"
import { Logo } from "../../Components/Logo/Style"
import { Title } from "../../Components/Title/Style"
import { Input } from "../../Components/Input/Style"
import { useNavigation } from "@react-navigation/native"
import { Button } from "../../Components/Button/Style"
import { ButtonTitle, ButtonTitleGoogle } from "../../Components/ButtonTitle/Style"
import { ButtonGoogle } from "../../Components/Button/Style"
import { LinkMedium } from "../../Components/Link/Style"
import { AntDesign } from '@expo/vector-icons';
import { ContentAccount, TextAccount, TextAccountLink } from "../../Components/ContentAccount/Style"
import { RecuperarSenha } from "../RecuperarSenha/RecuperarSenha"
import { CriarConta } from "../CriarConta/CriarConta"




export const Login = () => {

    const Navigation = useNavigation();

    const ForgotSenha = () => {
        Navigation.navigate(RecuperarSenha)
    }

    const LinkCriarConta = () => {
        Navigation.navigate(CriarConta)
    }

    return (
        <Container>

            <Logo
                source={require('../../Assets/Images/VitalHub_Logo.png')}
            />

            <Title>Entrar ou criar conta</Title>

            <Input
                placeholder="Usuário ou E-mail"
            />

            <Input
                placeholder="Senha"
            />
            <TouchableOpacity onPress={ForgotSenha}>
                <LinkMedium>Esqueceu sua senha?</LinkMedium>
            </TouchableOpacity>

            <Button>
                <ButtonTitle>Entrar</ButtonTitle>
            </Button>

            <ButtonGoogle>
                <AntDesign name="google" size={18} color="#496bba" />
                <ButtonTitleGoogle>Entrar com Google</ButtonTitleGoogle>
            </ButtonGoogle>


            <ContentAccount>
                <TextAccount>Não tem conta?</TextAccount>
                <TouchableOpacity onPress={LinkCriarConta}>
                    <TextAccountLink >Crie uma conta agora!</TextAccountLink>
                </TouchableOpacity>
            </ContentAccount>


        </Container>
    )
}