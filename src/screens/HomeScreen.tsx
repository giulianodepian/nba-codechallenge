import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import useGetTeams from '../hooks/useGetTeams';
import Team from '../components/Team';

const HomeScreen = () => {
  const {data, loading, error} = useGetTeams();
  // console.log(data?.map(team => team.WikipediaLogoUrl));

  const navigation = useNavigation();

  return (
    <View style={styles.center}>
      <FlatList 
        data={data}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => {
            navigation.navigate(
              'TeamScreen', {
                team: item,
              }
            )
          }}>
            <Team team={item}/>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.Key}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default HomeScreen;
