import React from 'react';
import {
    StyleSheet,
    View,
    StatusBar,
    Platform
} from 'react-native';

export default function AppLayout(props) {
    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0.24)" animated />
            {Platform.OS === 'android' && Platform.Version >= 20
                ? <View style={{ height: 24, backgroundColor: "black" }} /> : null}
            {props.children}
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
});