import Image from "next/image";

export const StackSection = () => {
  return (
    <div className="py-10">
      <div>
        <p className="text-l font-bold">tech stack</p>
        <p className="text-sm pt-2">languages</p>
        <ul className="px-4 py-2 grid grid-cols-8 gap-6">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            width={40}
            height={40}
            alt="typescript"
          />
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            width={40}
            height={40}
            alt="javascript"
          />
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
            width={40}
            height={40}
            alt="python"
          />
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
            width={40}
            height={40}
            alt="java"
          />
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-plain.svg"
            width={40}
            height={40}
            alt="csharp"
          />
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg"
            width={40}
            height={40}
            alt="golang"
          />
        </ul>

        <p className="text-sm pt-6">frameworks</p>
        <ul className="px-4 py-2 grid grid-cols-8 gap-6">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
            width={40}
            height={40}
            alt="nodejs"
          />
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
            width={40}
            height={40}
            alt="nextjs"
          />
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            width={40}
            height={40}
            alt="reactjs"
          />
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
            width={40}
            height={40}
            alt="tailwindcss"
          />
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
            width={40}
            height={40}
            alt="vuejs"
          />
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg"
            width={40}
            height={40}
            alt="spring"
          />
        </ul>

        <p className="text-sm pt-6">databases</p>
        <ul className="px-4 py-2 grid grid-cols-8 gap-6">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg"
            width={40}
            height={40}
            alt="firebase"
          />
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
            width={40}
            height={40}
            alt="mongodb"
          />
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
            width={40}
            height={40}
            alt="postgresql"
            className=""
          />
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
            width={40}
            height={40}
            alt="mysql"
          />
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg"
            width={40}
            height={40}
            alt="oracle"
          />
        </ul>
      </div>
    </div>
  );
};
