import React, { useState } from 'react';
import { ScrollView, Button, ButtonText, Card, Image, Text, Link, LinkText, VStack, Icon, Heading, Center, HStack, ToastTitle, AvatarFallbackText, ToastDescription, Input, InputField, Toast, Box, Avatar, Menu, MenuItem, MenuItemLabel, ButtonIcon, Pressable } from "@gluestack-ui/themed";
import { SafeAreaView } from 'react-native-safe-area-context';
import { CircleUserRound, Search, CircleChevronRight } from 'lucide-react-native';
import SideMenu from './SideMenu';
import SideSearch from './SideSearch';


const FavoriteScreen = ({ user, onLogin, navigation, newsData, recommendednewsData, events, toggleFavoriteNewsData, toggleFavoriteRecommendedNewsData, toggleFavoriteEvents }) => {
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
                        <Heading bold={true} size={'2xl'}>Избранное</Heading>
                        <Pressable onPress={showSideSearch}>
                            <Box>
                                <ButtonIcon as={Search} size={46} color='#2563eb' />
                            </Box>
                        </Pressable>
                    </HStack>
                </Box>
                <Box>
                    <VStack flexWrap="wrap" justifyContent="center" mx={10}>
                        {newsData.map((item, index) => (
                            item.favorite ? (
                                <Pressable
                                    key={index}
                                    onPress={() =>
                                        navigation.navigate('NewsItem', { title: item.title, image: item.image, text: item.text, createdBy: item.createdBy, favorite: item.favorite, toggleFavorite: toggleFavoriteNewsData, index: index })
                                    }
                                >
                                    <Card p="$2" borderRadius="$lg" height={150} my="$3" width="$full">
                                        <HStack>
                                            <Box w="60%">
                                                <Image
                                                    w="100%"
                                                    h="100%"
                                                    borderRadius="$md"
                                                    source={item.image}
                                                    alt={'Playlist or Album artwork.'}
                                                />
                                            </Box>
                                            <Box p="$2" w="40%" h="60%">
                                                <Heading size="lg" fontFamily="$heading" numberOfLines={2}>
                                                    {item.title}
                                                </Heading>
                                                <Text
                                                    fontSize="$md"
                                                    fontStyle="normal"
                                                    fontFamily="$heading"
                                                    fontWeight="$normal"
                                                    lineHeight="$sm"
                                                    numberOfLines={4}
                                                    isTruncated={true}
                                                    sx={{
                                                        color: '$textLight700',
                                                        _dark: {
                                                            color: '$textDark200',
                                                        },
                                                    }}
                                                >
                                                    {item.text}
                                                </Text>
                                            </Box>
                                        </HStack>
                                    </Card>
                                </Pressable>
                            ) : null
                        ))}
                        {recommendednewsData.map((item, index) => (
                            item.favorite ? (
                                <Pressable
                                    key={index}
                                    onPress={() =>
                                        navigation.navigate('NewsItem', { title: item.title, image: item.image, text: item.text, createdBy: item.createdBy, favorite: item.favorite, toggleFavorite: toggleFavoriteRecommendedNewsData, index: index })
                                    }
                                >
                                    <Card p="$2" borderRadius="$lg" height={150} my="$3" width="$full">
                                        <HStack>
                                            <Box w="60%">
                                                <Image
                                                    w="100%"
                                                    h="100%"
                                                    borderRadius="$md"
                                                    source={item.image}
                                                    alt={'Playlist or Album artwork.'}
                                                />
                                            </Box>
                                            <Box p="$2" w="40%" h="60%">
                                                <Heading size="lg" fontFamily="$heading" numberOfLines={2}>
                                                    {item.title}
                                                </Heading>
                                                <Text
                                                    fontSize="$md"
                                                    fontStyle="normal"
                                                    fontFamily="$heading"
                                                    fontWeight="$normal"
                                                    lineHeight="$sm"
                                                    numberOfLines={4}
                                                    isTruncated={true}
                                                    sx={{
                                                        color: '$textLight700',
                                                        _dark: {
                                                            color: '$textDark200',
                                                        },
                                                    }}
                                                >
                                                    {item.text}
                                                </Text>
                                            </Box>
                                        </HStack>
                                    </Card>
                                </Pressable>
                            ) : null
                        ))}
                        {events.map((item, index) => (
                            item.favorite ? (
                                <Pressable
                                    key={index}
                                    onPress={() =>
                                        navigation.navigate('NewsItem', { title: item.title, image: item.image, text: item.text, createdBy: item.createdBy, favorite: item.favorite, toggleFavorite: toggleFavoriteEvents, index: index })
                                    }
                                >
                                    <Card p="$2" borderRadius="$lg" height={150} my="$3" width="$full">
                                        <HStack>
                                            <Box w="60%">
                                                <Image
                                                    w="100%"
                                                    h="100%"
                                                    borderRadius="$md"
                                                    source={item.image}
                                                    alt={'Playlist or Album artwork.'}
                                                />
                                            </Box>
                                            <Box p="$2" w="40%" h="60%">
                                                <Heading size="lg" fontFamily="$heading" numberOfLines={2}>
                                                    {item.title}
                                                </Heading>
                                                <Text
                                                    fontSize="$md"
                                                    fontStyle="normal"
                                                    fontFamily="$heading"
                                                    fontWeight="$normal"
                                                    lineHeight="$sm"
                                                    numberOfLines={4}
                                                    isTruncated={true}
                                                    sx={{
                                                        color: '$textLight700',
                                                        _dark: {
                                                            color: '$textDark200',
                                                        },
                                                    }}
                                                >
                                                    {item.text}
                                                </Text>
                                            </Box>
                                        </HStack>
                                    </Card>
                                </Pressable>
                            ) : null
                        ))}
                    </VStack>
                </Box >
            </ScrollView>



        </SafeAreaView >
    );
};

export default FavoriteScreen;