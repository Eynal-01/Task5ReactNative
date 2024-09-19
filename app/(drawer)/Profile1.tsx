import { Name } from '@/components/Name';
import React from 'react';
import {Header} from '@/components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Toggle } from '@/components/Toggle';
import { ScrollView, View } from 'react-native';
import {Footer} from '@/components/Footer'
import Card2 from '@/components/Cards/Card2';

const Profile = () => {
  return (
      <SafeAreaView>
      <Header></Header>
      <Name/>
      <Toggle/>
        <View style={{marginTop:470}}>
      <ScrollView>
        <Card2></Card2>
        <Card2></Card2>
        <Card2></Card2>
        <Card2></Card2>
        <Card2></Card2>
        <Card2></Card2>
        <Card2></Card2>
        <Card2></Card2>
        <Card2></Card2>
      </ScrollView>
        </View>
      <Footer/>
      </SafeAreaView>
  )
}

export default Profile
