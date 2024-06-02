import React, { useState } from 'react';
import { ScrollView, Button, ButtonText, Card, Image, Text, Link, LinkText, VStack, Icon, Heading, Center, HStack, ToastTitle, AvatarFallbackText, ToastDescription, Input, InputField, Toast, Box, Avatar, Menu, MenuItem, MenuItemLabel, ButtonIcon, Pressable } from "@gluestack-ui/themed";
import { SafeAreaView } from 'react-native-safe-area-context';
import { CircleUserRound, Search, CircleChevronRight } from 'lucide-react-native';
import SideMenu from './SideMenu';
import SideSearch from './SideSearch';


const HomeScreen = ({ user, onLogin, navigation, newsData, recommendednewsData, events, toggleFavoriteNewsData, toggleFavoriteRecommendedNewsData, toggleFavoriteEvents }) => {
    const [isSideMenuScreenVisible, setIsSideMenuScreenVisible] = useState(false);
    const [isSideSearchScreenVisible, setIsSideSearchScreenVisible] = useState(false);

    const handleNavigateToProfile = () => {
        navigation.navigate('Profile');
    };

    const handleNavigateToSettings = () => {
        navigation.navigate('Settings');
    };

    const showSideMenu = () => {
        setIsSideMenuScreenVisible(true);
    };

    const hideSideMenu = () => {
        setIsSideMenuScreenVisible(false);
    };

    const showSideSearch = () => {
        setIsSideSearchScreenVisible(true);
    };

    const hideSideSearch = () => {
        setIsSideSearchScreenVisible(false);
    };

    return (
        <SafeAreaView>
            <SideMenu isVisible={isSideMenuScreenVisible} setScreenToFalse={hideSideMenu} onLogin={onLogin} handleNavigateToProfile={handleNavigateToProfile} handleNavigateToSettings={handleNavigateToSettings} />
            <SideSearch isVisible={isSideSearchScreenVisible} setScreenToFalse={hideSideSearch} />
            <ScrollView>
                <Box mx={20} mt={10}>
                    <HStack justifyContent="space-between" alignItems="center">
                        <Pressable onPress={showSideMenu} >
                            <Box>
                                <ButtonIcon as={CircleUserRound} size={46} color='#2563eb' />
                            </Box>
                        </Pressable>
                        <Heading bold={true} size={'2xl'}>Главная</Heading>
                        <Pressable onPress={showSideSearch}>
                            <Box>
                                <ButtonIcon as={Search} size={46} color='#2563eb' />
                            </Box>
                        </Pressable>
                    </HStack>
                </Box>
                <Pressable onPress={() => navigation.navigate('NewsAll', { newsData: newsData, recommendednewsData: recommendednewsData })}>
                    <Box mx={20} mt={20}>
                        <HStack justifyContent="space-between">
                            <Heading bold={true} size={'xl'}>Новости</Heading>
                            <ButtonIcon as={CircleChevronRight} size={38} color='#282828' />
                        </HStack>
                    </Box>
                </Pressable>
                <Box>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <HStack flexWrap="wrap" justifyContent="center">
                            {newsData.map((item, index) => (
                                <Pressable key={index} onPress={() => navigation.navigate('NewsItem', { title: item.title, image: item.image, text: item.text, createdBy: item.createdBy, favorite: item.favorite, toggleFavorite: toggleFavoriteNewsData, index: index })}>
                                    <Card p="$2" orderRadius="$lg" width={250} m="$3">
                                        <Image
                                            mb="$4"
                                            h={150}
                                            width="$full"
                                            borderRadius="$md"
                                            source={item.image}
                                            alt="Image"
                                        />
                                        <Heading size="md" fontFamily="$heading" mb="$2" isTruncated={true} numberOfLines={1}>
                                            {item.title}
                                        </Heading>
                                        <Text
                                            fontSize="$md"
                                            fontStyle="normal"
                                            fontFamily="$heading"
                                            fontWeight="$normal"
                                            lineHeight="$sm"
                                            isTruncated={true}
                                            numberOfLines={1}
                                            mb="$2"
                                            sx={{
                                                color: "$textLight700",
                                                _dark: {
                                                    color: "$textDark200",
                                                },
                                            }}
                                        >
                                            {item.text}
                                        </Text>
                                    </Card>
                                </Pressable>
                            ))}
                        </HStack>
                    </ScrollView>
                </Box>
                <Box mx={20} mt={20} >
                    <Heading bold={true} size={'xl'}>Рекомендованные новости</Heading>
                </Box>
                <Box>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <HStack>
                            {recommendednewsData.map((item, index) => (
                                <Pressable key={index} onPress={() => navigation.navigate('NewsItem', { title: item.title, image: item.image, text: item.text, createdBy: item.createdBy, favorite: item.favorite, toggleFavorite: toggleFavoriteRecommendedNewsData, index: index })}>
                                    <Card p="$2" orderRadius="$lg" width={250} m="$3">
                                        <Image
                                            mb="$4"
                                            h={150}
                                            width="$full"
                                            borderRadius="$md"
                                            source={item.image}
                                            alt="Image"
                                        />
                                        <Heading size="md" fontFamily="$heading" mb="$2" isTruncated={true} numberOfLines={1}>
                                            {item.title}
                                        </Heading>
                                        <Text
                                            fontSize="$md"
                                            fontStyle="normal"
                                            fontFamily="$heading"
                                            fontWeight="$normal"
                                            lineHeight="$sm"
                                            isTruncated={true}
                                            numberOfLines={1}
                                            mb="$2"
                                            sx={{
                                                color: "$textLight700",
                                                _dark: {
                                                    color: "$textDark200",
                                                },
                                            }}
                                        >
                                            {item.text}
                                        </Text>
                                    </Card>
                                </Pressable>
                            ))}
                        </HStack>
                    </ScrollView>
                </Box>
                <Box mx={20} mt={20} >
                    <Heading bold={true} size={'xl'}>События</Heading>
                </Box>
                <Box>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <HStack>
                            {events.map((item, index) => (
                                <Pressable key={index} onPress={() => navigation.navigate('NewsItem', { title: item.title, image: item.image, text: item.text, createdBy: item.createdBy, favorite: item.favorite, toggleFavorite: toggleFavoriteEvents, index: index })}>
                                    <Card p="$2" orderRadius="$lg" width={250} m="$3">
                                        <Image
                                            mb="$4"
                                            h={150}
                                            width="$full"
                                            borderRadius="$md"
                                            source={item.image}
                                            alt="Image"
                                        />
                                        <Heading size="md" fontFamily="$heading" mb="$2" isTruncated={true} numberOfLines={1}>
                                            {item.title}
                                        </Heading>
                                        <Text
                                            fontSize="$md"
                                            fontStyle="normal"
                                            fontFamily="$heading"
                                            fontWeight="$normal"
                                            lineHeight="$sm"
                                            isTruncated={true}
                                            numberOfLines={1}
                                            mb="$2"
                                            sx={{
                                                color: "$textLight700",
                                                _dark: {
                                                    color: "$textDark200",
                                                },
                                            }}
                                        >
                                            {item.text}
                                        </Text>
                                    </Card>
                                </Pressable>
                            ))}
                        </HStack>
                    </ScrollView>
                </Box>
            </ScrollView >
        </SafeAreaView >
    );
};

export default HomeScreen;