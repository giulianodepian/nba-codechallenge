import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {RootStackScreenProps} from '../types/navigation';
import PlayerInfo from '../components/PlayerInfo'

const PlayerScreen = ({route}: RootStackScreenProps<'PlayerScreen'>) => {

    const navigation = useNavigation();
    const {player} = route.params;

    return (
        <View style={styles.screenContainer}>
            <PlayerInfo player={player} />
        </View>
    );
};

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        flexDirection: 'column',
    },
})

export default PlayerScreen;