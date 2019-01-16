import React, { Component } from 'react';
import { SafeAreaView, FlatList, ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import HeaderView from './HeaderView';
import Carousel from './Carousel';
import CoverImage from './CoverImage';
import { images, music } from './data';

export default class FLO extends Component {

  render(){
    return (
      <SafeAreaView>
        <View style={StyleSheet.container}>
          <HeaderView />
          <Carousel images={images} />
          <Text> {"최신음악 >"} </Text>
          <FlatList
            horizontal
            data={music}
            renderItem={({item}) => <CoverImage source={item.source} title={item.title} artist={item.artist}> {item.key} </CoverImage>}
          />
        </View>
      </SafeAreaView>
    )
  }
}

const style = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});