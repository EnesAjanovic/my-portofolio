const Tag = () => {
    const tagList = [
        "JavaScript", "TypeScript", "NodeJS", "ReactJS", "React Native", "NextJS", "Three.js", "GraphQL", "Redux", "Recoil", "HTML/CSS", "SASS", "MUI", "Tailwind", "Firebase", "MySQL", "MongoDB", "Express", "Cypress", "Jest"
    ];
    return (
        <>
            {tagList.map((tag, i) => (
                <button className="resume-btn text-[15px]" key={i}>
                    {tag}
                </button>
            ))}
        </>
    );
};

export default Tag;
