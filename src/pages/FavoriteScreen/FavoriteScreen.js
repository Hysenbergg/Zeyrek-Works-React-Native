import React, {useState} from 'react';
import {SafeAreaView, View, Text, Button, ScrollView, Alert} from 'react-native';
import styles from './FavoriteScreen.style';

// realm değişkeninin içerisine veritabanının bilgilerini eşliyoruz.
const realm = new Realm({path: 'JobDatabase.realm'});

function FavoriteScreen() {

  // realm.objects ile tablo bilgilerini değişkene atıyoruz.
  var favorite_job = realm.objects('Favorite_Job_Schema');

  const [data, setData] = useState(favorite_job);
  const [selected_job_id, setSelectedJob_id] = useState('');

  // Cihazın yerel hafızasından favorilere eklenmiş bir işi silmek için bu fonksiyonu kullanıyoruz.
  const handleJobDeleted = selectedJobID => {
    setSelectedJob_id(selectedJobID);
    realm.write(() => {
      var ID = selectedJobID;
      if(
        realm.objects('Favorite_Job_Schema').filtered('job_id =' + ID).length >0
      ){
        realm.delete(realm.objects('Favorite_Job_Schema').filtered('job_id ='+ ID));
        var favorite_job_details = realm.objects('Favorite_Job_Schema');
        console.log(favorite_job_details);
        Alert.alert('Silme işlemi yapıldı.');
      }else{
        Alert.alert('Silme işlemi maalesef yapılamadı.')
      }
    })
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        {data.map(item => (
          <View key={item.job_id} style={styles.container}>
            <View style={styles.info_container}>
              <Text style={styles.job_name}>{item.category}</Text>
              <Text style={styles.job_company}>{item.company}</Text>
              <View style={styles.country_container}>
                <Text style={styles.job_country}>{item.location}</Text>
              </View>
            </View>
            <View style={styles.level_container}>
              <Text style={styles.job_level}>{item.level}</Text>
            </View>
            <View style={{margin: 5}}>
              <Button
                color="#EF5350"
                title="Remove"
                onPress={() => handleJobDeleted(item.job_id)}
              />
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default FavoriteScreen;
