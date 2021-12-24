import React from 'react'
import { View, Text } from 'react-native'

export default function Status() {
    return (
        <View style={{
            flex: .3,
            minWidth: "100%",
            backgroundColor: "green",
            flexDirection: "row",
          }}> 
            <View style={{flex: 1, backgroundColor: 'red'}}>
                <Text>
                Power: 20
                    </Text>
                </View>
                <View style={{flex: 1, backgroundColor: 'blue'}}>
                <Text>
Goal
                    </Text>
                </View>
        </View>
    )
}
