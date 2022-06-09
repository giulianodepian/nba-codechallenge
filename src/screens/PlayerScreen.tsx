import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {RootStackScreenProps} from '../types/navigation';

const PlayerScreen = ({route}: RootStackScreenProps<'PlayerScreen'>) => {

    const navigation = useNavigation();
    const {player} = route.params;

    return (
        <Text>Player Screen {player.FirstName}</Text>
    );
};

export default PlayerScreen;