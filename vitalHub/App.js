import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Navegacao } from './src/Screens/Navegacao/Navegacao';
import { Login } from './src/Screens/Login/Login';
import { Quicksand_500Medium, Quicksand_600SemiBold, Quicksand_400Regular } from '@expo-google-fonts/quicksand';
import { useFonts, MontserratAlternates_600SemiBold, MontserratAlternates_500Medium, MontserratAlternates_700Bold } from "@expo-google-fonts/montserrat-alternates"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { RecuperarSenha } from './src/Screens/RecuperarSenha/RecuperarSenha';
import { CodigoEmail } from './src/Screens/CodigoEmail/CodigoEmail';
import { RedefinirSenha } from './src/Screens/RedefinirSenha/RedefinirSenha';
import { CriarConta } from './src/Screens/CriarConta/CriarConta';
import { Perfil } from './src/Screens/Perfil/Perfil';
import { Local } from './src/Screens/Local/Local';
import { Prontuario } from './src/Screens/Prontuario/Prontuario';
import { HomePaciente } from './src/Screens/HomePaciente/HomePaciente';
import { SelecionarClinica } from './src/Screens/SelecionarClinica/SelecionarClinica';
import { SelecionarMedico } from './src/Screens/SelecionarMedico/SelecionarMedico';
import { SelecionarData } from './src/Screens/SelecionarData/SelecionarData';
import { HomeMedico } from './src/Screens/HomeMedico/HomeMedico';

const Stack = createNativeStackNavigator();

export default function App() {

  const[fontsLoaded, fontsError] = useFonts({
    MontserratAlternates_500Medium,
    MontserratAlternates_600SemiBold,
    MontserratAlternates_700Bold,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold
  })

  if (!fontsLoaded && !fontsError) {
    return null;
  }

  return (
    
    //Container - envolve toda a estrutura de navegação
      //Navigator - componente para a navegação
        //Screen - tela
          //name: nome da tela
          //component: componente que será chamado
          //options(title)

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Navegacao"
          component={Navegacao}
          options={{title: "Navegação"}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: "Login"}}
        />
        <Stack.Screen
          name="RecuperarSenha"
          component={RecuperarSenha}
          options={{title: "RecuperarSenha"}}
        />
        <Stack.Screen
          name="CodigoEmail"
          component={CodigoEmail}
          options={{title: "CodigoEmail"}}
        />
        <Stack.Screen
          name="RedefinirSenha"
          component={RedefinirSenha}
          options={{title: "RedefinirSenha"}}
        />
        <Stack.Screen
          name="CriarConta"
          component={CriarConta}
          options={{title: "CriarConta"}}
        />
        <Stack.Screen
          name="HomeMedico"
          component={HomeMedico}
          options={{title: "HomeMedico"}}
        />
        <Stack.Screen
          name="Perfil"
          component={Perfil}
          options={{title: "Perfil"}}
        />
        <Stack.Screen
          name="Local"
          component={Local}
          options={{title: "Local"}}
        />
        <Stack.Screen
          name="Prontuario"
          component={Prontuario}
          options={{title: "Prontuario"}}
        />
        <Stack.Screen
          name="HomePaciente"
          component={HomePaciente}
          options={{title: "HomePaciente"}}
        />
        <Stack.Screen
          name="SelecionarClinica"
          component={SelecionarClinica}
          options={{title: "SelecionarClinica"}}
        />
        <Stack.Screen
          name="SelecionarMedico"
          component={SelecionarMedico}
          options={{title: "SelecionarMedico"}}
        />
        <Stack.Screen
          name="SelecionarData"
          component={SelecionarData}
          options={{title: "SelecionarData"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
