import dynamic from "next/dynamic";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import ResumeCard from "@/components/Resume/ResumeCard";
import LineItem from "@/components/Resume/LineItem";
import Tag from "@/components/tag/Tag";

export const metadata = {
    title: "Resume",
};
const index = () => {
    return (
        <div
            className="bg-homeBg min-h-screen dark:bg-homeBg-dark bg-no-repeat bg-center bg-cover bg-fixed  md:pb-16 w-full">
            {/* End Head for Seo */}

            <Header/>
            {/* End  Header */}

            <div className="container lg:rounded-2xl bg-white dark:bg-[#111111]  ">
                <div data-aos="fade">
                    <div className="container sm:px-5 md:px-10 lg:px-20 ">
                        <div className="py-12 px-4">
                            {/*page title here */}
                            <h2 className="after-effect after:left-44 mb-[40px] mt-16 lg:mt-0">
                                Resume
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 ">
                                <ResumeCard/>
                            </div>
                        </div>
                    </div>
                    {/* End .container */}

                    <div className="container bg-color-810 dark:bg-[#0D0D0D] py-12 px-4 sm:px-5 md:px-10 lg:px-20">
                        <div className="grid grid-cols-1  md:grid-cols-2 gap-8">
                            <div className="col-span-1">
                                <h4 className="text-5xl dark:text-white font-medium mb-6">
                                    Working Skills
                                </h4>

                                {/* experience percent items */}

                                <LineItem/>
                            </div>
                            <div className="col-span-1">
                                <h4 className="text-5xl dark:text-white font-medium mb-8">
                                    Knowledges
                                </h4>

                                {/* Knowledges items */}

                                <div className="flex gap-x-3 gap-y-3 md:gap-y-3 md:gap-x-3 flex-wrap">
                                    <Tag/>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Skills */}

                    {/* call footer */}
                    <Footer/>
                </div>
                {/* End fade effect */}
            </div>
            {/* End container */}
        </div>
    );
};

export default dynamic(() => Promise.resolve(index), {ssr: false});
