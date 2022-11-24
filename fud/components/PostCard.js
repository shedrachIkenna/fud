import Image from 'next/image'
import Logo from '../static/logo.png'
import { FiBookmark } from 'react-icons/fi'

const styles = {
    wrapper: 'flex max-w-[46rem] h-[10rem] items-center gap-[1rem] cursor-pointer',
    postDetails: 'flex-[2.5] flex flex-col',
    authorContainer: 'flex gap-[.4rem]',
    authorImageContainer: 'grid place-items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem] border border-black',
    authorImage: 'object-cover',
    authorName:'font-semibold',
    postCardTitle : 'font-bold text-2xl',
    briefing: 'text-[#787878]',
    produvtivityText: 'bg-[#F2F3F2] p-1 rounded-full',
    articleDetails: 'my-2 text-[.8rem]',
    detailsContainer: 'flex items-center justify-between text-[#787878]',
    bookmarkContainer: 'cursor-pointer'
}

const PostCard = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.postDetails}>
                <div className={styles.authorContainer}>
                    <div className={styles.authorImageContainer}>
                        <Image
                            src={Logo}
                            className={styles.authorImage}
                            width={40}
                            height={40}
                        />
                    </div>
                    <div className={styles.authorName}>Shedrach Ikenna</div>
                </div>
                <h1 className={styles.postCardTitle}>7 free tools that will make you more productive in 2022</h1>
                <div className={styles.briefing}>Productivity is a skill that can be learned</div>
                <div className={styles.detailsContainer}>
                    <span className={styles.articleDetails}>June 15 • 5 min read • <span className={styles.produvtivityText}>productivity</span></span>
                    <span className={styles.bookmarkContainer}>
                        <FiBookmark className='h-5 w-5'/>
                    </span>
                </div>
            </div>
            <div className={styles.thumbnailContainer}>
                <Image 
                    height={100}
                    width={100}
                    src={Logo}
                />
            </div>
        </div>
    )
}

export default PostCard
