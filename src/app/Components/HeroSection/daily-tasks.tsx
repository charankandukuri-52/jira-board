import '../Cosmetics/HeroSection/DailyTasks.css';
import image from '../../../assets/tasks.webp';


function DailyTasks() {

    return (
        <div className='daily-tasks'>
            <div className='daily-tasks__item'>
                <h1 className='title'>
                    Made for complex projects or everyday tasks
                </h1>
                <img src={image} alt="Tasks" height="66px" width="57px"/>

            </div>

        </div>
    );
}

export default DailyTasks;
