import React from 'react';
import { View, Text, Image} from 'react-native';
import Styles from './style';

export default function currency(props){
    function renderCurrency(){
        switch(props.name){
            case 'BRL':
                return <Text style={Styles.txtMoney}>R$ {props.coin}</Text>
            case 'EUR':
                return <Text style={Styles.txtMoney}>€ {props.coin}</Text>
            case 'JPY':
                return <Text style={Styles.txtMoney}>¥ {props.coin}</Text>
            case 'BTC':
                return <Text style={Styles.txtMoney}>$ {props.coin}</Text>
            default:
                break;
        }
    }
    return(
        <View style={Styles.currencyArea}>
            <View style={{flexDirection:'row'}}>
                <Image style={Styles.flagIcon} source={props.image}/>
                <View>
                    <Text style={Styles.txtMoneyName}>{props.name}</Text>
                    <Text style={Styles.txtMoneyInfo}>{props.info}</Text>
                </View>
            </View>
            {renderCurrency()}
        </View>
    );
}
