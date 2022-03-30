import React from 'react';

import {StatusBar, Dimensions} from 'react-native';

import styled from 'styled-components/native';

import Header from '../components/Header';
import Movies from '../components/Movie';
import LinearGradient from 'react-native-linear-gradient';
import Hero from '../components/Hero';

const movies = [
  {
    title: 'fiends',
    image: require('../../assets/movie1.jpg'),
    video: 'https://www.youtube.com/watch?v=nnn02NDIEiE',
    video_id: 'nnn02NDIEiE',
  },
  {
    title: 'the willoughbys',
    image: require('../../assets/movie2.jpg'),
    video: 'https://www.youtube.com/watch?v=HnG4ag3Nkes',
    video_id: 'HnG4ag3Nkes',
  },
  {
    title: 'sonic',
    image: require('../../assets/movie3.jpg'),
    video: 'https://www.youtube.com/watch?v=g1LEbvTcUtc',
    video_id: 'g1LEbvTcUtc',
  },
  {
    title: 'never have i ever ',
    image: require('../../assets/movie4.jpg'),
    video: 'https://www.youtube.com/watch?v=FakCjoNnxik',
    video_id: 'FakCjoNnxik',
  },
  {
    title: 'tactics love ',
    image: require('../../assets/image5.jpg'),
    video: 'https://www.youtube.com/watch?v=CTN2EspZa_g',
    video_id: 'CTN2EspZa_g',
  },
  {
    title: 'through my window ',
    image: require('../../assets/image6.jpg'),
    video: 'https://www.youtube.com/watch?v=jNXZO24fohs',
    video_id: 'jNXZO24fohs',
  },
];

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
          label="Séries romantiques coréennnes "
          details={() => navigation.navigate('details')}
          item={movies}
        />
      </Container>
    </>
  );
};
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
export default Home;
