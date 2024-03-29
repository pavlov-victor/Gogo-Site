import './Subscribe.css'
import subscribe_img from './subscribe_image.svg'
import ruble_icon from './ruble_icon.svg'

function Subscribe(){
    return(
        <div className='subscribe__block block'>
            <div className='subscribe__title caption'>
                Стоимость подписки
            </div>
            <div className='subscribe__content'>
                <div className='subscribe__column'>
                    <div className='subscribe__subscribe-conditions'>
                        <div className='subscribe-conditions__title'>
                            условия подписки
                        </div>
                        <div className='subscribe-conditions__number'>
                            <p>10 000</p>
                            <img src={ruble_icon} alt='ruble icon' />
                        </div>
                        <div className='subscribe-conditions__text'>
                            Фиксированный ежемесячный платеж
                        </div>
                    </div>
                    <div className='subscribe__image'>
                        <img src={subscribe_img} alt='subscribe img' />
                    </div>
                </div>
                <div className='delivery__column'>
                    <div className='subscribe__delivery-conditions'>
                        <div className='delivery-conditions__title'>
                            условия доставки
                        </div>
                        <div className='delivery-conditions__table'>
                            <ul>
                                <li className='delivery__table-row'>
                                    <div>
                                        Пеший курьер
                                    </div>
                                    <p>
                                        <span>150 </span> руб - 2 км
                                    </p>
                                </li>
                                <li className='delivery__table-row'>
                                    <div>
                                        Велокурьер
                                    </div>
                                    <p>
                                        <span>150 </span> руб - 2 км
                                    </p>
                                    <p>
                                        <span>15 </span> руб за каждые 500 м
                                    </p>
                                </li>
                                <li className='delivery__table-row'>
                                    <div>
                                        Автокурьер
                                    </div>
                                    <p>
                                        <span>200 </span> руб - 3 км
                                    </p>
                                    <p>
                                        <span>25 </span> руб за каждые 500 м
                                    </p>
                                </li>
                                <li className='delivery__table-row'>
                                    <div>
                                        Мотокурьер
                                    </div>
                                    <p>
                                        <span>200 </span> руб - 4 км
                                    </p>
                                    <p>
                                        <span>25 </span> руб за каждые 500 м
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscribe;