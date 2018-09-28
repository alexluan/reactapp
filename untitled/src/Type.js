import React, {Component} from 'react';
import {

    StyleSheet,
    Text,
    View,
    Image,


    Dimensions,

    ImageBackground,
    TouchableOpacity


} from 'react-native';

import ImagePicker from 'react-native-image-picker';





const {height, width} = Dimensions.get('window');

export default class Type extends Component {

    state = {
        avatarSource: null,
        videoSource: null
    };

    selectPhotoTapped() {
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true
            }
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled photo picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = { uri: response.uri };

                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    avatarSource: source
                });
            }
        });
    }


    render() {
        return (

            <ImageBackground style={{height: height, width: width}}
                             source={require('.././Image/16.png')}
            >

                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute',
                        width: width,
                        flex: 1,
                        marginTop:60
                    }}
                >


                <TouchableOpacity   onPress={this.selectPhotoTapped.bind(this)}>
                    { this.state.avatarSource === null ? <Image source={require('.././Image/1.png')} style={{
                            height: 100,
                            width: 100,
                            borderRadius:50}}/>:
                        <Image source={this.state.avatarSource}
                        style={{
                        height: 100,
                        width: 100,
                        borderRadius:50}}/>
                    }

                </TouchableOpacity>

                    <Text style={{ fontSize: 20, marginTop: 10,backgroundColor:'transparent',color:'white' }}>雪儿 </Text>
                </View>



                <View style={styles.wenzi}>
                    <View style={styles.yuyue}>
                        <Image source={require('.././Image/15.png')} style={{height: 35, width: 35}}/>
                        <Text
                            style={{
                                fontSize: 20,
                                marginTop: 10

                                ,marginLeft:'5%',backgroundColor:'transparent',color:'white'}}>
                            我的预约 </Text>


                        <Text
                            style={{
                                fontSize: 12,
                                marginTop: 10,
                                fontWeight: 'bold'
                                ,marginLeft:'5%',backgroundColor:'transparent',color:'white'}}>
                            预约过的咨询师 </Text>




                        <TouchableOpacity onPress={
                            () => {
                                this.props.navigation.navigate('Details')
                            }
                        }
                                          style={{ position: 'absolute',
                                              right: 0,}}
                        >

                            <Image source={require('.././Image/17.png')}
                                   style={{height: 35,

                                       width: 35}} />
                        </TouchableOpacity>


                    </View>



                    <View style={styles.yuyue1}>
                        <Image source={require('.././Image/12.png')} style={{height: 35, width: 35}}/>
                        <Text
                            style={{
                                fontSize: 20,
                                marginTop: 10

                                ,marginLeft:'5%',backgroundColor:'transparent',color:'white'}}>
                            我的关注 </Text>







                        <TouchableOpacity onPress={
                            () => {
                                this.props.navigation.navigate('Details')
                            }
                        }
                                          style={{ position: 'absolute',
                                              right: 0,}}
                        >

                            <Image source={require('.././Image/17.png')}
                                   style={{height: 35,

                                       width: 35}} />
                        </TouchableOpacity>
                    </View>






                    <View style={styles.yuyue2}>
                        <Image source={require('.././Image/13.png')} style={{height: 35, width: 35}}/>
                        <Text
                            style={{
                                fontSize: 20,
                                marginTop: 10

                                ,marginLeft:'5%',backgroundColor:'transparent',color:'white'}}>
                            系统消息 </Text>




                        <TouchableOpacity onPress={
                            () => {
                                this.props.navigation.navigate('Details')
                            }
                        }
                                          style={{ position: 'absolute',
                                              right: 0,}}
                        >

                            <Image source={require('.././Image/17.png')}
                                   style={{height: 35,

                                       width: 35}} />
                        </TouchableOpacity>
                    </View>




                    <View style={styles.yuyue4}>
                        <Image source={require('.././Image/18.png')} style={{height: 35, width: 35}}/>
                        <Text
                            style={{
                                fontSize: 20,
                                marginTop: 10

                                ,marginLeft:'5%',backgroundColor:'transparent',color:'white'}}>
                            联系电话</Text>

                        <Text
                            style={{
                                fontSize: 12,
                                marginTop: 10,
                                fontWeight: 'bold'
                                ,marginLeft:'5%',backgroundColor:'transparent',color:'white'}}>
                            13333333333 </Text>


                    </View>



                </View>
            </ImageBackground>
        );
    }


}

const styles = StyleSheet.create({


    yuyue: {
        flexDirection: 'row',
        textAlign:'center',
        alignItems: 'center',
        width:width*0.9,







    },
    yuyue1: {
        flexDirection: 'row',
        marginTop:30,

        alignItems: 'center',





    },
    yuyue2: {
        flexDirection: 'row',
        marginTop:30,
        alignItems: 'center',




    },
    yuyue4: {
        flexDirection: 'row',
        marginTop:30,
        alignItems: 'center',




    },
    wenzi: {
        position: 'absolute',
        top: (Dimensions.get('window').height-40)/3 ,
        marginTop:40,



        marginLeft:'5%'




    }

});


