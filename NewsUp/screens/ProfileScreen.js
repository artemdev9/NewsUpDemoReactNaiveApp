import React from 'react';
import { Box, Text, Center, ScrollView, HStack, ButtonIcon, Heading, Button, ButtonText, SafeAreaView, Image, Icon } from '@gluestack-ui/themed';
import { Pencil } from 'lucide-react-native';

const ProfileScreen = () => {


    return (
        <SafeAreaView>
            <Center mt={40}>
                <Image
                    size="xl"
                    borderRadius="$md"
                    source={{
                        uri: "https://firebasestorage.googleapis.com/v0/b/musicdappdevelopment.appspot.com/o/artwork%2FprofilePic.jpg?alt=media&token=91664b3c-cfd2-49aa-9cf2-fb5f2be0499d",
                    }}
                    alt='Default Profile Icon'
                />
                <Text size='3xl' color='black' bold={true}>Username</Text>
            </Center>
            <Box mx={20} mt={10}>
                <HStack justifyContent="space-between" alignItems="center" my={10}>
                    <Text size='xl' bold={true} color='black'>Email address</Text>
                    <ButtonIcon as={Pencil} color='black' size='xl' />
                </HStack>
            </Box>
        </SafeAreaView>
    );
};

export default ProfileScreen;