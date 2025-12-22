import Image from "next/image";

interface IStackItem {
  src: string;
  alt: string;
}

interface IStackCategoryProps {
  title: string;
  items: IStackItem[];
  isFirst?: boolean;
}

export const StackCategory = ({
  title,
  items,
  isFirst = false,
}: IStackCategoryProps) => {
  return (
    <div>
      <p className={`text-sm ${isFirst ? "pt-2" : "pt-6"}`}>{title}</p>
      <ul className="px-4 py-2 grid grid-cols-6 gap-6">
        {items.map((item: IStackItem) => (
          <li key={item.alt}>
            <Image src={item.src} width={40} height={40} alt={item.alt} />
          </li>
        ))}
      </ul>
    </div>
  );
};
