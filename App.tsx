import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import HomeScreen from './src/home/home-screen';
import TodoList from './src/todo-list/todo-list';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

const Stack = createNativeStackNavigator();

export interface RootStackParamList {
  Home: undefined;
  TodoList: undefined;
}

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Bem-Vindo'}}
          />
          <Stack.Screen
            name="TodoList"
            component={TodoList}
            options={{title: 'Sua Lista de Tarefas'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
