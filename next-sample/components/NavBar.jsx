import NavItem from "./NavItem";

const NavBar = ({navItems, className, currActive, setActive}) => {
    // take in list of navItems, generate navItem components, and then place them in bar
    return (
            <div className={className}>
            {
                !!navItems && navItems.map((item)=>{
                    return <NavItem key={item.id} text={item.text} href={item.href} active={(item.text===currActive)} setActive={setActive}/>
                })
            }
            </div>
    )
}

export default NavBar;