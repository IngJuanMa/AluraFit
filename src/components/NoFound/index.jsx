import { Link } from 'react-router-dom';
import './NoFound.css'


const NoFound = () => {
    return (
        <section class="page_404">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 ">
                        <div class="col-sm-10 col-sm-offset-1  text-center">
                            <div class="four_zero_four_bg">
                                <h1 class="text-center "> Error 404</h1>


                            </div>

                            <div class="contant_box_404">
                                <h3 class="h2">
                                    Upps!
                                </h3>

                                <p>La página que solicitaste no se encuentra disponible</p>

                                <Link to={"/"} class="link_404">Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NoFound;