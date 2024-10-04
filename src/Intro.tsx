import { SafeAreaView, StyleSheet  } from 'react-native';
import { useNavigation, ParamListBase } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import Text, TouchableOpacity  from 'react-native';

function Intro() : JSX.Element {
    console.log('--Intro()');

    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

    useFocusEffect(React.useCallback(()=>{
        setTimeout( async()=> {
            let userId = await AsyncStorage.getItem('userId');
            let isAutoLogin = userId ? true : false;

            if (isAutoLogin) {
                navigation.push('Main');
            }
            else {
                navigation.push('Login');
            }
        },2000);
    },[navigation]));

return (
    <SafeAreaView style={styles.container}>
        <Icon name="taxi" size={100} color={'#34989db'}/>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    textBlack: {
        fontSize: 18,
        color: 'black',
    },
    textBlue: {
        fontSize: 18,
        color: 'blue',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Intro;
