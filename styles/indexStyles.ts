import { StyleSheet } from "react-native";


export const estilos = StyleSheet.create({
 container : {
  flex: 1,
  paddingHorizontal: 12,
  position: 'relative',
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
   overflow: 'hidden',
   position: 'relative',
 },
 input :{
  width: '100%',
  height:'100%',
  backgroundColor: '#dbd6d6',
  color: '#000000',
  paddingLeft: 40
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
 },
 searchButton:{
  position:'absolute',
  left: 12,
  top: 8,
  height:40,
  width:40
 },
 plusButton:{
   backgroundColor: '#706a6a',
   position: 'absolute',
   right: 12,
   bottom: 12,
   height: 60,
   width: 60,
   borderRadius: 30,
   justifyContent:'center',
   alignItems:'center'
            }
});