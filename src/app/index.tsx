import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { usersList } from "../../utils/contactList";


export default function ContactPage(){


  return (
    <View style={estilos.container}>

      <View style={estilos.header}>
      <Text style={estilos.title} > Contactos ({usersList.length})</Text>
      <Text style={estilos.description}> Veja sua lista de contactos registrados</Text>
      </View>

     <View style={estilos.formContainer}>
      <TextInput style={estilos.input}/>
     </View>

    <View style={{flex: 1, marginTop: 12}}>

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
    </View>
    </View>
  );
}

const estilos = StyleSheet.create({
 container : {
  flex: 1,
  paddingHorizontal: 12
 },
 header: {
  paddingVertical: 14,
  gap: 8
 },
 title : {
  fontSize: 20,
  fontWeight: 'bold'
 },
 description : {
   fontSize: 14,
  fontWeight: 'light',
  color: '#706a6a'
 },
 formContainer : {
   width: '100%',
   height: 40,
   borderRadius: 16,
   overflow: 'hidden'
 },
 input :{
  width: '100%',
  height:'100%',
  backgroundColor: '#706a6a'
 },
 card : {
  height: 'auto',
  width: '100%',
  display:'flex',
  marginTop: 12,
  gap: 6,
  flexDirection:'row',
  backgroundColor: '#f3f1f1',
  borderRadius: 16,
  padding: 8
 },
 userName:{
  fontSize: 16,
  fontWeight: 'bold'
 },
 imageContainer :{
  height: 40,
  width: 40,
  borderRadius:20,
  borderWidth: 1,
  borderColor: '#706a6a',
  overflow: 'hidden',
  justifyContent:'center',
  alignItems:'center'
 }
});