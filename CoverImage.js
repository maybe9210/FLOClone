import React, { Component } from 'react';
import { View, ScrollView, Image, StyleSheet, Dimensions, Text } from 'react-native';

const { width } = Dimensions.get('window');
const height = width * 0.8;

class CoverImage extends Component {
    render() {
        let count = 0;
        const { source, title, artist } = this.props;
        console.log(`title = ${title}, artist = ${artist}, source = ${source}`);
        return (
            <View>
                <Image style={styles.image} source={{uri:source}} key={count++}/>
                <Text>{title}</Text>
                <Text>{artist}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        width :  width/2,
        height,
    }
})

export default CoverImage;