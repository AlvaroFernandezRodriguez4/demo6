import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import React from 'react';
import { useMovies } from '../hooks/useMovies';
import Slider from '../components/Slider';

export default function Vertical() {
  const { nowPlaying, loading, loadMoreMovies } = useMovies();

  return (
    <View style={styles.container}>
      {nowPlaying ? (
        <Slider
          movies={nowPlaying.movies}
          height={500}
          backgroundColor="#f5f5f5"
          loadMore={loadMoreMovies}
          horizontal={false}
        />
      ) : (
        <ActivityIndicator size="large" color="#000" />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
});
