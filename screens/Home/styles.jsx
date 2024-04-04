
import { StyleSheet } from "react-native";

export const estilo = StyleSheet.create({

    tela : {
        flex: 1,
        backgroundColor: '#006d77',
        marginTop: 42,
        
    },
    tela2:{
        padding: 16
    },
    header : {
        padding: 20,
        backgroundColor: '#fff',
        flexDirection: 'row',
        height: 100,
        width:'100%',
        borderBottomEndRadius: 15,
        borderBottomStartRadius: 15,
        paddingTop: 20
    },
    pesquisa:{
        flex: 1,
        height:50,
        color: '#FFFF',
        fontSize: 26,
        padding: 12,
        backgroundColor: '#83c5be',
        borderRadius: 25,
    },    
        lupa:{
        height:40,
        width:40,
        fontWeight: 'bold',
        marginLeft:20,
    },

    form: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 16,
        marginBottom: 30,

    },
    input_text:{
        flex: 1,
        height:80,
        color: '#FFFF',
        fontSize: 26,
        padding: 12,
        backgroundColor: '#52b788',
        borderRadius: 25,
    },
    perfil:{
        height:50,
        width: 50,
        borderRadius: 50,
        marginRight: 20
    }

}) 