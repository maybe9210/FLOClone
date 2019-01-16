import React, { Component } from 'react';
import { View, ScrollView, Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const height = width * 0.8;

class Carousel extends Component {
    render() {
        const { images } = this.props;
        let count = 0;
        if (images && images.length) {
            return ( 
                <View style={StyleSheet.scrollContainer}>
                    <ScrollView 
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                    >
                        {images.map(image=>(
                            <Image style={styles.image} source={image.source} key={count++}/>
                        ))}
                    </ScrollView>
                </View>
            )
        }
        return null;
    }
}

const styles = StyleSheet.create({
    scrollContainer: {
        height,
    },
    image: {
        width,
        height,
    }
})

export default Carousel;