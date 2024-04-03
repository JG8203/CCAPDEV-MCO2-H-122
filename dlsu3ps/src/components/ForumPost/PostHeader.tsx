interface PostHeaderProps {
    title: string;
}

export default function PostHeader({ title } : PostHeaderProps) {
    return (
      <header className="font-semibold bg-olive text-beige p-3 flex justify-between">
        <h2>{title}</h2>
      </header>
    );
  }