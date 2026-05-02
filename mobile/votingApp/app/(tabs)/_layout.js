import React from 'react';
import { Tabs } from 'expo-router';
// import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
// import { Colors } from '@/constants/theme';
// import { useColorScheme } from '@/hooks/use-color-scheme';
import * as NavigationBar from 'expo-navigation-bar';
NavigationBar.setVisibilityAsync('hidden');

export default function TabLayout() {
  // const colorScheme = useColorScheme();

  return (
    <Tabs
       screenOptions={{
      tabBarStyle: {
        backgroundColor: 'rgb(5, 70, 5)',
        height: 60,
        borderTopWidth: 0,
        marginBottom: 0,
            
      },
    tabBarActiveTintColor: '#ffffff',
    tabBarInactiveTintColor: '#0adf5bf5',
        
    //  tabBarActiveTintColor: 'blue', 
   
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="signup"
        options={{
          title: 'Registration',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="person.and.background.dotted" color={color} />,
        }}
      />
      <Tabs.Screen
        name="vote"
        options={{
          title: 'Cast Vote',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="chevron.left.forwardslash.chevron.right" color={color} />,
        }}
      />
      <Tabs.Screen
      name="login"
        options={{
        title:'',
        tabBarButton: () => null, // hides it
      }}
      />
      <Tabs.Screen
      name="results"
        options={{
        title: 'Show Results',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="chevron.left.forwardslash.chevron.right" color={color} />,
      }}
      />
    </Tabs>
  );
  
};

