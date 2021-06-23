import { View, Text, ScrollView } from 'react-native';
import React from 'react'

import useGetPosts from '../../application/useGetPosts';
import { SafeAreaView } from 'react-native-safe-area-context';


export default () => {
    const { isLoading, isError, data, error } = useGetPosts();


    if (isLoading) {
        return <SafeAreaView>
            <Text>Loading...</Text>
        </SafeAreaView>
    }

    if (isError) {
        return <SafeAreaView>
            <Text>Error: {error?.message}</Text>
        </SafeAreaView>
    }

    return (
        <SafeAreaView>

            <ScrollView style={{}}>
                {data.map(post => {
                    return (
                        <View key={post.id} style={{ borderColor: 'blue', borderWidth: 1, margin: 3, width: '100%' }}>
                            <Text>{post.title}</Text>
                            <Text>{post.description}</Text>
                            <Text>{post.createdAtLabel}</Text>
                        </View>
                    )
                })}
            </ScrollView>
        </SafeAreaView>
    );
}
