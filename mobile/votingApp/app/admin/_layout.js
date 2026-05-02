import React from 'react';
import { Tabs } from 'expo-router';
// import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
// import { Colors } from '@/constants/theme';
// import { useColorScheme } from '@/hooks/use-color-scheme';
import * as NavigationBar from 'expo-navigation-bar';
import EditCandidate from './edit';


NavigationBar.setVisibilityAsync('hidden');

export default function adminTabs() {
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
        name="adminscreen"
        options={{
          title: 'Admin Dashboard',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="regCandidate"
        options={{
          title: 'Candidate Registration',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="allCandidate"
        options={{
          title: 'All Candidate',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="person.and.background.dotted" color={color} />,
        }}
      />
      <Tabs.Screen
        // name="EditCandidate"
        name="edit"
        options={{
          title: 'Edit Candidate',
          tabBarButton: () => null, // hides it
        }}
      />
      <Tabs.Screen
        // name="EditCandidate"
        name="allvoters"
        options={{
          title: 'All voters',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="person.and.background.dotted" color={color} />, // hides it
        }}
      />
        <Tabs.Screen
          name="editvoter"
          options={{
            title: 'Edit Voter',
            tabBarButton: () => null, 
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
}