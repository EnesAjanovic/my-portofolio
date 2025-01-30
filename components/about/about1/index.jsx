import Image from "next/image";
import PersonalInfo from "./PersonalInfo";

const index = () => {
    return (
        <div className="grid grid-cols-12 md:gap-10 pt-4 md:pt-[40px] items-center">
            {/* start .col and routePath image left */}
            <div className="col-span-12 md:col-span-4">
                {/* personal images for routePath page  */}
                <Image
                    className="w-full md:w-[330px] md:h-[400px] object-cover overflow-hidden rounded-[35px] mb-3 md:mb-0"
                    src="/images/about/about.jpg"
                    width={300}
                    height={400}
                    alt="routePath"
                />
            </div>
            {/* End .col and routePath image left */}

            {/* Start about right content */}
            <div className="col-span-12 md:col-span-8 space-y-2.5">
                <div className=" md:mr-12 xl:mr-16">
                    <h3 className="text-4xl font-medium dark:text-white mb-2.5 ">
                        Who am i?
                    </h3>
                    <p className="text-gray-lite  dark:text-color-910 leading-7">

                        I’m a Frontend Developer from Gornji Vakuf, currently living in Mostar, Bosnia and Herzegovina with over 5 years of experience
                        building modern, responsive, and user-friendly web applications. My expertise lies in JavaScript
                        and its powerful frameworks, mostly including React, Next.js, and Node.js, which I use to craft
                        seamless and efficient web experiences.
                        <br/>
                        <br/>

                        I’m passionate about solving complex problems and turning ideas into reality through clean and
                        scalable code. I thrive in collaborative team environments, leveraging my strong skills in
                        problem-solving, critical thinking, and communication to contribute to successful projects.
                        <br/>
                        <br/>
                        Beyond technical skills, I bring excellent public relations, time management, and teamwork
                        abilities, ensuring that projects are delivered on time and meet client expectations.
                        <br/>
                        <br/>
                        When I’m not coding, I enjoy traveling and exploring new cultures, which inspires me to think
                        creatively and adapt to diverse challenges.
                    </p>
                </div>

                {/* personal information */}
                <div>
                    <h3 className="text-4xl font-medium my-5 dark:text-white">
                        Personal Info
                    </h3>
                    <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <PersonalInfo/>
                    </div>
                </div>
                {/* End personal information */}
            </div>
            {/* End about right content */}
        </div>
    );
};

export default index;
