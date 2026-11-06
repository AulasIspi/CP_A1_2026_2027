import MaterialIcons from "@react-native-vector-icons/material-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import Header from "../../components/Header";
import Input from "../../components/Input";
import { estilos } from "../../styles/indexStyles";


export default function RegisterPage(){

     const [usernumber, setUsernamber] = useState<string>('');
     const [username, setUsername] = useState<string>('');
     const [email, setEmail] = useState<string>('');


   const router = useRouter();
   router.canGoBack();

    return (
         <View style={estilos.container}>
   <View>
    <TouchableOpacity onPress={()=>router.replace('/')} >
         <MaterialIcons name="arrow-back" size={24} color="#111010"/>
    </TouchableOpacity>
   </View>
      <Header title='Novo Registro' description='Registre um novo contacto em sua lista' />


  <View style={{display: 'flex', gap: 8, flex: 1, alignItems:'center'}}>
        <View style={{ backgroundColor: '#dbd6d6', alignItems:'center',justifyContent:'center', height: 100, width: 100,
             borderRadius: 50, borderWidth: 1, borderColor: "#000000"}}>
          <MaterialIcons name="person" size={90} color="#111010"/>
        </View>
      <Input setSearch={setUsername} />
      <Input setSearch={setUsernamber} />
      <Input setSearch={setEmail} />
    
  </View>
  


    </View>
    )
}