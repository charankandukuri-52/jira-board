import { useEffect, useState, useMemo } from 'react';
import '../Cosmetics/HeroSection/HeroCards.css';
import { HeroImages } from "../Data/HeroImages.ts";
import HeroCardItems from "../Data/HeroCards.ts";

function HeroCards() {
    const _cardData = useMemo(() => new HeroCardItems(HeroImages), [HeroImages]);
    const [cardsData, setCardsData] = useState<{ id: string, Group: string, department: string, image: string }[]>([]);

    useEffect(() => {
         setCardsData(_cardData.getItems());
    }, [_cardData]);

    return (
        <>
            <div className="Free-btns">
                <button className="free-btns">
                    <h2>Get Jira Free</h2>
                </button>
            </div>
            <div className="cards">
                {cardsData.map((element, index) => (
                    <div key={index} className="display-cards">
                        <div className="groupDesc">{element.Group}</div>
                        <div className="groupDomain">{element.department}</div>
                        <div className="groupImages">
                            <img src={element.image} alt="" width="227px" height="364px" />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default HeroCards;
