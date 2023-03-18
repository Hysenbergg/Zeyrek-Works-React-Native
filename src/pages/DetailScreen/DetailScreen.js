import React, { useEffect } from 'react';
import {View, Text, SafeAreaView, Alert} from 'react-native';
import useFetch from '../../hooks/useFetch';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import {WebView} from 'react-native-webview';
import styles from './DetailScreen.style';
import Realm from 'realm';
let realm;

function DetailScreen({route}) {

  const {id} = route.params;

  // İşin detayı sayfasında id yardımı ile detaylarının listeleriz.
  const {data, loading} = useFetch(
    `https://www.themuse.com/api/public/jobs/${id}`,
  );

  // Component ilk olarak çalıştığında Realm veritabanıı çağırıyoruz.
  useEffect(() => {
    realm = new Realm({ path: 'JobDatabase.realm'});
  }, []); 

  // Realm veritabanı yardımı ile cihazın yerel hafızasına favorilere eklenmiş işi kayıt ediyoruz.
  const addedFavoriteJob = () => {
    realm.write(() => {
      var ID =
        realm.objects('Favorite_Job_Schema').sorted('job_id', true).length > 0
          ? realm.objects('Favorite_Job_Schema').sorted('job_id', true)[0].job_id + 1
          : 1;
      realm.create('Favorite_Job_Schema', {
        job_id: ID,
        category: data.categories[0].name,
        company: data.company.name,
        location: data.locations[0].name,
        level: data.levels[0].name
      })
    });
    Alert.alert('Favorilere eklendi.');
  }

  return (
    <SafeAreaView style={styles.conteiner}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Text style={styles.company_name}>{data.categories[0].name}</Text>
          <Text style={styles.location_text}>
            Location :{' '}
            <Text style={styles.location_info}>{data.locations[0].name}</Text>
          </Text>
          <Text style={styles.level_text}>
            Job Level :{' '}
            <Text style={styles.level_info}>{data.levels[0].name}</Text>
          </Text>
          <Text style={styles.title}>Job Detail</Text>
          <View style={styles.webview_container}>
            {/* WebView ile apiden gelen html bilgilerini ekranda gösteriyoruz. */}
            <WebView style={styles.webview} source={{html: data.contents}} />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}} >
            <Button
              buttonText="Submit"
              iconName="login"
              iconSize={20}
            />
            <Button
              buttonText="Favorite Jobs"
              iconName="cards-heart"
              iconSize={20}
              onPress={() => addedFavoriteJob()}
            />
          </View>
        </>
      )}
    </SafeAreaView>
  );
}

export default DetailScreen;