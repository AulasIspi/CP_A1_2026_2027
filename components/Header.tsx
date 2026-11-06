import { Text, View } from "react-native";
import { estilos } from "../styles/indexStyles";
import { Contacts } from "../utils/contactList";

interface props {
    list? : Contacts[],
    title : string,
    description: string
}
export default function Header({ list, title, description } : props){

    return (
     <View style={estilos.header}>
      <Text style={estilos.title} > {title} {list && list.length}</Text>
      <Text style={estilos.description}> {description} </Text>
      </View>
    );
}