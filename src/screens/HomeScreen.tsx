import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import useGetTeams from '../hooks/useGetTeams';
import {HomeScreenProps} from '../types/navigation';
import Team from '../components/Team';

const HomeScreen = () => {
  const {data, loading, error} = useGetTeams();
  // console.log(data?.map(team => team.WikipediaLogoUrl));

  const navigation = useNavigation<HomeScreenProps>();

  return (
    <View style={styles.center}>
      <FlatList 
        data={data}
        renderItem={({item}) => (
          <Team team={item}/>
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
