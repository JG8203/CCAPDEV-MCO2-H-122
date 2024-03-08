interface PostHeaderProps {
    title: string;
}

export default function PostHeader({ title } : PostHeaderProps) {
    return (
      <header className="text-xs uppercase bg-olive text-beige p-3 flex justify-between">
        <h2>{title}</h2>
        <div>
          <span>1 <button>🔼</button></span>
          <span>0 <button>🔽</button></span>
        </div>
      </header>
    );
  }
  