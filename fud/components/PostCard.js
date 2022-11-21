import Image from 'next/image'
import Logo from '../static/logo.png'

const styles = {
    postDetails: '',
    authorContainer: 'flex gap-[.4rem]',
    authorImageContainer: 'grid place-items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem] border border-black',
    authorImage: 'object-cover',
    authorName:'font-semibold',
}

const PostCard = () => {
    return (
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
    )
}

export default PostCard