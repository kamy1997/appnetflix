import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Dimensions, TouchableOpacity} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';

import styled from 'styled-components/native';

const Movies = ({label, item, details}) => {
  const navigation = useNavigation();
  return (
    <Container>
      <Label>{label}</Label>
      <MovieScroll horizontal>
        {item.map((movie, item) => {
          return (
            <FlatList key={String(item)}>
              <Octicons name="play" size={26} />

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Details', {movieUrl: movie.video_id});
                }}>
                <MoviePoster resizeMode="cover" source={movie.image} />
              </TouchableOpacity>
            </FlatList>
          );
        })}
      </MovieScroll>
    </Container>
  );
};

const Container = styled.View`
  padding: 20px 0;
`;

const Label = styled.Text`
  color: #fff;
  font-size: 16px;
  margin: 0 0 5px 10px;
`;
const MovieScroll = styled.ScrollView`
  padding-left: 10px;
`;

const MoviePoster = styled.Image`
  width: ${Math.round((Dimensions.get('window').width * 28) / 100)}px;
  height: 150px;
`;

const FlatList = styled.View`
  padding-right: 9px;
`;
export default Movies;
