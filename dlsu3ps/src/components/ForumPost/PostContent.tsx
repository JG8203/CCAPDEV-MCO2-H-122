import { TimeAgo } from '@/components/ForumPost/TimeAgo';
import { remark } from 'remark';
import html from 'remark-html';

interface PostContentProps {
    children: string; // assuming post.content is passed as the children prop
    date: Date; // assuming date is passed as a prop
}

const PostContent: React.FC<PostContentProps> = async ({ children, date }) => {
    const processedContent = await remark()
    .use(html)
    .process(children);
    const contentHtml = processedContent.toString();
    console.log(contentHtml);
    return (
        <div className="post-content py-4 px-6 overflow-hidden flex flex-col w-full">
            <div className="text-black" dangerouslySetInnerHTML={{ __html: contentHtml }} />
            <div className="font-light italic mt-3">
                {TimeAgo(date)}
            </div>
        </div>
    );
}

export default PostContent;
