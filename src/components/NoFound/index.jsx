import { Link } from 'react-router-dom';
import './NoFound.css'


const NoFound = () => {
    return (
        <section className="page_404">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 ">
                        <div className="col-sm-10 col-sm-offset-1  text-center">
                            <div className="four_zero_four_bg">
                                <h1 className="text-center "> Error 404</h1>


                            </div>

                            <div className="contant_box_404">
                                <h3 className="h2">
                                    Upps!
                                </h3>

                                <p>La página que solicitaste no se encuentra disponible</p>

                                <Link to={"/"} className="link_404">Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NoFound;