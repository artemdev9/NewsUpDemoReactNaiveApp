import React, { useState } from 'react';
import { Box, Text, Center, ScrollView, HStack, ButtonIcon, Heading, Button, ButtonText, SafeAreaView, Image, Icon } from '@gluestack-ui/themed';
import { Pencil, Heart } from 'lucide-react-native';
import { useRoute } from '@react-navigation/native';
import { Dimensions } from 'react-native';


const NewsItemScreen = () => {
    const route = useRoute();
    const { title, image, text, createdBy, favorite, index, toggleFavorite } = route.params;
    const [favoriteState, setFavoriteState] = useState(favorite);

    const handleToggleFavorite = () => {
        toggleFavorite(index);
        setFavoriteState(!favoriteState);
    };

    const screenWidth = Dimensions.get('window').width;

    return (
        <SafeAreaView>
            <ScrollView>
                <Box mx={20} mt={10}>
                    <Center>
                        <Image
                            style={{ width: screenWidth - 40, height: 300 }}
                            borderRadius="$md"
                            source={{
                                uri: image.uri,
                            }}
                            alt='Default Profile Icon'
                        />
                    </Center>
                    <HStack style={{ width: screenWidth - 40 }} alignItems="center"
                        justifyContent="space-between">
                        <Text size='3xl' color='black' bold={true} width='80%'>{title}</Text>
                        <ButtonIcon as={Heart} size={40} color={favoriteState ? '#ff0000' : 'black'} width='20%' onPress={handleToggleFavorite} />
                    </HStack>
                    <Text my={10} size='lg'>Автор • {createdBy}</Text>
                    <Text size='xl' bold={true} color='black'>{text}</Text>
                </Box>
            </ScrollView>
        </SafeAreaView>
    );
};

export default NewsItemScreen;