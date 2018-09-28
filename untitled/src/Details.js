/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ImageBackground, Dimensions,
    Button,
    Image,
    TextInput
} from 'react-native';
import Mine from "./Mine";
import {StackNavigator} from "react-navigation";
import Home from "./Home";


const {height, width} = Dimensions.get('window');


export default class Details extends Component {

    constructor (){
      super();

    }

    navrightbtn = () =>{
      console.log("this is right btn");
      this.refs.navigation.showMessage()
    }

    static navigationOptions = ({navigation, screenProps}) => ({

            headerTitle: '详情',

            headerRight:<Button title="Menu" onPress={(navigation)=>{ navigation.navigate('Home')}}/>,

            //设置滑动返回的距离
            gestureResponseDistance: {horizontal: 300},

            //是否开启手势滑动返回，android 默认关闭 ios打开
            // gesturesEnabled: true,

            //设置跳转页面左侧返回箭头后面的文字，默认是上一个页面的标题

            //导航栏的样式
            headerStyle: styles.headerStyle,
            //导航栏文字的样式
            headerTitleStyle: styles.headerTitleStyle,
            //返回按钮的颜色
            headerTintColor: 'red',

            //隐藏顶部导航栏
            // header: null,

            //设置顶部导航栏右边的视图  和 解决当有返回箭头时，文字不居中

            //设置导航栏左边的视图
            // headerLeft: (<View/>),

        }

    );

    render() {
        return (
            <View>

                <TouchableOpacity
                    onPress={
                        () => {
                            this.props.navigation.navigate('Mine')
                        }
                    }
                >
            <View  style={{justifyContent: 'center',
                    alignItems: 'center',
                    marginTop:20}}>

                <Image  source={require('.././Image/1.png')}
                                 style={{
                                     height: 100,
                                     width: 100,
                                     borderRadius: 50,
                                 }}
                />
            </View>

                </TouchableOpacity>

                <View  style={{justifyContent: 'center',
                    alignItems: 'center',
                    marginTop:20,}}>
                    <Text
                    style={{fontSize:30}}


                    >芝麻信用</Text>
                </View>

                <View  style={{justifyContent: 'center',
                    alignItems: 'center',
                    marginTop:10}}>
                    <Text>wocaonidaye</Text>
                </View>

                <TextInput
                    style={{borderWidth:1,
                        backgroundColor:'pink',
                        width:width*0.9,
                        borderRadius:10,
                      marginLeft:'5%',marginTop:20,height:30}}/>


                <TextInput
                    style={{borderWidth:1,
                        backgroundColor:'pink',
                        width:width*0.9,
                        borderRadius:10,
                        marginLeft:'5%',marginTop:20,height:30}} placeholder={'身份证号码'}/>






            </View>
        );
    }
}

const styles = StyleSheet.create({

});

