import { useMemo, useEffect, useState } from "react";
import FetchCollaborationItems from "../Data/CollaborationItems";
import { CollaborationData } from "../Data/CollaborationData";
import '../Cosmetics/HeroSection/Collaboration.css'

function CollaborationSection() {
    const _collaborationData = useMemo(() => {
        return new FetchCollaborationItems([CollaborationData]);
    }, []);

    const items = _collaborationData.getAllItems();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <>
            <div className='collaboration-heading'>
                <div className='collaboration-title'>
                    {items[0].title}
                </div>
                <div className='collaboration-subTitle'>
                    {items[0].subTitle}
                </div>

            </div>
            <div className='collaboration-grids'>
                {items[0].grids.map((grid, index) => (
                    <div key={grid.id} className="grid-item">
                        {index % 2 === 0 ? (
                            <>
                                <div className='image-grid'>
                                    <img src={grid.imageLink} alt={grid.heading}/>
                                </div>
                                <div className='content-grid'>
                                    <h3>{grid.heading}</h3>
                                    <p>{grid.content}</p>
                                    <a href="#"><span> {grid.link} </span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="8" viewBox="0 0 11 8"
                                             fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                  d="M7.40796 0L6.32831 1.2021L8.07854 3.1497H0.763182C0.341906 3.1497 0 3.53038 0 3.99943C0 4.46849 0.341906 4.84917 0.763182 4.84917H8.07854L6.32831 6.7979L7.40796 8L11 3.99943L7.40796 0Z"
                                                  fill="#0065FF"></path>
                                        </svg>
                                    </a>
                                </div>

                            </>
                        ) : (
                            <>

                                <div className='content-grid'>
                                    <h3>{grid.heading}</h3>
                                    <p>{grid.content}</p>
                                    <a href="#"><span> {grid.link} </span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="8" viewBox="0 0 11 8"
                                             fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                  d="M7.40796 0L6.32831 1.2021L8.07854 3.1497H0.763182C0.341906 3.1497 0 3.53038 0 3.99943C0 4.46849 0.341906 4.84917 0.763182 4.84917H8.07854L6.32831 6.7979L7.40796 8L11 3.99943L7.40796 0Z"
                                                  fill="#0065FF"></path>
                                        </svg>
                                    </a>
                                </div>
                                <div className='image-grid'>
                                    <img src={grid.imageLink} alt={grid.heading}/>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
            <div className={`collaboration-teams ${isLoaded ? 'animate-hopup' : ''}`}>
                <div className='collaboration-teams-info'>
                    <h3>Meet Teams where they work</h3>
                    <p>If your team uses it, we integrate with it. Easily add your favorite tools from the Atlassian
                        Marketplace, keeping Jira as your central source of truth.</p>
                    <button>See all Integrations</button>
                </div>

                <div className='collaboration-teams-icon'>
                    {[
                        {
                            src: "https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/rkjbqphggx6gcq8wm82k283h/ms-teams.webp?auto=webp",
                            alt: "Microsoft Teams icon",
                            width: 60,
                            height: 50
                        },
                        {
                            src: "https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/hx6hrcbfq3qnrpmgq58t/google-drive.webp?auto=webp",
                            alt: "Google Drive icon",
                            width: 60,
                            height: 50
                        },
                        {
                            src: "https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/2vp44p8tq9hrkjx9fnfz5z/google-docs.webp?auto=webp",
                            alt: "Google Docs icon",
                            width: 60,
                            height: 50
                        },
                        {
                            src: "https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/vp29t7tfp35tg93q7mkv3gz/figma.webp?auto=webp",
                            alt: "Figma icon",
                            width: 48,
                            height: 60
                        },
                        {
                            src: "https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/skcmjcp98n39vwcx5w6nptq/miro.webp?auto=webp",
                            alt: "Miro icon",
                            width: 60,
                            height: 50
                        },
                        {
                            src: "https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/hz462zxp3bcwtm34mcvxcpsb/slack.webp?auto=webp",
                            alt: "Slack icon",
                            width: 60,
                            height: 58
                        },
                    ].map((icon, index) => (
                        <div key={index} className='collaboration-teams-icons'
                             style={{animationDelay: `${index * 0.5}s`}}>
                            <img loading="lazy" src={icon.src} alt={icon.alt} width={icon.width} height={icon.height}/>
                        </div>
                    ))}
                </div>
            </div>


        </>
    );
}

export default CollaborationSection;
