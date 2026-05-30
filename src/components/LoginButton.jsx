"use client"

import { signIn } from 'next-auth/react';
import React from 'react';

const LoginButton = () => {
    return (
        <div>
            <button className='btn' onClick={()=>signIn()} >Log in</button>
        </div>
    );
};

export default LoginButton;