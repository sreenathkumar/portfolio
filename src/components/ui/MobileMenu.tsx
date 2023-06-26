
export default function MobileMenu({ open }: { open: boolean }) {
  const menus: string[] = ['About', 'Contact', 'Projects', 'Featured',];
  console.log(window.screen.width);

  return (
    <ul className={`${window.screen.width < 640 && open ? 'translate-x-0' : 'translate-x-full'} px-6 text absolute md:relative lg:relative md:flex md:translate-x-0 md:top-0 md:gap-6 md:px-0 `}>
      {menus.map((menu, index) => (<li key={`menu-${index}`}><a className="text-base md:font-medium py-2 block" href={`#${menu.toLocaleLowerCase()}`}>{menu}</a></li>))}
    </ul>
  )
}
