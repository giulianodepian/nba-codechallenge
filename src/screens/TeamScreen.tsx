import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {RootStackScreenProps} from '../types/navigation';

const TeamScreen = ({route}: RootStackScreenProps<'TeamScreen'>) => {

    const navigation = useNavigation();
    const {team} = route.params;

    return (
        <View style={styles.center}>
            <Text>Team Screen {team.Name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
    },
});

export default TeamScreen;