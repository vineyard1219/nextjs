'use client'

import React from 'react'
import styles from './page.module.css'
import { signIn } from 'next-auth/react'

const Login = () => {
  return (
    <div className={styles.container}>
      <button onClick={()=>signIn('google')}>구글로 로그인하기</button>
    </div>
  )
}

export default Login