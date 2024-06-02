import React, { useState, useEffect } from 'react';
import { Box, ScrollView, HStack, Button, ButtonText, ButtonIcon, Heading, View, Pressable } from '@gluestack-ui/themed';
import { CircleUserRound, Search } from 'lucide-react-native';

const SideMenu = ({ isVisible, setScreenToFalse, onLogin, handleNavigateToProfile, handleNavigateToSettings }) => {
    const [isScreenVisible, setIsScreenVisible] = useState(isVisible);

    useEffect(() => {
        setIsScreenVisible(isVisible);
    }, [isVisible]);

    const closeSideMenu = () => {
        setIsScreenVisible(false);
        setScreenToFalse();
    };

    const handleSignOut = () => {
        onLogin('');
    };

    return (
        <ScrollView w='100%' h='100%' display={isScreenVisible ? 'flex' : 'none'}>
            <Box mx={20} mt={10}>
                <HStack justifyContent="space-between" alignItems="center">
                    <Pressable onPress={closeSideMenu}>
                        <Box>
                            <ButtonIcon as={CircleUserRound} size={46} color='#2563eb' />
                        </Box>
                    </Pressable>
                    <Heading bold={true} size={'2xl'}>Меню</Heading>
                    <View style={{ width: 46 }} />
                </HStack>
            </Box>
            <Box mx={20} mt={20}>
                <Button my={10} onPress={handleNavigateToProfile}>
                    <ButtonText>Profile</ButtonText>
                </Button>
                <Button my={10} onPress={handleNavigateToSettings}>
                    <ButtonText>Settings</ButtonText>
                </Button>
                <Button my={10} onPress={handleSignOut}>
                    <ButtonText>Log Out</ButtonText>
                </Button>
            </Box>
        </ScrollView>
    );
};

export default SideMenu;
