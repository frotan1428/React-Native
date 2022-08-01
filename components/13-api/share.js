import { Button, Share, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import globalStyles from "../../assets/styles/globalStyles";


const MyShare = () => {

const handleShare = async () => { 
    const result = await Share.share({
        message: "Bu uygulamayı kurarsan 100 altın kazanırsın. http://play.google.com/game"
    });

    if(result.action === Share.sharedAction){

    }
    else if(result.action === Share.dismissedAction){ //IOS a özel

    }

 }


  return (
    <View style={globalStyles.container}>
      <Button title="Share Me" onPress={handleShare}/>
    </View>
  )
}

export default MyShare

const styles = StyleSheet.create({})