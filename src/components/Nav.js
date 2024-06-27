import { Link, Outlet } from "react-router-dom"
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';



// Nav page
export const Nav = () => {
    const { t, i18n } = useTranslation();
    return (

        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <h1 className="navbar-brand" to="/">Designery</h1>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item"><Link className="nav-link" to="./myShoppingCart"><FontAwesomeIcon icon={faShoppingCart} /><span className="cart-item-count"></span></Link> </li>
                        <li className="nav-item"><Link className="nav-link" to="./myHome">{t('navPage.linkHome')}</Link> </li>
                        {/* <li className="nav-item"><Link className="nav-link" to="./myContact">{t('navPage.linkContact')}</Link> </li> */}
                        <li className="nav-item"><Link className="nav-link" to="./myCommonQuestions">{t('navPage.linCommonQuestions')}</Link> </li>
                        <li className="nav-item"> <Link className="nav-link" to="./myLogin">{t('navPage.linkLogin')}</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="./myProductList">{t('navPage.linkProduct')}</Link> </li>
                        <li className="nav-item"><Link className="nav-link" to="./myOrderForm">{t('navPage.linkOrderForm')}</Link> </li>
                        <li className="nav-item"><Link className="nav-link" to="./myAdminDashboard">AdminDashboard</Link> </li> 
                        <li className="nav-item"><Link className="nav-link" to="./myCategoriesManager">CategoriesManager</Link> </li> 
                        <li className="nav-item"><Link className="nav-link" to="./myOrderManager">OrderManager</Link> </li> 
                    </ul>
                </div>
                <div className="d-flex">
                    <button onClick={() => i18n.changeLanguage('en')}>English</button>
                    <button onClick={() => i18n.changeLanguage('he')}>עברית</button>
                </div>

                {/* <Outlet></Outlet> */}
            </div> </nav>

    );
}
//     <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
//         <h1 className="navbar-brand" to="/">Navbar page</h1>
//         <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav">
//                 <li className="nav-item">
//                     <Link className="nav-link" to="./myHome">{t('navPage.linkHome')}</Link>
//                 </li>
//                 <li className="nav-item">
//                     <Link className="nav-link" to="./myContact">{t('navPage.linkContact')}</Link>
//                 </li>
//             </ul>
//         </div>
//         <div>
//             <div className="container">
//                 <button type="button" class="btn btn-outline-warning" onClick={() => i18n.changeLanguage('en')}>English</button>
//                 <button type="button" class="btn btn-outline-warning" onClick={() => i18n.changeLanguage('he')}>עברית</button>
//             </div>
//         </div>
//     </nav>

// import { Link } from 'react-router-dom';