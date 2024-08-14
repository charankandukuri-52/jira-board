import Description from "./Description"
import '../Cosmetics/HeroSection/HeroSection.css'
import HeroCards from "./HeroCards"
import BrandImages from "./BrandsAgreement"
import DailyTasks from "./daily-tasks.tsx";
import ActionButtons from "./action-buttons.tsx";
import AISection from "./AI.tsx";
function HeroSection() {
    return (
        <>
            <div className="HeroPages">
                <div className="page-renders">
                    <Description
                        mainHeading={"Great outcomes"}
                        sideHeading={"start with"}
                        brandHeading={"Jira"}
                        tagLine={" The only project management tool you need to plan and track work across every team."}
                    />
                    <HeroCards />
                </div>
                <BrandImages />
                <DailyTasks/>
                <ActionButtons/>
                <AISection/>
            </div>
        </>
    )
}

export default HeroSection