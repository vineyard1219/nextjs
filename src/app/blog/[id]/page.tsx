import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { notFound } from 'next/navigation'

async function getData(id) { //getData가 데이터 호출하고
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: 'no-store'
  })

  if (!res.ok) {
    return notFound()
  }
 
  return res.json()
}

//데이터를 가져오라고말함
const BlogPost = async ({params}) => {
  const data = await getData(params.id)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            {data.title}
          </h1>
          <p className={styles.desc}>
            sifnldsnflksdkvlcxmklvnsdklfdsnk
          </p>
          <div className={styles.author}>
            <Image
              src='https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg'
              alt=''
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>John</span>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <Image
            src='https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg'
            alt=''
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          sdfsdmlkfmsdkfmlsdk
        </p>

      </div>
    </div>
  )
}

export default BlogPost