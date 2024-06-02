import React, { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { ScrollView, Button, ButtonText, Card, Image, Text, Link, LinkText, VStack, Icon, Heading, Center, HStack, ToastTitle, AvatarFallbackText, ToastDescription, Input, InputField, Toast, Box, Avatar, Menu, MenuItem, MenuItemLabel, ButtonIcon, Pressable } from "@gluestack-ui/themed";
import { CircleUserRound, Search } from 'lucide-react-native';

const NewsAllScreen = ({ navigation }) => {
    const route = useRoute();
    const { newsData, recommendednewsData } = route.params;

    return (
        <ScrollView w='100%' h='100%'>
            <Box mx={20} mt={10}>
                <HStack justifyContent="center" alignItems="center">
                    <Heading bold={true} size={'2xl'}>Все Новости</Heading>
                </HStack>
            </Box>
            <Box>
                <VStack flexWrap="wrap" justifyContent="center" mx={10}>
                    {newsData.map((item, index) => (
                        <Pressable key={index} onPress={() => navigation.navigate('NewsItem', { title: item.title, image: item.image, text: item.text, createdBy: item.createdBy, favorite: item.favorite })}>
                            <Card p="$2" borderRadius="$lg" height={150} my="$3" width='$full'>
                                <HStack>
                                    <Box w='60%'>
                                        <Image
                                            w='100%'
                                            h="100%"
                                            borderRadius="$md"
                                            source={item.image}
                                            alt={'Playlist or Album artwork.'}
                                        />
                                    </Box>
                                    <Box p="$2" w='40%' h='60%'>
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
                                                color: "$textLight700",
                                                _dark: {
                                                    color: "$textDark200",
                                                },
                                            }}

                                        >
                                            {item.text}
                                        </Text>
                                    </Box>
                                </HStack>
                            </Card>
                        </Pressable>
                    ))}
                    {recommendednewsData.map((item, index) => (
                        <Pressable key={index} onPress={() => navigation.navigate('NewsItem', { title: item.title, image: item.image, text: item.text, createdBy: item.createdBy, favorite: item.favorite })}>
                            <Card p="$2" borderRadius="$lg" height={150} my="$3" width='$full'>
                                <HStack>
                                    <Box w='60%'>
                                        <Image
                                            w='100%'
                                            h="100%"
                                            borderRadius="$md"
                                            source={item.image}
                                            alt={'Playlist or Album artwork.'}
                                        />
                                    </Box>
                                    <Box p="$2" w='40%' h='60%'>
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
                                                color: "$textLight700",
                                                _dark: {
                                                    color: "$textDark200",
                                                },
                                            }}

                                        >
                                            {item.text}
                                        </Text>
                                    </Box>
                                </HStack>
                            </Card>
                        </Pressable>
                    ))}
                </VStack>
            </Box >
        </ScrollView >
    );
};

export default NewsAllScreen;
