import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        margin: 7,
        padding: 10,
        borderWidth: 1,
        borderRadius: 7,
        borderColor: '#BDBDBD',
        backgroundColor: 'white'
    },
    job_name: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
    },
    job_company: {
        color: 'black',
        fontSize: 15
    },
    country_container: {
        alignItems: 'flex-start'
    },
    job_country: {
        backgroundColor: '#EF5350',
        paddingLeft: 10,
        paddingRight: 10,
        padding: 1,
        color: 'white',
        borderRadius: 15
    },
    level_container: {
        alignItems: 'flex-end'
    },
    job_level: {
        color: '#EF5350',
        fontSize: 15,
        fontWeight: '500'
    }
})