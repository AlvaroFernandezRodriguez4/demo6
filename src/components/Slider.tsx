import React from 'react';
import { FlatList, StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { Movie } from '../config/entities/Movie';

interface MoviesProps {
  movies: Movie[];
  height: number;
  backgroundColor?: string;
  loadMore: () => void; 
}

export default function Slider({ movies, height, backgroundColor = '#fff', loadMore }: MoviesProps) {
  return (
    <View style={[styles.contenedor, { backgroundColor, height }]}>
      <FlatList
        data={movies}
        horizontal
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Image
            style={styles.imagen}
            source={{
              uri: `https://image.tmdb.org/t/p/original${item.poster}`,
            }}
          />
        )}
        onEndReached={loadMore} 
        onEndReachedThreshold={0.5} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
  },
  imagen: {
    width: 200,
    margin: 5,
  },
});