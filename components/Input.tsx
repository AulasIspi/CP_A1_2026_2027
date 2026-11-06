import MaterialIcons from "@react-native-vector-icons/material-icons";
import { TextInput, View } from "react-native";
import { estilos } from "../styles/indexStyles";

interface props {
    setSearch : (t:string)=>void
    sendSearch ? : ()=>void
}

export default function Input({  setSearch, sendSearch} :props){
    
    return (
          <View style={estilos.formContainer}>
        <TextInput style={estilos.input} onChangeText={(text : string)=>setSearch(text)}/>
        <MaterialIcons name="search" size={24} color="#fafafa" style={estilos.searchButton} onPress={sendSearch}/>
     </View>
    )
}