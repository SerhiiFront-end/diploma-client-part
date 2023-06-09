import Link from "next/link"
import { useRouter } from "next/router"
import { FC } from "react"
import HeaderLinks from "./HeaderLinks.json"
import styles from "./header.module.scss"
const Header: FC = () => {
	const { pathname } = useRouter()
	return (
		<header className={styles.headerDiv}>
			<nav className={styles.navbar}>
				<ul className={styles.list}>
					{HeaderLinks.map((el, i) => {
						return (
							<Link
								href={el.ref}
								className={
									pathname === el.ref
										? styles.activeLink
										: styles.linkItem
								}
								key={i}
							>
								<li className={styles.listItem}>{el.title}</li>
							</Link>
						)
					})}
				</ul>
			</nav>
		</header>
	)
}
export default Header
