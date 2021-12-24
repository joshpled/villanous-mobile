import React from 'react'
import { View, Text, Button } from 'react-native'

export default function Home({navigation}) {
    return (
        <View style={{padding: 20}}>
            <Text>Home Screen</Text>
            <Button
        title="Go to Character Selection"
        onPress={() => navigation.navigate('Character Selection')}
      />
        </View>
    )
}
