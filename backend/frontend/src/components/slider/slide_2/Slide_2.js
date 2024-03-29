import bycicle from './courier_bycicle.svg'
import car from './courier_car.svg'
import man from './courier_man.svg'
import motorbike from './courier_motorbike.svg'
import "./slide__2.css"

function Slide_2(){
    return(
        <div className="slider-item slide_2">
            <div className="caption">
                Логистика
            </div>
            <div className='slide_2__row'>
                <div className="slide_2__column">
                    <div className="slide_2__row">
                        <div className="slide_2__column slide_2__obj slide_2__half">
                            <div className="slide_2__header">
                                ОТ 15 МИНУТ
                            </div>
                            <div className="slide_2__content">
                                среднее время прибытия курьера в ресторан. Вы точно успеете приготовить блюдо
                            </div>
                        </div>
                        <div className="slide_2__column slide_2__obj slide_2__half">
                            <div className="slide_2__header">
                                ОБУЧЕНИЕ
                            </div>
                            <div className="slide_2__content">
                                курьеры регулярно проходят аттестацию на знание работы сервиса и обязанностей
                            </div>
                        </div>
                    </div>
                    <div className="slide_2__column slide_2__obj slide_2__full">
                        <div className="slide_2__header">
                            КОЛЛ-ЦЕНТР
                        </div>
                        <div className="slide_2__content">
                            Управление курьерами поддерживает единый колл-центр. Держим в курсе статуса каждого заказа.
                        </div>
                    </div>
                    <div className="slide_2__column slide_2__obj slide_2__full">
                        <div className="slide_2__header">
                            УПРАВЛЕНИЕ ЗАКАЗАМИ
                        </div>
                        <div className="slide_2__content">
                            Автоматизированная система обработки заказов анализирует весь объем данных и назначает курьера, который максимально быстро выполнит заказ
                        </div>
                    </div>
                </div>
                <div className="slide_2__column slide_2__obj slide_2__vertical">
                    <div className="slide_2__header">
                        ВСЕ КУРЬЕРЫ МОБИЛЬНЫ
                    </div>
                    <div className="slide_2__content">
                        <ul>
                            <li><span>10 %</span> мотоциклах</li>
                            <li><span>20 %</span> на велосипедах</li>
                            <li><span>20 %</span> пешие</li>
                            <li><span>50 %</span> на автомобилях</li>
                        </ul>
                        <div className="slide_2__svg">
                            <div className='imgBorder'><img src={man} alt=""/></div>
                            <div className='imgBorder'><img src={car} alt=""/></div>
                            <div className='imgBorder'><img src={bycicle} alt=""/></div>
                            <div className='imgBorder'><img src={motorbike} alt=""/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slide_2;