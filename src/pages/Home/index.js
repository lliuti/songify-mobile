import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons/';

import { 
  Container,
  ListContainer,
  SongList,
  SongBox,
  CurrentSong,
  ActionButtons,  
  Button,
  PlayButton,
} from './styles';

export default function Home() {
  return (
    <LinearGradient colors={['#f5f5f5', '#bfbfbf']} style={{ flex: 1, alignItems: 'center', padding: 40 }}>
      <ListContainer>
        <SongList>
          <SongBox></SongBox>
          <SongBox></SongBox>
          <SongBox></SongBox>
          <SongBox></SongBox>
          <SongBox></SongBox>
        </SongList>
      </ListContainer>

      <CurrentSong></CurrentSong>

      <ActionButtons>
        <Button>
          <MaterialIcons name='fast-rewind' size={36} color='#555'/>
        </Button>
        <PlayButton>
          <LinearGradient style={{ borderRadius: 50, padding: 10 }} colors={['#bfbfbf', '#f5f5f5']}>
            <MaterialIcons name='play-arrow' size={52} color='#555'/>
          </LinearGradient>
        </PlayButton>
        <Button>
          <MaterialIcons name='fast-forward' size={36} color='#555'/>
        </Button>
      </ActionButtons>
    </LinearGradient>
  );
}
