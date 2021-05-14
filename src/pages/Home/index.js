import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import Currency from '../../components/Currency/index';
import Api from '../../services/Api';
import Styles from './style';

export default function Converter(){
    const imageNames = {
        brazil: require('../../assets/brazil.png'),
        usa: require('../../assets/usa.png'),
        euro: require('../../assets/euro.png'),
        japan: require('../../assets/japan.png'),
        bitcoin: require('../../assets/bitcoin.png'),
    };
    const [money,setMoney] = useState(1);
    const [brl,setBRL] = useState(0);
    const [eur,setEUR] = useState(0);
    const [jpy,setJPY] = useState(0);
    const [btc,setBTC] = useState(0);

    async function getCurrency(currencyName){
        try{
            const response = await Api.get(`convert?q=USD_${currencyName}&compact=ultra&apiKey=ffdaca0360b56b40b4b4`);
            const price = await (response.data[`USD_${currencyName}`]*parseFloat(money));
            switch (currencyName) {
                case 'BRL':
                    setBRL(price.toFixed(2));
                    break;
                case 'EUR':
                    setEUR(price.toFixed(2));
                    break;
                case 'JPY':
                    setJPY(price.toFixed(2));
                    break;
                case 'BTC':
                    setBTC(price);
                    break;
                default:
                    break;
            }
        }catch(err){
            console.log(err.msg);
            alert('Erro ao coletar dados')
        }  
    }

    useEffect(()=>{
        setMoney(1);
        getCurrency('BRL');
        getCurrency('EUR');
        getCurrency('JPY');
        getCurrency('BTC');
    },[])

    return(
        <View>
            <Text style={Styles.txtTitle}>Cotação do Dólar</Text>
            <View style={Styles.inputValueArea}>
                <Image style={Styles.flagIcon} source={imageNames.usa}/>
                <Text style={Styles.txtMoneyInfo}>Dólar</Text>
                <TextInputMask
                    style={Styles.txtInput}
                    type={'money'}
                    maxLength={16}
                    options={{
                        precision: 2,
                        separator: '.',
                        delimiter:',',
                        unit: '$',
                      }}
                    value={money}
                    onChangeText={value => {
                        setMoney(value.replace('$','').replace(/,/g, ''));
                    }}
                />
            </View>
            <Currency name='BRL' info='Real Brasileiro' image={imageNames.brazil} coin={(money*brl).toFixed(2)}/>
            <Currency name='EUR' info='Euro' image={imageNames.euro} coin={(money*eur).toFixed(2)}/>
            <Currency name='JPY' info='Yene' image={imageNames.japan} coin={(money*jpy).toFixed(2)}/>
            <Currency name='BTC' info='Bitcoin' image={imageNames.bitcoin} coin={(money*btc).toFixed(2)}/>
        </View>
    )
}