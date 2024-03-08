import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { reactNativeTopics } from '../utils/data';
import index from '../app/(days)/day2/index';

const DayListItem = () => {
    const days = [...new Array(24)].map((item, index) => index + 1);

    interface CustomItemProps {
    item: number; // Assuming the item is a number based on your data array
    index:Number
}

    const CustomItem = ({ item,index }:CustomItemProps) => {
        return (
            <Link style={styles.itemContainer}
            href={`/day${index+1}`}>
                <Text style={{color:'orange',textAlign:"center"}}
                >
                    {item}. Lorem ipsum dolor sit amet.
                </Text>
            </Link>
        );
    };


    return (
        <View style={styles.container}>
            <FlatList
                data={reactNativeTopics}
                renderItem={({ item, index }) => <CustomItem itemS={item} index={index} />}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.flatListContainer}
                columnWrapperStyle={styles.columnWrapper}
            />
        </View>
    );
};

export default DayListItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    flatListContainer: {
        paddingBottom: 15, // Adjust as needed
    },
    columnWrapper: {
        justifyContent: 'space-between',
    },
    itemContainer: {
        flex: 1,
        width: '50%', // Adjust for margin/padding
        backgroundColor: '#ececec', // Optional background color for better visibility
        margin: 10, // Adjust as needed
        padding: 10,
        borderRadius:10

    },
});
