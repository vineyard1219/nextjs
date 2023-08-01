import React from 'react'
import styles from './page.module.css'
import Button from '@/components/Button/Button'
import Image from 'next/image'

// params는 라우터 연결 컴포넌트에 데이터 전달하는데 사용
const Category = ({params}) => {
  console.log(params)
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button text='See More' url='#'/>
        </div>
        <div className={styles.imgContainer}>
          <Image
          className={styles.img}
            fill={true}
            src='https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg'
            alt=''
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button text='See More' url='#'/>
        </div>
        <div className={styles.imgContainer}>
          <Image
          className={styles.img}
            fill={true}
            src='https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg'
            alt=''
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button text='See More' url='#'/>
        </div>
        <div className={styles.imgContainer}>
          <Image
          className={styles.img}
            fill={true}
            src='https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg'
            alt=''
          />
        </div>
      </div>
    </div>
  ) 
}

export default Category