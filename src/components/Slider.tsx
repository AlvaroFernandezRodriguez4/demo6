import React from 'react';
import { FlatList, StyleSheet, View, Image } from 'react-native';
import { Movie } from '../config/entities/Movie';

interface MoviesProps {
  movies: Movie[];
  height: number;
  backgroundColor?: string;
  loadMore: () => void; 
  horizontal?: boolean;  
}

export default function Slider({ movies, height, backgroundColor = '#fff', loadMore, horizontal = true }: MoviesProps) {
  return (
    <View style={[styles.contenedor, { backgroundColor, height }]}>
      <FlatList
        data={movies}
        horizontal={horizontal}  
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.movieContainer}>
            <Image
              style={styles.imagen}
              source={{
                uri: `https://image.tmdb.org/t/p/original${item.poster}`,
              }}
            />
          </View>
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
  movieContainer: {
    alignItems: 'center'
  },
  imagen: {
    width: 250,  
    height: 300, 
  },
});
