import { View, Text, Image} from "react-native"
import { estilo } from "./style"

export default function Card({ name }){
    return(
        <View style={estilo.container}>

            <Text style={estilo.texto}>
                {name}
            </Text>
        </View>
    )
    }