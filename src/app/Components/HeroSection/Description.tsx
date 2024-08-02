import '../Cosmetics/HeroSection/Description.css'
import underline from '../../../assets/Jira_underline.webp'
interface DescriptionProps {
    mainHeading: string,
    sideHeading: string,
    brandHeading: string,
    tagLine: string,
}

function Description({ mainHeading, sideHeading, brandHeading, tagLine }: DescriptionProps) {

    return (
        <>
            <div className="Headings">
                <div className="mainHeadings">
                    {mainHeading}
                </div>
                <div className="sideHeadings">
                    {sideHeading}
                </div>
                <div className='brandHeadings'>
                    {brandHeading}
                    <div className='image-underline'>
                        <img src={underline} alt="" width={"93px"} />
                    </div>
                </div>

            </div>
            <div className='tagLine'>
                {tagLine}
            </div>
        </>
    )
}

export default Description