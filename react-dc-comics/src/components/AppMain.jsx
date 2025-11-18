import DcImage from '../assets/img/buy-comics-digital-comics.png'
import DcMerch from '../assets/img/buy-comics-merchandise.png'
import DcShopLoc from '../assets/img/buy-comics-shop-locator.png'
import DcSubs from '../assets/img/buy-comics-subscriptions.png'
import DcPowerVisa from '../assets/img/buy-dc-power-visa.svg'
export default function AppMain() {

    return (

        <main>
            <h3> Content goes Here  </h3>
            <nav>
                <ul>
                    <li>
                        <img src={DcImage} alt="" />
                        <a href="">digital comics</a>
                    </li>
                    <li>
                        <img src={DcMerch} alt="" />
                        <a href="">digital comics</a>
                    </li>
                    <li>
                        <img src={DcShopLoc} alt="" />
                        <a href="">digital comics</a>
                    </li>
                    <li>
                        <img src={DcPowerVisa} alt="" />
                        <a href="">digital comics</a>
                    </li>
                    <li>
                        <img src={DcSubs} alt="" />
                        <a href="">digital comics</a>
                    </li>
                </ul>
            </nav>
        </main>
    )
}