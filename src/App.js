import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, Pressable, StatusBar, Linking } from 'react-native';

const colorGitHub = '#010409';
const imageGit = 'https://avatars.githubusercontent.com/u/62311495?v=4'
const gitHubLink = 'https://github.com/ElcioHatiya'
const App = () => {

    const handlePressGoTo = async () => {
        console.log('Verificando Link');
        const res = await Linking.canOpenURL(gitHubLink);
        if(res){
            console.log('Link Aprovado');
            await Linking.openURL(gitHubLink);
        }
    };
    return ( 
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGitHub} barStyle="light-content"/>                
                <View style={style.content}>
                    <Image  accessibilityLabel="Elcio Hatiya imagem avatar"
                            style={style.avatar} 
                            source = {{uri: imageGit}} 
                    />  
                    <Text 
                        accessibilityLabel='Nome: Elcio Hatiya'
                        style={[style.defaultText, style.name]}>Elcio Hatiya</Text>
                    <Text style={[style.defaultText, style.do]}>React-Native Developer</Text>
                    <Text 
                        accessibilityLabel='GitHub: Elcio Hatiya'
                        style={[style.defaultText]}>github.com/ElcioHatiya</Text>
                    <Text 
                        accessibilityLabel='Instagram: Elcio Hatiya'
                        style={[style.defaultText]}>@hatiyae</Text>
                    <Pressable onPress={handlePressGoTo}>                               
                        <View>
                        <Text style={style.button}>Open in GitHub</Text>
                    </View>
                    </Pressable>
                </View>
        </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container: {
        backgroundColor:colorGitHub,
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    content: {
        alignItems: 'center',
        padding: 20,
    },
    defaultText: {
        fontSize: 20,
        color: 'white',
    },
    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },
    name: {  
        marginTop: 20,   
        fontWeight: 'bold',
        fontSize: 30,
    },
    do: {
        fontSize: 23,
        fontWeight: 'bold',
        color: 'gray',
    },
    button: {
        marginTop: 20,
        backgroundColor: 'gray',
        borderRadius: 10,
        padding: 20,
        fontWeight: 'bold',
        fontSize: 17,
    },

});