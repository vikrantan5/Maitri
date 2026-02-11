import { Tabs } from "expo-router";
import { Home, MapPin, User } from "lucide-react-native";
import { useTheme } from "@/utils/useTheme";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function TabLayout() {
  const theme = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colors.tabBarBackground,
          borderTopWidth: 2,
          borderTopColor: theme.colors.borderLight,
          paddingBottom: 10,
          paddingTop: 10,
          height: 70,
          position: 'absolute',
          borderRadius: 24,
          marginHorizontal: 16,
          marginBottom: 16,
          shadowColor: theme.colors.shadowColor,
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 12,
          elevation: 8,
        },
        tabBarActiveTintColor: theme.colors.neonCyan,
        tabBarInactiveTintColor: theme.colors.tabBarInactive,
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "600",
          marginTop: 4,
        },
        tabBarIconStyle: {
          marginTop: 2,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size, focused }) => (
            <View style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: focused ? 'rgba(0, 229, 255, 0.15)' : 'transparent',
            }}>
              <Home color={color} size={24} strokeWidth={focused ? 2.5 : 1.5} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: "Track",
          tabBarIcon: ({ color, size, focused }) => (
            <View style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: focused ? 'rgba(0, 229, 255, 0.15)' : 'transparent',
            }}>
              <MapPin color={color} size={24} strokeWidth={focused ? 2.5 : 1.5} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size, focused }) => (
            <View style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: focused ? 'rgba(0, 229, 255, 0.15)' : 'transparent',
            }}>
              <User color={color} size={24} strokeWidth={focused ? 2.5 : 1.5} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="alerts"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="community"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="store"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="videos"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}