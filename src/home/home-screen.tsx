import type {NavigationProp} from '@react-navigation/native';
import React from 'react';
import {Button} from 'react-native';
import type {RootStackParamList} from '../../App';
import {Container} from './home-screen.styles';
import {ScreenBase} from '../components/screen-base/screen-base';

interface HomeScreenProps {
  navigation: NavigationProp<RootStackParamList, 'Home'>;
}

export default function HomeScreen({navigation}: HomeScreenProps) {
  return (
    <ScreenBase>
      <Container>
        <Button
          title="Ir para a TodoList"
          onPress={() => navigation.navigate('TodoList')}
        />
      </Container>
    </ScreenBase>
  );
}
