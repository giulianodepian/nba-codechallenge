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
            <FlatList 
                data={data}
                ListHeaderComponent={<View style={styles.dummybox}><Text style={styles.dummytext}>-</Text></View>}
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
            <SearchBar
                style={styles.search}
                onChangeText={handleOnChangeText}
                onClearPress={handleOnClearText}
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
    dummytext: {
        fontSize: 30,
        textAlign: 'center'  
    },
    dummybox: {
        paddingTop: 10,
        paddingBottom: 10,      
    },
    search: {
        position: 'absolute',
        top:0,
        width: '100%',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        height: 55,
    }
});

export default TeamScreen;