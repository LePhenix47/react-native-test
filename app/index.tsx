import { useRouter } from 'expo-router';
import React from 'react'
import { View,Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home():JSX.Element {
    const route = useRouter() ;
  return (
    <SafeAreaView>
        <Text>Hello world! Now a safe area view</Text>
    </SafeAreaView>
  )
}
