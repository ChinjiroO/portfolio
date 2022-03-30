import Parallax from "./parallax";

export default function ObjectiveSection() {
  return (
    <Parallax offset={50}>
      <div className="flex overflow-hidden h-fit  justify-center items-center font-bold max-w-5xl py-10 px-5 mx-5 bg-midnight-100/10 rounded-xl">
        <Parallax offset={25}>
          <p className="text-3xl py-5">Objective</p>
          <p>
            “Graduated with a B.Ed. in Computer Education and seeking an
            Front-End Developer position. Skilled in web development, mobile
            application development (Hybrid apps), and Rest API. Adept knowledge
            of HTML, CSS, JavaScript, React.js, Responsive design, and web
            development.”
          </p>
        </Parallax>
      </div>
    </Parallax>
  );
}
