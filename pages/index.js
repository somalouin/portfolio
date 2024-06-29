import About from "../components/about";
import Experience from "../components/experience";
import Stack from "../components/stack";

export default function Home() {
	return (
		<div className="min-h-full flex items-center justify-center font-mono py-8 bg-white text-black">
			<div id="content" className="px-4 md:w-4/5 lg:w-3/5 xl:w-1/3">
				<div id="me" className="pt-10 py-6">
					<p className="text-xl font-bold">Serge-Olivier</p>
					<p className="text-xl font-bold">Malouin</p>
				</div>
				<About />
				<Experience />
				<Stack />
				<div className="flex justify-evenly pt-20">
					<a
						href="https://github.com/somalouin"
						target="_blank"
						className="text-sm underline"
						rel="noreferrer"
					>
						github
					</a>
					<a
						href="https://www.linkedin.com/in/serge-olivier-malouin-5a89a1193/"
						target="_blank"
						className="text-sm underline"
						rel="noreferrer"
					>
						linkedin
					</a>
				</div>
			</div>
		</div>
	);
}
