import React from 'react';
import {View, Text} from 'react-native';
import styles from './JobCard.style';

// Ana sayfa da işleri listelediğimiz component

function JobCard({item}) {
  return (
    <View style={styles.container}>
      <View style={styles.info_container}>
        <Text style={styles.job_name}>{item.categories[0].name}</Text>
        <Text style={styles.job_company}>{item.company.name}</Text>
        <View style={styles.country_container} >
          <Text style={styles.job_country}>{item.locations[0].name}</Text>
        </View>
      </View>
      <View style={styles.level_container}>
        <Text style={styles.job_level}>{item.levels[0].name}</Text>
      </View>
    </View>
  );
}

export default JobCard;
