import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from '../styles/components/Header.module.scss';

const Header = () => {
    const router = useRouter();

    const generateClassName = (pageUrl = "") => {
        let className = styles['header-container__links-container__link'];

        if (router.pathname === pageUrl) {
            className += ` ${styles['active-link']}`;
        }

        return className;
    }

    return (
        <header className={styles['header-container']}>
            <ul className={styles['header-container__links-container']}>
                <li
                    className={generateClassName("/material-ui")}
                >
                    <Link href="/material-ui">
                        <a>Material UI</a>
                    </Link>
                </li>
                <li
                    className={generateClassName("/websockets")}
                >
                    <Link href="/websockets">
                        <a>WebSockets</a>
                    </Link>
                </li>
                <li
                    className={generateClassName("/custom-api")}
                >
                    <Link href="/custom-api">
                        <a>Custom API</a>
                    </Link>
                </li>
            </ul>
        </header>  
    )
}

export default Header;