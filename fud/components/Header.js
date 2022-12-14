import Image from 'next/image'
import Logo from '../static/logo.png'
const styles = {
  wrapper: 'flex justify-center gap-10 p-5 bg-[#FCC017] border border-black',
  content: 'flex flex-1 justify-between max-w-7xl gap-10 border border-black',
  logoContainer: 'flex items-center flex-start',
  logo: 'cursor-pointer object-contain',
  bannerNav:'cursor-pointer, flex space-x-5 items-center',
  accentedButton:'bg-black text-white py-2 px-4 rounded-full'
}

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <Image 
            className={styles.logo}
            src={Logo}
            height={40}
            width={200}
          />
        </div>
        <div className={styles.bannerNav}>
          <div>Our Story</div>
          <div>Membership</div>
          <div>Sign in</div>
          <div className={styles.accentedButton}>Get Started</div>
        </div>
      </div>
    </div>
  )
}

export default Header
