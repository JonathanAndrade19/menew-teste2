import React from 'react';
import { InputArea , Input } from './styles';

export default ({placeholder}) => {
    return (
        <InputArea>
            <Input
                placeholder={placeholder}
                placeholderTextColor="#FFF"
            />
        </InputArea>
    );
}