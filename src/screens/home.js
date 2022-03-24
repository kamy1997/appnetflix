import React from 'react';

import {StatusBar, Dimensions} from 'react-native';

import styled from 'styled-components/native';

import Header from '../components/Header';
import Movies from '../components/Movie';
import LinearGradient from 'react-native-linear-gradient';
import Hero from '../components/Hero';

const api = [
  require('../../assets/movie1.jpg'),
  require('../../assets/movie2.jpg'),
  require('../../assets/movie3.jpg'),
  require('../../assets/movie4.jpg'),
  require('../../assets/image5.jpg'),
  require('../../assets/image6.jpg'),
  require('../../assets/movie7.webp'),
  require('../../assets/movie8.jpg'),
];

const movies = [
  {
    nom: 'fiends',
    image: require('../../assets/movie1.jpg'),
    video: 'https://www.youtube.com/watch?v=nnn02NDIEiE',
    video_id: 'nnn02NDIEiE',
  },
  {
    nom: 'tactics love',
    image: require('../../assets/movie2.jpg'),
    video: 'https://www.youtube.com/watch?v=nnn02NDIEiE',
    video_id: 'nnn02NDIEiE',
  },
  {
    nom: '',
    image: require('../../assets/movie2.jpg'),
    video: 'https://www.youtube.com/watch?v=nnn02NDIEiE',
    video_id: 'nnn02NDIEiE',
  },
];
const Container = styled.ScrollView`
  flex: 1;
  background-color: #000;
`;

const Poster = styled.ImageBackground`
  width: 100%;
  height: ${(Dimensions.get('window').height * 81) / 100}px;
`;

const Gradient = styled(LinearGradient)`
  height: 100%;
`;

const Home = ({navigation}) => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Container>
        <Poster source={require('../../assets/poser.jpg')}>
          <Gradient
            locations={[0, 0.2, 0.6, 0.93]}
            colors={[
              'rgba(0,0,0,0.5)',
              'rgba(0,0,0,0.0)',
              'rgba(0,0,0,0.0)',
              'rgba(0,0,0,1)',
            ]}>
            <Header />
            <Hero />
          </Gradient>
        </Poster>
        <Movies
          label="Tendances Actuelles"
          item={movies}
          details={() => navigation.navigate('details')}
        />
        <Movies
          label="Programmes originaux Netflix"
          details={() => navigation.navigate('details')}
          item={movies}
        />
        <Movies
          label="Films dActions "
          details={() => navigation.navigate('details')}
          item={movies}
        />
      </Container>
    </>
  );
};

export default Home;
