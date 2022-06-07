import {TeamProps} from '../types/teamComponent';
import {View, Text, Image, StyleSheet} from 'react-native';
import { SvgCssUri } from 'react-native-svg';
import React from 'react';
import { Dimensions } from 'react-native';

const styles = StyleSheet.create({
    logos: {
        paddingBottom: 5,
        paddingTop: 5,
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

const Team = (props : TeamProps) => {
    const color = '#' + props.team.PrimaryColor;
    return (
        <View style={styles.logos}>
            <SvgCssUri
            width='100'
            height='100'
            uri={props.team.WikipediaLogoUrl} 
            fill={color}
            />
        </View>
    )
}

export default Team;