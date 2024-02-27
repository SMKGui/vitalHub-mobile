import RNPickerSelect from "react-native-picker-select";
import { StyleSheet, View } from "react-native";

import { SubTitleData, Title, TitleData } from "../../Components/Title/Style"

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { Container } from "../../Components/Container/Style";
import { useEffect, useState } from "react";

import { Calendar, LocaleConfig } from "react-native-calendars";
import { Button } from "../../Components/Button/Style";
import { ButtonTitle } from "../../Components/ButtonTitle/Style";
import { ContentAccount, TextAccountLink } from "../../Components/ContentAccount/Style";

export const SelecionarData = () => {
    const [selected, setSelected] = useState("");

    const currentDate = new Date();
    const startingDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());

    LocaleConfig.locales["pt-br"] = {
        monthNames: [
            "Janeiro", "Fevereiro", "Março", "Abril",
            "Maio", "Junho", "Julho", "Agosto",
            "Setembro", "Outubro", "Novembro", "Dezembro",
        ],
        monthNamesShort: [
            "Jan", "Fev", "Mar", "Abr", "Mai",
            "Jun", "Jul", "Ago", "Set", "Out",
            "Nov", "Dez",
        ],
        dayNames: [
            "Domingo", "Segunda", "Terça", "Quarta",
            "Quinta", "Sexta", "Sábado",
        ],
        dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
    };
    LocaleConfig.defaultLocale = "pt-br";

    return (
        <Container>

            <Title>Selecionar data</Title>

            <Calendar
                style={{
                    width: 360,
                    alignSelf: 'center',
                    backgroundColor: '#FAFAFA'
                }}

                onDayPress={(day) => {
                    setSelected(day.dateString);
                }}
                markedDates={{
                    [selected]: {
                        selected: true,
                        disableTouchEvent: true
                    },
                }}

                minDate={startingDate}

                theme={{
                    calendarBackground: '#FAFAFA',
                    arrowColor: '#49B3BA',
                    textDisabledColor: '#C6C5CE',
                    todayTextColor: '#5F5C6B',
                    selectedDayTextColor: '#FAFAFA',
                    selectedDayBackgroundColor: '#60BFC5',

                    textDayFontSize: 16,
                    textMonthFontSize: 20,
                    textDayHeaderFontSize: 12,

                    textDayStyle: { "color": '#5F5C6B' },

                    textDayFontFamily: "Quicksand_600SemiBold",
                    textDayHeaderFontFamily: "Quicksand_600SemiBold",
                    textMonthFontFamily: "MontserratAlternates_600SemiBold",
                }}
            />

            <SubTitleData>Selecione um horário disponível</SubTitleData>

            <View style={{ width: 316 }}>
                <RNPickerSelect
                    style={style}
                    Icon={() => {
                        return <FontAwesomeIcon icon={faCaretDown} color='#34898F' size={22} />
                    }}
                    placeholder={{
                        label: 'Selecione um valor',
                        value: null,
                        color: '#34898F'
                    }}
                    onValueChange={(value) => console.log(value)}
                    items={[
                        { label: "JavaScript", value: "JavaScript" },
                        { label: "TypeScript", value: "TypeScript" },
                        { label: "Python", value: "Python" },
                        { label: "Java", value: "Java" },
                        { label: "C++", value: "C++" },
                        { label: "C", value: "C" },
                    ]}
                />
            </View>

            <Button>
                <ButtonTitle>Confirmar</ButtonTitle>
            </Button>

            <ContentAccount>
                <TextAccountLink>Cancelar</TextAccountLink>
            </ContentAccount>

        </Container>
    )
}


const style = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        padding: 16,
        borderWidth: 2,
        borderColor: '#60BFC5',
        borderRadius: 5,
        color: '#34898F',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'MontserratAlternates_600SemiBold'
    },
    inputAndroid: {
        fontSize: 16,
        padding: 16,
        borderWidth: 2,
        borderColor: '#60BFC5',
        borderRadius: 5,
        color: '#34898F',
        alignItems: 'center',
        justifyContent: 'center',

        fontFamily: 'MontserratAlternates_600SemiBold'
    },
    iconContainer: {
        top: '25%',
        marginRight: 10
    },
    placeholder: {
        color: '#34898F',
    }
})