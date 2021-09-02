import './Landing.css';

const Landing = (props) => {
    return (
        <div>
            <div className="section" id="about">
                <i className="fas fa-dove"></i>
                <h1 className="section__title">your best friend</h1>
                <p className="section__paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A ab magnam
                    sapiente reiciendis, enim et placeat cum nam beatae vero itaque dicta
                    sit vel tenetur labore aperiam, explicabo ratione inventore sed odio.
                    Neque temporibus atque unde necessitatibus consequatur totam vero
                    maiores, nisi accusantium quis? Quam dolores vitae ex ipsum aliquam!
                </p>

                <div className="section__form">
                    <h2 className="section__form-title">your best friend is waiting for you</h2>
                </div>
            </div>

            <div className="cards-container" id="pricing">
                <div className="card card-1">
                    <p className="card__prices">150</p>
                    <p className="card__info">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
                        laudantium tempora quasi consectetur mollitia iste?
                    </p>
                </div>
                <div className="card card-2">
                    <p className="card__prices">300</p>
                    <p className="card__info">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                        necessitatibus quis inventore quia doloremque facilis.
                    </p>
                </div>
                <div className="card card-3">
                    <p className="card__prices">450</p>
                    <p className="card__info">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
                        laudantium tempora quasi consectetur mollitia iste?
                    </p>
                </div>
            </div>

            <footer className="footer">
                <div className="footer__text">
                    &copy;Friends
                </div>
            </footer>
        </div>
    )
}

export default Landing;