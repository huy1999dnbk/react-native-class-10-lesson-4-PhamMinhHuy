/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
  Alert,
  Handle,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const { width, height } = Dimensions.get('window');

const DATA = [
  {
    url: 'https://a-static.mlcdn.com.br/618x463/iphone-12-apple-64gb-azul-61-cam-dupla-12mp-ios/magazineluiza/155597900/42720757e2ad2307009d75f22d457e80.jpg',
    name: 'Iphone 12',
    cost: '20000000VND'
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5eqK_mbxJ8X2ch7mkPygAc1aJs4pGe-FCkA&usqp=CAU',
    name: 'PC de ban',
    cost: '22000000VND'
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo-EX5nW0bS69BUjwU2kzKPm7nqIC0sdu5Eg&usqp=CAU',
    name: 'Laptop',
    cost: '14000000VND'
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBCN0daqNWndzDcmUA0EcpphZODyye5nUa2A&usqp=CAU',
    name: 'Laptop 2',
    cost: '30000000VND'
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLLuo4Oq3eov8b3nFnpq1xNIFJopLLkvrQ9A&usqp=CAU',
    name: 'Classic PC',
    cost: '40000000VND'
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUab4bptPqFPmped5EvCkHL0Z7A8DHmBQP-w&usqp=CAU',
    name: 'PC 2',
    cost: '24000000VND'
  },
]


type Product = {
  url: string,
  name: string,
  cost: string,
}


const Item = ({ item }: { item: Product }) => {
  return (
    <TouchableOpacity style={styles.itemList} onPress={() => {
      Alert.alert(
        'thong bao',
        `ten sp la: ${item.name}, gia sp la: ${item.cost}`
      )
    }}>
        <Image
          style={styles.imageList}
          source={{
            uri: `${item.url}`,
          }}
        />
        <View style={styles.inforProduct}>
          <Text style={{ fontSize: 16 }}>{item.name}</Text>
          <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 15, marginTop: 5 }}>{item.cost}</Text>
        </View>
    </TouchableOpacity>

  )
}

const App = () => {


  const renderItem = ({ item }: { item: Product }) => (
    <Item item={item} />
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.name}
        data={DATA}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  itemList: {
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 0.3,
    borderColor: 'black',
    margin: 10,
    height: height / 2.4,
    borderRadius: 10,
    overflow: 'hidden'
  },
  imageList: {
    flex: 2,
    resizeMode: 'contain'
  },
  inforProduct: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 20
  }
});

export default App;
