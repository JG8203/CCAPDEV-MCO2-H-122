interface PostContentProps {
    children: string; // assuming post.content is passed as the children prop
}

const PostContent: React.FC<PostContentProps> = ({ children }) => {
    return (
        <div className="post-content py-4 px-6 overflow-hidden flex flex-col">
            <p className="text-black">{children}</p>
        </div>
    );
}

export default PostContent;
