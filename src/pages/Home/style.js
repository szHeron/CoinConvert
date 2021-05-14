import { StyleSheet } from 'react-native';
import Colors from '../../styles/colors';

const styles = StyleSheet.create({
    inputValueArea:{
        width:'100%',
        alignItems:'center'
    },
    flagIcon:{
        margin:10,
    },
    txtTitle:{
        fontSize:30,
        fontWeight:'bold',
        color:Colors.txt,
        margin:20,
        textAlign:'center'
    },
    txtInput:{
        fontSize:30,
        color:Colors.txt,
        borderBottomWidth:0.5,
        borderColor:Colors.txt,
        marginTop:10,
        marginBottom:20
    }, 
    txtMoneyInfo:{
        fontSize:11,
        fontWeight:'100',
        color:Colors.txt
    }
});

export default styles;