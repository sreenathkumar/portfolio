import { smoothScroll, disableScroll, enableScroll, } from "../../utils/smoothScroll";
export default function MobileMenu({ open }: { open: boolean }) {
  const menus: string[] = ['About', 'Contact', 'Projects', 'Featured',];
  const scrollContainer: HTMLElement | null = document.getElementById('root');


  // Add event listener to navigation links or any element that triggers scrolling
  const handleClick = (e: React.MouseEvent, target: string) => {
    e.preventDefault();// diabling default scroll behavior

    const scrolledAmount = scrollContainer?.scrollTop;
    const targetElement: HTMLElement | null = document.getElementById(target);
    const targetPosition = targetElement && targetElement.getBoundingClientRect().top + window.scrollY;
    let goToTarget = 0;

    if (targetPosition !== null && scrolledAmount !== undefined) {
      goToTarget = targetPosition + scrolledAmount - 152;
    }

    disableScroll();
    smoothScroll(goToTarget);
    enableScroll()
  }


  return (
    <ul className={`${window.screen.width < 640 && open ? 'translate-x-0' : 'translate-x-full'} px-6 text absolute md:relative lg:relative md:flex md:translate-x-0 md:top-0 md:gap-6 md:px-0 `}>
      {menus.map((menu, index) => (<li key={`menu-${index}`} onClick={(e) => handleClick(e, menu.toLocaleLowerCase())}><button className="text-base md:font-medium py-2 block" >{menu}</button></li>))}
    </ul>
  )
}
