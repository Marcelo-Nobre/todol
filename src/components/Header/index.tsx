import { View, Image, TextInput, Touchable, TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';
import logoImage from '../../assets/Logo.png';

export function Header() {
    return (
        <View style={styles.headerContainer}>
            <Image source={logoImage}/>
            <View style={styles.form}>
                <TextInput style={styles.input}/>

                <TouchableOpacity style={styles.button}>
                    <Text>+</Text>
                </TouchableOpacity>
            </View>
         </View>
    );
 }
