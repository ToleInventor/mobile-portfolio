import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();


const Colors = {
    background: '#1E1E1E',
    cardBackground: '#2C2C2C',
    primaryText: '#FFFFFF',
    secondaryText: '#B0B0B0',
    accent1: '#007AFF',
    accent2: '#34C759',
};


function HomeScreen() {
  return (
    <ScrollView style={styles.body} contentContainerStyle={{paddingBottom: 20}}>
        <View style={styles.headerSection}>
            <Image source={require('./pic.jpg')} style={styles.picture}/>
            <Text style={ styles.welcome }>
                Welcome to my portfolio!
            </Text>
        </View>
        <View style={styles.infoSection}>
            <Text style={styles.sectionTitle}>Name</Text>
            <Text style={styles.extraText}>
                Tole Caxtone Kirigha
            </Text>

            <Text style={styles.sectionTitle}>Educational background</Text>
            <Text style={styles.extraText}>
                (i) Currently studying at Kirinyaga University undertaking a PhD in Software engineering.{'\n'}
                (ii) Am a degree holder of Software engineering from the University of Nairobi.{'\n'}
            </Text>

            <Text style={styles.sectionTitle}>Working Experience</Text>
            <Text style={styles.extraText}>
                (i) Worked at the AgriLens Kenya company from 2022-2025.{'\n'}
                (ii) I am also currently working at the ILabs Africa.{'\n'}
            </Text>
        </View>
    </ScrollView>
  );
}


function MySkills() {
    return (
        <ScrollView style={styles.body} contentContainerStyle={{alignItems: 'center', paddingBottom: 20}}>
            <Text style={styles.welcome}>My Skills</Text>

            <View style={styles.skillContainer}>
                <View style={styles.skillLeft}>
                    <Text style={styles.skillText}>WEB DEVELOPMENT</Text>
                </View>
            </View>

            <View style={styles.skillContainerRight}>
                <View style={styles.skillRight}>
                    <Text style={styles.skillText}>MOBILE DEVELOPMENT</Text>
                </View>
            </View>

            <View style={styles.skillContainer}>
                <View style={styles.skillLeft}>
                    <Text style={styles.skillText}>IoT SYSTEMS INTERGRATION</Text>
                </View>
            </View>

            <View style={styles.skillContainerRight}>
                <View style={styles.skillRight}>
                    <Text style={styles.skillText}>ROBOTICS</Text>
                </View>
            </View>
            
            <View style={styles.skillContainer}>
                <View style={styles.skillLeft}>
                    <Text style={styles.skillText}>AI and MACHINE LEARNING</Text>
                </View>
            </View>

            <View style={styles.skillContainerRight}>
                <View style={styles.skillRight}>
                    <Text style={styles.skillText}>COMPUTER VISION</Text>
                </View>
            </View>
        </ScrollView>
    );
}

function AboutScreen(){
    return(
        <ScrollView style={styles.body}>
            <View style={{ alignItems: 'center', marginBottom: 20 }}>
                <Text style={styles.welcome}>About Me</Text>
            </View>
            <View>
                <Text style={styles.extraText}>
                    I am Tole Caxtone Kirigha, a passionate and dedicated software developer specializing in full-stack mobile and web development. With a strong foundation in machine learning, robotics, and IoT, I focus on creating innovative solutions that bridge technology and agriculture, promoting sustainability and efficiency. Constantly learning and evolving, I am driven by a desire to solve real-world problems through code and collaboration. I welcome opportunities to connect, share ideas, and work on exciting projects that push the boundaries of what is possible.
                </Text>
            </View>
        </ScrollView>
    );
}


function Projects(){
    return(
        <ScrollView style={styles.body} contentContainerStyle={{alignItems: 'center', paddingBottom: 20}}>
            <Text style={styles.welcome}>My Projects</Text>
            
            <View style={styles.projectCard}>
                <Image source={require('./scr.png')} style={styles.projoimg} />
                <Text style={styles.projectText}>
                    Portfolio Website (React Native)
                </Text>
            </View>
            
             <View style={styles.projectCard}>
                <Image source={require('./logo.png')} style={styles.projoimg}/>
                <Text style={styles.projectText}>
                    AgriLens Kenya System
                </Text>
            </View>
        </ScrollView>
    );
}


const Tabs = () => {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            headerStyle: { backgroundColor: Colors.cardBackground },
            headerTintColor: Colors.primaryText,
            tabBarStyle: { 
                backgroundColor: Colors.cardBackground, 
                borderTopWidth: 1, 
                borderTopColor: '#333',
                height: 60,
                paddingBottom: 5,
            },
            tabBarActiveTintColor: Colors.accent1,
            tabBarInactiveTintColor: Colors.secondaryText,
            
            tabBarIcon: ({ focused, color, size }) => {
                let iconName = 'help-circle-outline';

                if (route.name === 'Home') {
                    iconName = focused ? 'home' : 'home-outline';
                } else if (route.name === 'About') {
                    iconName = focused ? 'information-circle' : 'information-circle-outline';
                } else if (route.name === 'Skills') {
                    iconName = focused ? 'code-slash' : 'code-outline';
                } else if (route.name === 'Projects') {
                    iconName = focused ? 'folder-open' : 'folder-open-outline';
                }

                return <Ionicons name={iconName} size={size} color={color} />;
            },
        })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name='About' component={AboutScreen} />
      <Tab.Screen name="Skills" component={MySkills} />
      <Tab.Screen name='Projects' component={Projects}/>
    </Tab.Navigator>
  );
};


export default Tabs;


const styles = StyleSheet.create({
    projectCard: {
        alignItems: 'center',
        marginTop: 25,
        backgroundColor: Colors.cardBackground,
        padding: 15,
        borderRadius: 10,
        width: '90%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5,
    },
    projoimg: {
        width: '100%',
        height: 200,
        borderRadius: 8,
        marginBottom: 10,
        resizeMode: 'cover',
    },
    projectText: {
        color: Colors.primaryText,
        fontSize: 16,
        fontWeight: 'bold',
    },
    skillContainer: {
        width: '100%',
        alignItems: 'flex-start',
    },
    skillContainerRight: {
        width: '100%',
        alignItems: 'flex-end',
    },
    skillLeft: {
        backgroundColor: Colors.cardBackground,
        borderRadius: 10,
        width: '85%',
        padding: 15,
        marginBottom: 15,
        borderLeftWidth: 4, 
        borderLeftColor: Colors.accent1,
    },
    skillRight: {
        backgroundColor: Colors.cardBackground,
        borderRadius: 10,
        width: '85%',
        padding: 15,
        marginBottom: 15,
        borderRightWidth: 4, 
        borderRightColor: Colors.accent2,
    },
    skillText: {
        color: Colors.primaryText,
        fontSize: 14,
        fontWeight: '600',
    },
    
    // --- Styles from the remaining part ---
    picture: {
        width: 120,
        height: 120,
        borderRadius: 60, // Makes it a circle
        marginTop: 20,
        borderWidth: 3,
        borderColor: Colors.accent1,
    },
    welcome: {
        color: Colors.primaryText,
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 20,
        textAlign: 'center',
    },
    sectionTitle: {
        color: Colors.primaryText,
        fontSize: 22,
        fontWeight: '600',
        marginTop: 20,
        marginBottom: 5,
    },
    body: {
        flex: 1,
        backgroundColor: Colors.background,
        paddingHorizontal: 20,
    },
    headerSection: {
        alignItems: 'center',
        marginBottom: 10,
    },
    infoSection: {
    },
    extraText: {
        color: Colors.secondaryText,
        paddingVertical: 5,
        fontSize: 16,
        textAlign: 'left',
        lineHeight: 24,
    }
});
