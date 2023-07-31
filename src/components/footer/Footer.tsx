import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>@2023</div>
      <div className={styles.social}>
        <Image src='/1.png' width={15} height={15} className={styles.icon} alt='111'/>
        <Image src='/2.png' width={15} height={15} className={styles.icon} alt='222'/>
        <Image src='/3.png' width={15} height={15} className={styles.icon} alt='333'/>
        <Image src='/4.png' width={15} height={15} className={styles.icon} alt='444'/>
      </div>
    </div>
  )
}

export default Footer