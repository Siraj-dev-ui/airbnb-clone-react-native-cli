import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

const GuestScreen = props => {
  const [adults, setAdults] = useState(0);
  const [childrens, setChildrens] = useState(0);
  const [infants, setInfants] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View>
          <Text style={{fontWeight: 'bold', color: 'black'}}>Adults</Text>
          <Text style={{color: '#3d3d3d'}}>Ages 13 or above</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Pressable
            style={styles.button}
            onPress={() => setAdults(Math.max(0, adults - 1))}>
            <Text style={{fontSize: 20, color: '#474747'}}>-</Text>
          </Pressable>
          <Text style={{marginHorizontal: 10, fontSize: 16}}>{adults}</Text>
          <Pressable
            style={styles.button}
            onPress={() => setAdults(adults + 1)}>
            <Text style={{fontSize: 20, color: '#474747'}}>+</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.row}>
        <View>
          <Text style={{fontWeight: 'bold', color: 'black'}}>Childrens</Text>
          <Text style={{color: '#3d3d3d'}}>Ages 2 - 12</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Pressable
            style={styles.button}
            onPress={() => setChildrens(Math.max(0, childrens - 1))}>
            <Text style={{fontSize: 20, color: '#474747'}}>-</Text>
          </Pressable>
          <Text style={{marginHorizontal: 10, fontSize: 16}}>{childrens}</Text>
          <Pressable
            style={styles.button}
            onPress={() => setChildrens(childrens + 1)}>
            <Text style={{fontSize: 20, color: '#474747'}}>+</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.row}>
        <View>
          <Text style={{fontWeight: 'bold', color: 'black'}}>Infants</Text>
          <Text style={{color: '#3d3d3d'}}>Under 12</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Pressable
            style={styles.button}
            onPress={() => setInfants(Math.max(0, infants - 1))}>
            <Text style={{fontSize: 20, color: '#474747'}}>-</Text>
          </Pressable>
          <Text style={{marginHorizontal: 10, fontSize: 16}}>{infants}</Text>
          <Pressable
            style={styles.button}
            onPress={() => setInfants(infants + 1)}>
            <Text style={{fontSize: 20, color: '#474747'}}>+</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default GuestScreen;
