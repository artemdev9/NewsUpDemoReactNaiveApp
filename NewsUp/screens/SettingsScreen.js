import React from 'react';
import { Box, Text, Center, ScrollView, HStack, ButtonIcon, Heading, Button, ButtonText, SafeAreaView, Image, Icon } from '@gluestack-ui/themed';
import { Pencil } from 'lucide-react-native';

const ProfileScreen = () => {

    return (
        <SafeAreaView>
            <Box mx={20} mt={60}>
                <HStack justifyContent="space-between" alignItems="center" my={10}>
                    <Text size='xl' bold={true} color='black'>Email address</Text>
                    <ButtonIcon as={Pencil} color='black' size='xl' />
                </HStack>
            </Box>
        </SafeAreaView>
    );
};

export default ProfileScreen;