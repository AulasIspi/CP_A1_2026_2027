import { MaterialIcons } from '@react-native-vector-icons/material-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import Header from '../../components/Header';
import Input from '../../components/Input';
import { estilos } from '../../styles/indexStyles';
import { usersList } from "../../utils/contactList";


export default function ContactPage(){

  const [search,setSearch] = useState<string>('');
  const router = useRouter();
    router.canGoBack();
  const sendSearch = ()=>{
    console.log(search);
  }

  return (
    <View style={estilos.container}>

      <Header list={usersList} title='Contactos' description='Veja sua lista de contactos registrados' />
     <Input setSearch={setSearch} sendSearch={sendSearch}/>

<View style={{flex: 1, marginTop: 12, position: 'relative'}}>
  <FlatList
      style={{flex: 1 }}
       showsVerticalScrollIndicator={false}
        data={usersList}
        renderItem={({item, index})=>
          <TouchableOpacity key={index} style={estilos.card}>
            <View style={estilos.imageContainer}>
            <Text>{item.name.charAt(0).toUpperCase()}</Text>
            </View>
            <View>
              <Text style={estilos.userName}> {item.name} </Text>
              <Text style={estilos.description}> {String(item.userNumber)} </Text>
            </View>
            </TouchableOpacity>
        }
      />



    <TouchableOpacity 
    onPress={()=>router.push('/register')}
style={estilos.plusButton}>
        <MaterialIcons name="add" size={30} color="#fafafa" />
       </TouchableOpacity>



    </View>

    </View>
  );
}

