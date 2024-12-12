import { StyleSheet, View, ActivityIndicator } from 'react-native';
import React from 'react';
import { useMovies } from '../hooks/useMovies';
import Slider from '../components/Slider';

export default function HomeScreen() {
  const { nowPlaying, loading, loadMoreMovies } = useMovies();

  return (
    <View style={styles.container}>
      {nowPlaying ? (
        <Slider
          movies={nowPlaying.movies}
          height={300}
          backgroundColor="#f5f5f5"
          loadMore={loadMoreMovies}
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
    justifyContent: 'center',
    alignItems: 'center',
  },
});
