import Link from "next/link";
import layoutStyles from '../styles/layout.module.scss';

const NavItem = ({id, text, href, active, setActive}) => {

    const callback = () => {
        setActive(text)
    }

    return (
        <Link onClick={callback} key={id} className={`${layoutStyles.NavItem} ${!!active ? ` ${layoutStyles.active}` : '' }`} href={!!href ? href : ''}>
            {text}
        </Link>
    )
}

export default NavItem;