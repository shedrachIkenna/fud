import Image from 'next/image'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdMarkEmailUnread } from 'react-icons/md'
import ReplitLogo from '../static/replit.png'
import TutotialImg from '../static/tutorial.jpg'
import CPlogo from '../static/cp.png'
import Sheddy from '../static/s.jpg'
import JSLogo from '../static/jsLogo.png'

const styles = {
    wrapper: 'h-screen min-w-[10rem] max-w-[30rem] flex-[1.2] p-[2rem] border border-black',
    accentedButton: 'flex items-center justify-center text-sm bg-black text-white my-[2rem] py-[.6rem] rounded-full',
    searchBar: 'flex items-center gap-[.6rem] h-[2.6rem] border p-[1rem] rounded-full',
    searchInput: 'border-none outline-none bg-none w-full',
    authorContainer: 'my-[2rem]',
    authorProfileImageContainer: 'h-[5rem] w-[5rem] rounded-full overflow-hidden',
    authorName: 'font-semibold mb-[.2rem] mt-[1rem]',
    authorFollowing: 'text-[#787878]',
    authorActions: 'flex my-[1rem] gap-[.6rem]',
    actionButton: 'bg-[#1a8917] text-white rounded-full px-[.6rem] py-[.4rem] text-sm',
    recommendationsAuthorContainer: 'flex items-center gap-[.6rem]',
    recommendationsAuthorProfileImageContainer: 'rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]',
    recommendationsAuthorName: 'text-sm',
    recommendationsTitle: 'font-bold',
    recommendationsThumbnailContainer: 'flex flex-1 items-center justify-center h-[4rem] w-[4rem]',
    recommendationsThumbnail: 'object-cover',
    articleContentWrapper: 'flex justify-between items-center cursor-pointer my-[1rem]',
    articleContent: 'flex-[4]'
}

const Recommendations = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.accentedButton}>Get unlimited access</div>
            <div className={styles.searchBar}>
                <AiOutlineSearch />
                <input
                    className={styles.searchInput}
                    placeholder= 'Search'
                    type= 'text'
                />
            </div>
            <div className={styles.authorContainer}>
                <div className={styles.authorProfileImageContainer}>
                    <Image
                        src={Sheddy}
                        width={100}
                        height={100}
                    />
                </div>
                <div className={styles.authorName}>Shedrach Ikenna</div>
                <div className={styles.authorFollowing}>2.2M followers</div>
                <div className={styles.authorActions}>
                    <button className={styles.actionButton}>Follow</button>
                    <button className={styles.actionButton}><><MdMarkEmailUnread/></></button>
                </div>
            </div>
            <div className={styles.recommendationsContainer}>
                <div className={styles.title}>More from Medium</div>
                <div className={styles.articlesContainer}>
                    <div className={styles.articleContentWrapper}>
                        <div className={styles.articleContent}>
                            <div className={styles.recommendationsAuthorContainer}>
                                <div className={styles.recommendationsAuthorProfileImageContainer}>
                                    <Image src={Sheddy} height={100} width={100}/>
                                </div>
                                <div className={styles.recommendationsAuthorName}>Shedrach Ikenna</div>
                            </div>
                            <div className={styles.recommendationsTitle}>7 Free Tools That will Make You More Productive in 2022</div>
                        </div>
                        <div className={styles.recommendationsThumbnailContainer}>
                            <Image 
                                className={styles.recommendationsThumbnail}
                                src={JSLogo} 
                                height={100} 
                                width={100}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recommendations