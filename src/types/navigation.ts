import {Team} from '../types/team';
import {Player} from '../types/player'

import type {
    StackNavigationProp,
    StackScreenProps,
  } from '@react-navigation/stack';
  
  export type RootStackParamList = {
    HomeScreen: {param: string};
    TeamScreen: {team: Team};
    PlayerScreen: {player: Player}
  };
  
  export type RootStackScreenProps<T extends keyof RootStackParamList> =
    StackScreenProps<RootStackParamList, T>;
  
  export type HomeScreenProps = StackNavigationProp<RootStackParamList, 'HomeScreen'> ;
  export type TeamScreenProps = StackNavigationProp<RootStackParamList, 'TeamScreen'>;
  export type PlayerScreenProps = StackNavigationProp<RootStackParamList, 'PlayerScreen'>;
  
  declare global {
    namespace ReactNavigation {
      interface RootParamList extends RootStackParamList {}
    }
  }
  