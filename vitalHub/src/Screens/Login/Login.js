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
import { HomePaciente } from "../HomePaciente/HomePaciente"
import { useState } from "react"




export const Login = () => {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    async function Login(){
        api.post('/Login', {
            email : email,
            senha : senha
        }).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        })

        // Navigation.navigate("Main")
    }

    const Navigation = useNavigation();

    const ForgotSenha = () => {
        Navigation.navigate(RecuperarSenha)
    }

    const LinkCriarConta = () => {
        Navigation.navigate(CriarConta)
    }

    const EntrarPaciente = () => {
        Navigation.navigate(HomePaciente)
    }

    return (
        <Container>

            <Logo
                source={require('../../Assets/Images/VitalHub_Logo.png')}
            />

            <Title>Entrar ou criar conta</Title>

            <Input
                placeholder="Usuário ou E-mail"

                value={email}
                onChange={event => setEmail(event.target.text)}
            />

            <Input
                placeholder="Senha"
                secureTextEntry={true}

                value={senha}
                onChangeText={(txt) => setSenha(txt)}
            />
            <TouchableOpacity onPress={ForgotSenha}>
                <LinkMedium>Esqueceu sua senha?</LinkMedium>
            </TouchableOpacity>

            <Button onPress={EntrarPaciente}>
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