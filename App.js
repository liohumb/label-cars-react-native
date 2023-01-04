import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from './pages/home/Home'
import Logo from './components/logo/Logo'

const Stack = createNativeStackNavigator()
export default function App() {
    return (
        <NavigationContainer>
            <StatusBar style="light"/>
            <Stack.Navigator screenOptions={{
                headerStyle: {
                    backgroundColor: '#2D4F6D'
                }
            }}>
                <Stack.Screen name="Home"
                              options={{
                                  headerTitle: () => <Logo/>
                              }}
                              component={Home}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}