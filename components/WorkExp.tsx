import { workExperience } from "@/data";
import HoverEffect from "./ui/HoverEffect";

function WorkExp() {
  return (
    <div className="mt-[11rem]">

      <div className="flex justify-center ">
        <h1 className="sm:text-3xl lg:text-5xl md:text-4xl font-extrabold">
          My {' '}

          <span className="text-purple">Work Experience</span>
        </h1>
      </div>

      <div>
        <HoverEffect items={workExperience} />
      </div>

    </div>
  );
}

export default WorkExp
