import React from 'react';

import {useState, useCallback} from 'react';
import {Button, View, Alert} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

export default function Details({route}) {
  const {
    params: {movieUrl},
  } = route;
  console.log('url ', movieUrl);
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying(prev => !prev);
  }, []);

  return (
    <View>
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={movieUrl}
        onChangeState={onStateChange}
      />

      <Button title={playing ? 'pause' : 'play'} onPress={togglePlaying} />
    </View>
  );
}
