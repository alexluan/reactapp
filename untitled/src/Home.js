
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Platform, //判断当前运行的系统 Platform.OS === 'ios'
    Navigator,
    Dimensions,
    TextInput,
    ImageBackground,
    TouchableOpacity


} from 'react-native';


const {height, width} = Dimensions.get('window');


export default class Home extends Component {

    // static navigationOptions = {
    //     //stackNavigator的属性
    //     header: null,
    // }


    render() {
        return (

            <ImageBackground style={{height:height,width:width}}
                             source={require('.././Image/10.jpg')}
            >
                {
                    <View
                        style={{
                            position: 'absolute',
                            top: (Dimensions.get('window').height - 30) / 2,
                            left:'15%',
                            width: width*0.7,
                            justifyContent: 'center',
                            alignItems: 'center',

                            height: 30,
                            zIndex: 9,
                            flexDirection:'row',
                            backgroundColor:'rgba(255,255,255,.2)',
                            borderRadius:20,

                        }}
                    >
                        <Image source={require('.././Image/11.png')} style={{height:35,width:35}}/>

                        <TextInput style = {styles.inp}  ></TextInput>



                        <View>
                            <TouchableOpacity style={{marginLeft:15}}  activeOpacity={0.5}onPress={
                                () => {
                                    this.props.navigation.navigate('Details')
                                }
                            }
                           >
                                <Text style={{color:'white',fontSize:20}}>搜索</Text>
                            </TouchableOpacity>
                        </View>


                    </View>




                }

            </ImageBackground>
        );
    }




}

const styles = StyleSheet.create({



    inp:{
        width:'60%',
        height:30,

        // borderWidth:3,
        borderRadius:20


    }

});


