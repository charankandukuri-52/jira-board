import { useState } from 'react'
import '../Cosmetics/HeroSection/HeroCards.css'
import HeroCardItems from '../Data/HeroCards'
import {HeroImages} from "../Data/HeroImages.ts";

function HeroCards() {

    const _cardData = new HeroCardItems(HeroImages)
    const [cardsData, setCardsData] = useState<{ [key: string]: any }[]>(_cardData.getItems())
    return (
        <>
            <div className='Free-btns'>
                <button className='free-btns'> <h2>Get Jira  Free</h2></button>
            </div>
            <div className='cards'>
                {
                    cardsData.map((element, index) =>
                    (
                        <div key={index} className='display-cards'>
                            <div className='groupDesc'>
                                {element.Group}
                            </div>
                            <div className='groupDomain'>
                                {element.department}
                            </div>

                            <div className='groupImages'>

                                <img src={element.image} alt="" width={"227px"} height={"364px"}/>
                            </div>
                        </div>
                    )
                    )
                }

            </div>
        </>
    )
}

export default HeroCards