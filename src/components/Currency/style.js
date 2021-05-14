import { StyleSheet } from 'react-native';
import Colors from '../../styles/colors';

const styles = StyleSheet.create({
    currencyArea:{
        width:'100%',
        backgroundColor: Colors.backgroundCurrency,
        flexDirection:'row',
        alignItems:'stretch',
        justifyContent:'space-between',
        padding:10,
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
    txtMoneyName:{
        fontSize:25,
        fontWeight:'bold',
        color:Colors.txt
    },
    txtMoneyInfo:{
        fontSize:11,
        fontWeight:'100',
        color:Colors.txt
    },
    txtMoney:{
        fontSize:25,
        color:Colors.txt
    }
});

export default styles;