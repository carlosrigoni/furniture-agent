import React from 'react';
import { Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign'

import { ButtonComeBack } from './styles'

export default function InfoScreen() {
  const navigation = useNavigation()

  function navigateToHome() {
      navigation.navigate('HomeScreen')
    }

  return (
    <View style={{flex: 1}}>
      <ButtonComeBack onPress={navigateToHome}>
          <AntDesign name="left" size={22} color="#fff" />
        </ButtonComeBack>
      <Image
      style={{flex: 1}}
        source={{
          uri: 'https://uc1f42ec247ff780b5219ad3e4f8.previews.dropboxusercontent.com/p/thumb/AAwxNIreIaiPmIk29UxuoFWNtcTngUsagmUDEJL-CpUJLv44qPDcVKQP-W1VG9fUKjeqD6pGF5Waiz5DzGu96jNgMHFEq1aIaE0q0EsAE_-mQBeRSZ1KiP7NesSiewJQLR09UKUtNOFXooQIkPS2CvUKmDyE056yChP74XLfjFdDflbEvdJo9ouIHOsg4Ydexw5eHcxi_HiNFKFQHXuBSXscIdfM0tXoWZNbnovxhrhncOufu-ehFJIKba5Ipltgh17QvucbsC2YCkK7FKLg5ffoLBLVhAU5_5VbmA7xiHKW8nqyJvMMM5rz2c5RmdBYq8ihGbTr0H8QZxfz96cjQBXdqYyIf4-gmrgJNX0-Gz5XQwQILfR05JkYp1QJWXeuzj_hr_-EQF-rxiCwZ971TQ7xHsTHgb2UkIy1d6Wx65FbZrISzLhJk38cUf1IsiGbO8I67XzLKGRVfTKm-GyoRo1lmqclVh8wweu-tfG6NvWqqbfl-Q7lUBEjpaI_O6JXCTOni3EPZs0VsU_qNj7FK1Xa/p.png?fv_content=true&size_mode=5'
          }} />
    </View>
  );
}
