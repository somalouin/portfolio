import { databases, frameworks, languages } from "../_constants/stacks";
import { StackCategory } from "./StackCategory";

export const StackSection = () => {
  return (
    <div className="py-10 px-4 md:px-8">
      <p className="text-lg font-bold">tech stack</p>
      <StackCategory title="languages" items={languages} isFirst />
      <StackCategory title="frameworks" items={frameworks} />
      <StackCategory title="databases" items={databases} />
    </div>
  );
};
