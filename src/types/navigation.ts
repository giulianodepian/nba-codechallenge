import {Team} from '../types/team';

import type {
    StackNavigationProp,
    StackScreenProps,
  } from '@react-navigation/stack';
  
  export type RootStackParamList = {
    HomeScreen: {param: string};
    TeamScreen: {team: Team};
  };
  
  export type RootStackScreenProps<T extends keyof RootStackParamList> =
    StackScreenProps<RootStackParamList, T>;
  
  export type HomeScreenProps = StackNavigationProp<RootStackParamList, 'HomeScreen'> ;
  export type TeamScreenProps = StackNavigationProp<RootStackParamList, 'TeamScreen'>;
  
  declare global {
    namespace ReactNavigation {
      interface RootParamList extends RootStackParamList {}
    }
  }
  