import bgLogo from '../assets/img/dc-logo-bg.png'
export default function AppFooter() {

    return (


        <footer>



            <div className='container'>

                <div>

                    <ul>
                        <h3>dc comics</h3>
                        <li>
                            <a href="">characters</a>
                        </li>
                        <li>
                            <a href="">Comics</a>
                        </li>
                        <li>
                            <a href="">Movies</a>
                        </li>
                        <li>
                            <a href="">TV</a>
                        </li>
                        <li>
                            <a href="">Games</a>
                        </li>
                        <li>
                            <a href="">Videos</a>
                        </li>
                        <li>
                            <a href="">News</a>
                        </li>
                    </ul>
                    <ul>
                        <h3>shop</h3>
                        <li>
                            <a href="">Shop DC</a>
                        </li>
                        <li>
                            <a href="">Shop DC Collectibles</a>
                        </li>

                    </ul>
                </div>
                <div>
                    <ul>
                        <h3>dc</h3>
                        <li>
                            <a href="">Terms Of Use</a>
                        </li>
                        <li>
                            <a href="">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="">Ad choice</a>
                        </li>
                        <li>
                            <a href="">advertising</a>
                        </li>
                        <li>
                            <a href="">jobs</a>
                        </li>
                        <li>
                            <a href="">subscriptions</a>
                        </li>
                        <li>
                            <a href="">talent workshops</a>
                        </li>
                        <li>
                            <a href="">CPSC certificate</a>
                        </li>
                        <li>
                            <a href="">ratings</a>
                        </li>
                        <li>
                            <a href="">shop help</a>
                        </li>
                        <li>
                            <a href="">contac us</a>
                        </li>

                    </ul>

                </div>
                <div>
                    <ul>
                        <h3>sites</h3>
                        <li>
                            <a href="">DC</a>
                        </li>
                        <li>
                            <a href="">MAD magazine</a>
                        </li>
                        <li>
                            <a href="">DC kids</a>
                        </li>
                        <li>
                            <a href="">DC universe</a>
                        </li>
                        <li>
                            <a href="">DC power visa</a>
                        </li>
                    </ul>
                </div>

            </div>
            <div className="bg-imgages">
                <img src={bgLogo} alt="" />
            </div>

        </footer>


    )
}