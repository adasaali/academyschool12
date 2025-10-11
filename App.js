
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider, Appbar, Card, Button, Text } from 'react-native-paper';
import { View, ScrollView } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={{padding:16}}>
      <Appbar.Header>
        <Appbar.Content title="المدرسة الأكاديمية الخاصة" subtitle="التطبيق الرسمي" />
      </Appbar.Header>
      <Card style={{marginTop:16}}>
        <Card.Title title="لوحة المدرسة" subtitle="مرحباً بك" />
        <Card.Content>
          <Text>اختر ما تريد من الخيارات التالية:</Text>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => navigation.navigate('Students')}>الطلاب</Button>
          <Button onPress={() => navigation.navigate('Attendance')}>الحضور</Button>
          <Button onPress={() => navigation.navigate('Messages')}>الرسائل</Button>
          <Button onPress={() => navigation.navigate('Reports')}>التقارير</Button>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
}

function StudentsScreen() {
  return (
    <View style={{flex:1}}>
      <Appbar.Header>
        <Appbar.BackAction />
        <Appbar.Content title="الطلاب" />
      </Appbar.Header>
      <View style={{padding:16}}>
        <Text>قائمة الطلاب ستظهر هنا (مثال)</Text>
      </View>
    </View>
  );
}

function AttendanceScreen() {
  return (
    <View style={{flex:1}}>
      <Appbar.Header>
        <Appbar.BackAction />
        <Appbar.Content title="الحضور" />
      </Appbar.Header>
      <View style={{padding:16}}>
        <Text>شاشة تسجيل الحضور</Text>
      </View>
    </View>
  );
}

function MessagesScreen() {
  return (
    <View style={{flex:1}}>
      <Appbar.Header>
        <Appbar.BackAction />
        <Appbar.Content title="الرسائل" />
      </Appbar.Header>
      <View style={{padding:16}}>
        <Text>الرسائل والإشعارات</Text>
      </View>
    </View>
  );
}

function ReportsScreen() {
  return (
    <View style={{flex:1}}>
      <Appbar.Header>
        <Appbar.BackAction />
        <Appbar.Content title="التقارير" />
      </Appbar.Header>
      <View style={{padding:16}}>
        <Text>توليد تقارير الطلاب هنا</Text>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Students" component={StudentsScreen} />
          <Stack.Screen name="Attendance" component={AttendanceScreen} />
          <Stack.Screen name="Messages" component={MessagesScreen} />
          <Stack.Screen name="Reports" component={ReportsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
