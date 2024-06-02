import React, { useState, useEffect } from 'react';
import { Box, ScrollView, HStack, ButtonText, ButtonIcon, Heading, View, Input, InputSlot, InputField, InputIcon, Pressable, Center, Text, Card, VStack, Button } from '@gluestack-ui/themed';
import { Heart, EllipsisVertical, Shuffle, Play, Search, SearchIcon } from 'lucide-react-native';


const SideSearch = ({ isVisible, setScreenToFalse }) => {
    const [isScreenVisible, setIsScreenVisible] = useState(isVisible);

    useEffect(() => {
        setIsScreenVisible(isVisible);
    }, [isVisible]);

    const closeSideSearch = () => {
        setIsScreenVisible(false);
        setScreenToFalse();
    };


    return (
        <ScrollView w='100%' h='100%' display={isScreenVisible ? 'flex' : 'none'}>
            <Box mx={20} mt={10}>
                <HStack justifyContent="space-between" alignItems="center">
                    <View style={{ width: 46 }} />
                    <Heading bold={true} size={'2xl'}>Поиск</Heading>
                    <Pressable onPress={closeSideSearch}>
                        <Box>
                            <ButtonIcon as={Search} size={46} color='#2563eb' />
                        </Box>
                    </Pressable>
                </HStack>
                <Input my={10}>
                    <InputSlot pl="$3">
                        <InputIcon as={SearchIcon} />
                    </InputSlot>
                    <InputField placeholder="Search..." />
                </Input>
            </Box>

        </ScrollView >
    );
};

export default SideSearch;
