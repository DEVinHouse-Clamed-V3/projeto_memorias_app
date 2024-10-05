import { createDrawerNavigator } from '@react-navigation/drawer';
import MemoriasDoPassado from './src/pages/MemoriasDoPassado';
import MemoriasDoPresente from './src/pages/MemoriasDoPresente';
import { NavigationContainer } from '@react-navigation/native';

import { SelectBox } from './src/pages/SelectBox';

const Drawer = createDrawerNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='MemoriasDoPassado'>
        <Drawer.Screen name="MemoriasDoPassado" component={MemoriasDoPassado} />
        <Drawer.Screen name="MemoriasDoPresente" component={MemoriasDoPresente} />
        <Drawer.Screen name="SelectBox" component={SelectBox} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}