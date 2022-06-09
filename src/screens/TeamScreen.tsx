import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {RootStackScreenProps} from '../types/navigation';
import useGetPlayersByTeam from '../hooks/useGetPlayersByTeam';
import SearchBar from "react-native-dynamic-search-bar";

const TeamScreen = ({route}: RootStackScreenProps<'TeamScreen'>) => {

    const navigation = useNavigation();
    const {team} = route.params;
    const [searchText, setSearchText] = useState<string>('');

    const {data, loading, error} = useGetPlayersByTeam(team.Key);

    const handleOnChangeText = (text: string) => {
        setSearchText(text);
    }

    const handleOnClearText = () => {
        setSearchText('');
    }

    return (
        <View style={styles.center}>
            <SearchBar
                onChangeText={handleOnChangeText}
                onClearPress={handleOnClearText}
            />
            <FlatList 
                data={data}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => {
                        navigation.navigate(
                            'PlayerScreen', {
                                player: item
                            }
                        )
                    }}> 
                        { (item.FirstName.includes(searchText) || item.LastName.includes(searchText)) &&
                        <View style={styles.playernamebox}>
                            <Text style={styles.playernametext}>{item.FirstName} {item.LastName}</Text>
                        </View>
                        }
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
    },
    playernamebox: {
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 1.4,
        borderTopWidth: 1.4,
    },
    playernametext: {
        fontSize: 30,
        color: 'black',
    },
});

export default TeamScreen;