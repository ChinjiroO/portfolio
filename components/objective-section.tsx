import Parallax from "./parallax";
import { motion } from "framer-motion";

const ObjectiveSection: React.FC = () => {
	return (
		<Parallax offset={50}>
			<motion.div
				initial={{ x: -200, opacity: 0.5 }}
				whileInView={{ x: 0, opacity: 1 }}
				transition={{
					duration: 0.8,
				}}
				viewport={{ once: true }}
			>
				<div className="flex overflow-hidden h-fit shadow-xl justify-center items-center font-bold max-w-5xl py-5 sm:py-10 px-5 mx-5 bg-midnight-200/60 rounded-xl">
					<Parallax offset={25}>
						<p className="text-3xl py-5 text-green-101">Objective</p>
						<p className="font-sans font-normal text-slate-100 indent-8">
							“ Graduated with a B.Ed. in Computer Education and seeking an
							Front-End Developer position. Skilled in web development, mobile
							application development (Hybrid apps), and Rest API. Adept
							knowledge of HTML, CSS, JavaScript, React.js, Responsive design,
							and web development. ”
						</p>
					</Parallax>
				</div>
			</motion.div>
		</Parallax>
	);
};
export default ObjectiveSection;
