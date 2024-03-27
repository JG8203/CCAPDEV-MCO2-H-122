import { TimeAgo } from '@/components/ForumPost/TimeAgo';

interface PostContentProps {
    children: string; // assuming post.content is passed as the children prop
    date: Date; // assuming date is passed as a prop
}

const PostContent: React.FC<PostContentProps> = ({ children, date }) => {
    return (
        <div className="post-content py-4 px-6 overflow-hidden flex flex-col w-full">
            <p className="text-black">{children}</p>
            <div className="font-light italic mt-3">
                {TimeAgo(date)}
            </div>
        </div>
    );
}

export default PostContent;
