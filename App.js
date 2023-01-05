import { Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from './pages/home/Home'
import Cars from './pages/cars/Cars'
import Car from './pages/car/Car'
import Logo from './components/logo/Logo'

const Stack = createNativeStackNavigator()
export default function App() {
    return (
        <NavigationContainer>
            <StatusBar style="light"/>
            <Stack.Navigator screenOptions={{
                headerTintColor: '#fff',
                headerStyle: {
                    backgroundColor: '#2D4F6D'
                },
                headerBackTitle: 'retour'
            }}>
                <Stack.Screen name="Accueil"
                              component={Home}
                              options={{ headerTitle: () => <Logo/> }}/>
                <Stack.Screen name="Nos véhicules"
                              component={Cars}
                              options={() => ({
                                  headerRight: () => <Button title="Filtrer" color="#fff"/>
                              })}/>
                <Stack.Screen name="Voiture"
                              component={Car}
                              options={( { route } ) => ({ title: route.params.item.name })}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}