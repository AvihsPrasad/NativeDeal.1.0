import { AntDesign, Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
//   const colorScheme = useColorScheme();

  return (
    <Tabs screenOptions={{tabBarActiveTintColor:'#32357a',headerShown: false,tabBarShowLabel: true,}}>
      <Tabs.Screen name='home' options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home' : 'home-outline'} color={color} style={{fontSize:20}}/>
          ),
        }} />
          <Tabs.Screen name='search' options={{
              title: 'Search',
              href: null,
              tabBarIcon: ({ color, focused }) => (
                <Ionicons name={focused ? 'search' : 'search-outline'} color={color} style={{fontSize:20}}/>
              ),
            }} />
            <Tabs.Screen name='explore/index' options={{
                title: 'Explore',
                tabBarIcon: ({ color, focused }) => (
                  // <Ionicons name={focused ? 'cog' : 'cog-outline'} color={color} style={{fontSize:20}}/>
                  <AntDesign name="rocket1" size={24} color={color} />
                ),
              }} />
            {/* <Tabs.Screen name='explore/[eid]' options={{
                title: 'Explore Details',href:null,
              }} /> */}
        <Tabs.Screen name="category/category" options={{
            title: 'Category',
            tabBarIcon: ({ color, focused }) => (
                <Ionicons name={focused ? 'grid' : 'grid-outline'} color={color} style={{fontSize:20}}/>
            ),
        }} />
        <Tabs.Screen name="category/[cid]" options={{
            title: 'Category',href: null
        }} />
        <Tabs.Screen name='profile' options={{
            title: 'Account',
            tabBarIcon: ({ color, focused }) => (
              // <Ionicons name={focused ? 'cog' : 'cog-outline'} color={color} style={{fontSize:20}}/>
              <AntDesign name="setting" size={24} color={color} />
            ),
          }} />
        {/* <Tabs.Screen name='Dealers/index' options={{
            title: 'Dealers',
            tabBarIcon: ({ color, focused }) => (
              <Entypo name="shop" color={color} style={{fontSize:20}}/>
            ),
          }} />
      <Tabs.Screen name='cart/index' options={{
          title: 'CART',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'cart' : 'cart-outline'} color={color} style={{fontSize:20}}/>
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
