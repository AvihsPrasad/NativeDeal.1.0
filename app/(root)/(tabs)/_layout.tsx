import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
//   const colorScheme = useColorScheme();

  return (
    <Tabs screenOptions={{tabBarActiveTintColor:'#0a7ea4',headerShown: false,tabBarShowLabel: true,}}>
      <Tabs.Screen name='home' options={{
          title: 'HOME',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home' : 'home-outline'} color={color} style={{fontSize:18}}/>
          ),
        }} />
        <Tabs.Screen name="category" options={{
            title: 'CATEGORIES',
            tabBarIcon: ({ color, focused }) => (
                <Ionicons name={focused ? 'grid' : 'grid-outline'} color={color} style={{fontSize:18}}/>
            ),
        }} />
        <Tabs.Screen name='profile' options={{
            title: 'PROFILE',
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name={focused ? 'cog' : 'cog-outline'} color={color} style={{fontSize:18}}/>
            ),
          }} />
        {/* <Tabs.Screen name='Dealers/index' options={{
            title: 'Dealers',
            tabBarIcon: ({ color, focused }) => (
              <Entypo name="shop" color={color} style={{fontSize:18}}/>
            ),
          }} />
      <Tabs.Screen name='cart/index' options={{
          title: 'CART',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'cart' : 'cart-outline'} color={color} style={{fontSize:18}}/>
          ),
        }} />
      <Tabs.Screen name='profileEdit/index' options={{
          title: 'PROFILE EDIT',
          href:null,
        }} />
      <Tabs.Screen name='categoryDetails/index' options={{
          title: 'category Details',
          href:null,
        }} /> */}
    </Tabs>
  );
}
