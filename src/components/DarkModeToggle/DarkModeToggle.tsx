import React from 'react'
import styles from './darkModeToggle.module.css'

const DarkModeToggle = () => {

  const mode = 'dark' // 1. 모드 정의
  return (
    <div className={styles.container}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🌞</div>
      <div className={styles.ball} style={mode === 'dark' ? {left:'2px'} : {right:'2px'}}/> {/* 2. 내부스타일지정 */}
    </div>
  )
}

export default DarkModeToggle