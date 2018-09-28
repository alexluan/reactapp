import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Animated,
    Easing,
    Modal,
    Button,
    TouchableOpacity
} from 'react-native';

export default class Mine extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fadeAnim: new Animated.Value(15),  //设置初始值
            modal: false,
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Animated.Text style={{fontSize: this.state.fadeAnim,marginTop:200,textAlign:'center'}}>
                   别总是回忆</Animated.Text>


                <Button title='显示modal'   onPress={() => this.setState({
                    modal: !this.state.modal
                })}



                />

                <Modal
                    animationType={'slide'}
                    transparent={true}
                    onRequestClose={() => console.log('onRequestClose...')}
                    visible={this.state.modal}
                >
                    <TouchableOpacity
                        onPress={() => this.setState({
                            modal: false
                        })}
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',


                        }}>
                        <View style={{

                            width: 200,
                            height:100,
                            backgroundColor: 'pink',
                            alignItems:'center',
                            justifyContent:'center'



                        }}>

                            <Text >昨天的太阳</Text>
                            <Text>晒不干今天的衣裳</Text>


                        </View>
                    </TouchableOpacity>

                </Modal>

            </View>
        );
    }

    componentDidMount() {
        Animated.timing(
            this.state.fadeAnim,  //初始值
            {
                toValue: 22,            //结束值
                duration: 2000,        //动画时间
                easing: Easing.linear,
            },
        ).start();               //开始
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    }
});