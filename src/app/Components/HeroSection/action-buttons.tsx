
import  { useState, useEffect, useMemo } from 'react';
import DailyTaskActionButtonsFunction from '../Data/DailyActionButtons.ts';
import { DailyTaskActionButtons } from '../Data/DailyTaskActionButtons.ts';
import '../Cosmetics/HeroSection/DailyTasksActionButtons.css';

function ActionButtons() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const _buttonData = useMemo(() => {
        return new DailyTaskActionButtonsFunction(DailyTaskActionButtons);
    }, []);

    const buttonData = _buttonData.getTasks();

    useEffect(() => {
        // Set up the interval to change the index every 5 seconds
        const intervalId = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % buttonData.length);
        }, 5000);

        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);
    }, [buttonData.length]);

    const currentItem = buttonData[currentIndex];

    return (
        <div className='ActionButtons'>
            <div className='Info'>
                <div className='info'>
                    <div className='InfoItem'>

                        <div className='Infodesc'>
                            {
                                buttonData.map((item, index) => (
                                    <button className='item-desc' onClick={() => setCurrentIndex(index)}>
                                        <div>
                                            {
                                                index === currentIndex && <div className='progress'>
                                                    <div className='progress-bar'></div>
                                                </div>
                                            }

                                        </div>
                                        <div>
                                            <h2 className={index === currentIndex ? 'item-title-font' : 'item-title'}
                                                key={index}>{item.title}</h2>

                                            <p className='item-desc'
                                               key={index}>{currentIndex === index ? currentItem.description : ''}{}</p>


                                        </div>



                                    </button>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className='Image'>
                <img src={currentItem.images} alt={currentItem.title} height={"578px"} width={"450px"} />
            </div>
        </div>
    );
}

export default ActionButtons;
