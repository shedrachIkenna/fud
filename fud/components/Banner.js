import Image from 'next/image'
import BannerImage from '../static/banner.png'
const Banner = () => {
    const styles={
        wrapper:'h-max-[10rem] flex items-center justify-center bg-[#FCC017] border-y border-black',
        content:'max-w-7xl flex-1 flex items-center justify-between border border-black',
        bannerWrapper:'space-y-5 px-10 flex-[3]',
        bannerTitle:'max-w-xl, text-[6rem] font-mediumSerif',
        bannerText:'text-2xl',
        accentedButton:'bg-black text-white py-2 px-4 rounded-full',
        bannerImageStyle:'object-contain',
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.bannerWrapper}>
                    <h1 className={styles.bannerTitle}>Stay Curious.</h1>
                    <h3 className={styles.bannerText}>Discover stories, thinking, and expertise from writers on any topic</h3>
                    <button className={styles.accentedButton}>Start Reading</button>
                </div>
                <Image
                    className={styles.bannerImageStyle}
                    src={BannerImage}
                    width={500}
                    height={400}
                />
            </div>
        </div>
    )
}

export default Banner