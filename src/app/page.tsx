import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/hero.png'

export default function Home() {
  return (
    <div>
      <Image src='https://images.pexels.com/photos/15131949/pexels-photo-15131949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' className={styles.img}/>
    </div>
  )
}
