import React, {PureComponent} from 'react';

export default class Footer extends PureComponent{

    render(){
        return(
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="list-inline">
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li className="footer-menu-divider">&sdot;</li>
                                <li>
                                    <a href="#about">About</a>
                                </li>
                                <li className="footer-menu-divider">&sdot;</li>
                                <li>
                                    <a href="#services">Services</a>
                                </li>
                                <li className="footer-menu-divider">&sdot;</li>
                                <li>
                                    <a href="#contact">Contact</a>
                                </li>
                            </ul>
                            <p className="copyright text-muted small">Copyright &copy; Video Highlighting in NAVER 2017. All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
