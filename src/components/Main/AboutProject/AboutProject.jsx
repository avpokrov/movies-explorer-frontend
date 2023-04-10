import "./AboutProject.css";
import Heading from "../Heading/Heading";

function AboutProject() {
    return (
        <section className="AboutProject__main">
            <Heading heading="О проекте" />
            <div className="AboutProject__info-main">
                <div className="AboutProject__info-block">
                    <div className="AboutProject__info-head">
                        Дипломный проект включал 5 этапов
                    </div>
                    <div className="AboutProject__info-text">
                        Составление плана, работу над бэкендом,
                        вёрстку, добавление функциональности и финальные доработки.
                    </div>
                </div>
                <div className="AboutProject__info-block">
                    <div className="AboutProject__info-head">
                        На выполнение диплома ушло 5 недель
                    </div>
                    <div className="AboutProject__info-text">
                        У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
                        соблюдать, чтобы успешно защититься.
                    </div>
                </div>
            </div>
            <div className="AboutProject__timeLine-main">
                <div className="AboutProject__timeLine-block">1 неделя</div>
                <div className="AboutProject__timeLine-block">4 недели</div>
                <div className="AboutProject__timeLine-text">Back-end</div>
                <div className="AboutProject__timeLine-text">Front-end</div>
            </div>
        </section>
    );
}

export default AboutProject;