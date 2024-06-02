import React, { useState } from 'react';
import { Input, InputField, Center, Box, Button, ButtonText, VStack } from '@gluestack-ui/themed';

const LoginScreen = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Данные для входа
        if (email === 'User' && password === 'User') {
            onLogin('user');
        } else if (email === 'Admin' && password === 'Admin') {
            onLogin('admin');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <Center h='$full' w='$full'>
            <VStack space="md" w='$full'>
                <Input
                    mx='$5'
                    my='$1'
                    variant="outline"
                    size="lg"
                    isDisabled={false}
                    isInvalid={false}
                    isReadOnly={false}
                >
                    <InputField placeholder="Username" onChangeText={setEmail} value={email} />
                </Input>
                <Input
                    mx='$5'
                    my='$1'
                    variant="outline"
                    size="lg"
                    isDisabled={false}
                    isInvalid={false}
                    isReadOnly={false}
                    secureTextEntry={true}
                >
                    <InputField placeholder="Password" onChangeText={setPassword} value={password} />
                </Input>
                <Button
                    mx='$5'
                    my='$1'
                    size="lg"
                    variant="solid"
                    isDisabled={false}
                    isFocusVisible={false}
                    onPress={handleLogin}
                >
                    <ButtonText>Login</ButtonText>
                </Button>
                <Button
                    mx='$5'
                    my='$1'
                    size="lg"
                    variant="solid"
                    isDisabled={false}
                    isFocusVisible={false}
                    onPress={handleLogin}
                >
                    <ButtonText>Sign Up</ButtonText>
                </Button>
            </VStack>
        </Center>
    );
};

export default LoginScreen;

