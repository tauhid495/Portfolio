import React, { useEffect } from 'react';
import './TextSphere.css';
import TagCloud from "TagCloud";


const TextSphere = () => {

    useEffect(() => {
        return () => {
            const container = ".tagcloud";
            const texts = [
                "HTML 5",
                "CSS 3",
                "ReactJs",
                "React router",
                "Firebase",
                "Axios",
                "Tailwind",
                "Javascript",
                "ES6",
                "React icon",
                "Daisy Ui",
                "GIT",
                "GitHub",
                "Node Js",
                "Express Js",
                "Bootstrap",
                "Redux",
                "MongoDB",
                "JWT",
                "Netlify",
                "Render",
                "Heroku",
                "TsParticle",
            ];

            const options = {
                radius: 130,
                maxSpeed: "normal",
                initSpeed: "normal",
                keep: true,
            };

            TagCloud(container, texts, options);
        };
    }, []);
    return (
        <div>
            <div className="text-shpere">
                {/* span tag className must be "tagcloud"  */}
                <span className="tagcloud"></span>
            </div>
        </div>
    );
};

export default TextSphere;