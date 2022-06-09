import {View, Text, StyleSheet, Image} from 'react-native';
import {PlayerInfoProps} from '../types/playerInfoComponent';
import React from 'react';

const PlayerInfo = (props: PlayerInfoProps) => {
    return(
    <View style={styles.container}>
        <View style={styles.imageView}>
            <Image
                source={{uri: props.player.PhotoUrl}}
                style={styles.photo}
            />
        </View>
        <View style={styles.infoView}>
            <Text style={styles.infoText}>First Name: {props.player.FirstName}</Text>
            <Text style={styles.infoText}>Last Name: {props.player.LastName}</Text>
            <Text style={styles.infoText}>Height: {props.player.Height}</Text>
            <Text style={styles.infoText}>Weight: {props.player.Weight}</Text>
            <Text style={styles.infoText}>Position: {props.player.Position}</Text>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    imageView: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
    },
    infoView: {
        flex: 1,
        fontSize: 40,
        alignContent: 'center',
        justifyContent: 'center',
    },
    photo: {
        width:'100%',
        height:200,
    },
    infoText: {
        fontSize: 20,
    }
})

export default PlayerInfo;