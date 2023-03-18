import React from 'react';
import {SafeAreaView, View, Text, FlatList, TouchableOpacity} from 'react-native';
import useFetch from '../../hooks/useFetch';
import JobCard from '../../components/JobCard';
import Loading from '../../components/Loading';
import styles from './HomeScreen.style';

// Realm, local database için kullandığımız kütüphane. Favorilere almak için kullanıyoruz. 
import Realm from 'realm';

function HomeScreen({navigation}) {

  // Bu sayfa da ilk olarak veri tabanı için tablomuzu olusturuyoruz.
  new Realm({
    path: 'JobDatabase.realm',  // Cihaz hafızasında hangi dosya adı ile kayıt yapılacağını belirtiyoruz.
    schema: [
      {
        name: 'Favorite_Job_Schema',  // Veri tabanı içerisinde tablo ismini belirtiyoruz.
        properties: {
          job_id: { type: 'int', default: 0 },   // Tablonun id kısmını belirttik. Zorunlu değil ayrı bir fonksiyon ile id arttırımı yapılıyor.
          category: 'string',
          company: 'string',
          location: 'string',
          level: 'string'
        }
      }
    ]
  })

  // useFetch fonksiyonunu çağırırak kullanıyoruz. Url'i config yapmadan direk url verdim. İşlerin listelenmesi için bu url kullanıyoruz.
  const { data, loading, error } = useFetch("https://www.themuse.com/api/public/jobs?page=1"); 

  if(error){
    <Text>Bir hata olustu!</Text>
  }

  // Detay sayfasına yönlendirme.
  const handleSelect = (id) => {
    navigation.navigate("DetailScreen", { id });
  }

  // JobCard componentinin tıklanabilirliğini olusturduk.
  const renderJob = ({item}) => {
    return(
      <TouchableOpacity onPress={() => handleSelect(item.id)} >
        <JobCard item={item} />
      </TouchableOpacity>
    )
  }

  // Loading true ise yüklenme componentinini göster ama false geldiyse Flatlist ekrana listelensin. 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title_container}>
        <Text style={styles.title}>Jobs</Text>
      </View>
      {
        loading ? (<Loading />) : (<FlatList data={data.results} renderItem={renderJob} />)
      }
    </SafeAreaView>
  );
}

export default HomeScreen;