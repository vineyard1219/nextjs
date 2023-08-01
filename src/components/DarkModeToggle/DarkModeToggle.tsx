import React, { useContext } from 'react'
import styles from './darkModeToggle.module.css'
import { ThemeContext } from '@/context/ThemeContext'

const DarkModeToggle = () => { //모드 정의
  
  const {toggle, mode} = useContext(ThemeContext)
  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🌞</div>
      <div 
        className={styles.ball} 
        style={mode === 'dark' ? {left:'2px'} : {right:'2px'}}/> {/* 2. 내부스타일지정 */}
    </div>
  )
}

export default DarkModeToggle