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
          uri: 'https://uc51701764880cfa605b7a694121.previews.dropboxusercontent.com/p/thumb/AAzlMeePHDC9w6bhM8COzcy-2mDO0nRB8jyfO7-RC66B59-oAgWRtjmwpUoMl3OULBZed3-WlUyFJIM7fAJ5Gg7pC68w38ENyGvFAVk8MiuiOjhl01v-Ck88guC-nReyhgiTRl8fQNi4UBef31mNs_H6TgpNGFOaKVwndWd1cGS1N9EvtcZ-wXOeBVR0bS1_x_-9DVleTIFh-y7h2ZSJoUCrTX6I9Eysn5VdYEqwSSmPAOFD2iZi2F3tuBJPDNZFwPzGfDDLBkZgdpU-rtowOPmmfu__QnPAaIxBXwYfru8Td8rt_wEENfr1xIXEBe8no9PnCpfUBiEPgOfjhPNNt8Fw7jhDnBDU1RqV9rs-Apz9cQyertKVxa6F58ZyRMxQCuWdWn4DPsbF3Ftr3xaz0_UdmvodCyv9zVHMB3aajU57qiUYDQx2FPgsX74fnedAqasg2LpPVAMBAnUE6f4seF2JdEq5lh9SJOIjV32xAuOWGen8n3AwyjoSq57MsyZN_Lay5t5r47g3VMZ4SWa9xTV5/p.png?size=2048x1536&size_mode=3',
        }} />
    </View>
  );
}
