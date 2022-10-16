import { FormEvent, useState } from 'react';
import { Envelope, Lock } from 'phosphor-react';
import { Checkbox } from '@radix-ui/react-checkbox';

import { Logo } from '../assets/Logo';
import { Text } from '../components/Text/Text';
import { Button } from '../components/Button/Button';
import { Heading } from '../components/Heading/Heading';
import { TextInput } from '../components/TextInput/TextInput';

export function Signin() {

    const [isUserSignedIn, setIsUserSignedIn] = useState(false);

    function handleSignin(event: FormEvent) {
        event.preventDefault();

        setIsUserSignedIn(true);
    }

    return (
        <div className='w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100'>            
            <header className='flex flex-col items-center '>
                <Logo />
                <Heading size='lg' className='mt-4'>
                    Ignite Lab
                </Heading>
                <Text size='lg' className='text-gray-400 mt-1'>
                    Faça login e comece a usar
                </Text>
            </header>
            {/* form */}
            <form onSubmit={handleSignin} className='flex flex-col gap-4 items-stretch w-full max-w-sm mt-10'>
            { isUserSignedIn && <Text>Login realizado com sucesso!</Text> }

                {/* email input */}
                <label htmlFor='email' className='flex flex-col gap-3'>
                    <Text className='font-semibold'>
                        Endereço de e-mail
                    </Text>
                    <TextInput.Root>
                        <TextInput.Icon>
                            <Envelope />
                        </TextInput.Icon>
                        <TextInput.Input id='email' type='email' placeholder='Digite seu e-mail' />
                    </TextInput.Root>
                </label>
                {/* password input */}
                <label htmlFor='password' className='flex flex-col gap-3'>
                    <Text className='font-semibold'>
                        Sua senha
                    </Text>
                    <TextInput.Root>
                        <TextInput.Icon>
                            <Lock />
                        </TextInput.Icon>
                        <TextInput.Input id='password' type='password' placeholder='********' />
                    </TextInput.Root>
                </label>
                {/* checkbox input */}
                <label htmlFor="remember" className='flex items-center gap-2'>
                    <Checkbox id='remember' />
                    <Text size='sm' className='text-gray-200'>Lembrar de mim por 30 dias</Text>
                </label>
                {/* button submit */}
                <Button type='submit' className='mt-4'>
                    Entrar na plataforma
                </Button>
            </form>

            <footer className='flex flex-col items-center gap-4 mt-8'>
                <Text asChild size='sm'>
                    <a href="" className='text-gray-400 underline hover:text-gray-200'>Esqueceu sua senha?</a>
                </Text>

                <Text asChild size='sm'>
                    <a href="" className='text-gray-400 underline hover:text-gray-200'>Não possui uma conta? Crie uma agora!</a>
                </Text>
            </footer>
        </div>
    )
}