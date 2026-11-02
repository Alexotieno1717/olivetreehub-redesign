import { ChevronDownIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Links } from '../../constants';
import useScrollPosition from '../../hooks/useScrollPosition';
import { Nav, StyledLink, StyledList, StyledListLink, StyledListLinkSecondary, Ul } from '../ui/ComponentsStyled';

interface HeaderProps {
  colors?: {
    bg: string;
    buttonColor: string;
    dividerColor: string;
  };
}

const defaultValues = {
  bg: '#0B301A',
  buttonColor: '#62B84E',
  dividerColor: '#00793F',
};

const Header = ({ colors = defaultValues }: HeaderProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const scrollPosition = useScrollPosition();

  const toggleCollapse = () => setCollapsed(!collapsed);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && collapsed) {
        setCollapsed(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [collapsed]);

  // Handle dropdown hover with delay
  const handleDropdownEnter = (id: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setDropdownOpen(id);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(null);
    }, 150);
  };

  const handleDropdownClick = (id: string) => {
    setDropdownOpen(dropdownOpen === id ? null : id);
  };

  return (
    <>
      <Nav
        $collapsed={collapsed}
        $scrollPosition={scrollPosition}
        $colors={colors}
        className="transition ease-in-out delay-150 fixed w-full z-20 top-0 left-0"
      >
        <div className="lg:max-w-4xl xl:max-w-[1031px] flex flex-wrap items-center justify-between mx-auto px-4 lg:px-0 py-4">
          <Link href="/" className="flex items-center">
            <Image
              src={'/artwork/olivetreelogo-light.svg'}
              alt="Olive Tree Logo Light"
              width={176.21}
              height={41.97}
              className="mr-3"
            />
          </Link>
          <div className="flex lg:order-2">
            <Link
              href={'https://app.bongasms.co.ke/site/login'}
              className="text-white text-sm font-semibold rounded-lg px-4 py-3 text-center mr-3 md:mr-0 lg:mr-3 hidden xl:block"
              aria-current="page"
              target="blank"
            >
              {'Log in'}
            </Link>
            <StyledLink
              $colors={colors}
              href={'https://app.bongasms.co.ke/site/register'}
              className="text-white text-sm font-semibold focus:ring-4 focus:outline-none rounded-lg px-6 py-3 text-center mr-3 lg:mr-0 hidden lg:block"
              target="blank"
            >
              Create An Account
            </StyledLink>
            <button
              onClick={toggleCollapse}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg lg:hidden hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 transition-colors duration-200"
              aria-controls="navbar-sticky"
              aria-expanded={collapsed}
              aria-label={collapsed ? 'Close main menu' : 'Open main menu'}
            >
              <span className="sr-only">{collapsed ? 'Close main menu' : 'Open main menu'}</span>
              <div className="w-5 h-5 relative flex flex-col justify-center items-center">
                <span
                  className={`block absolute h-0.5 w-5 bg-white rounded transition-all duration-300 ${
                    collapsed ? 'rotate-45 translate-y-0' : '-translate-y-1.5'
                  }`}
                />
                <span
                  className={`block absolute h-0.5 w-5 bg-white rounded transition-all duration-300 ${
                    collapsed ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                  }`}
                />
                <span
                  className={`block absolute h-0.5 w-5 bg-white rounded transition-all duration-300 ${
                    collapsed ? '-rotate-45 translate-y-0' : 'translate-y-1.5'
                  }`}
                />
              </div>
            </button>
          </div>
          <div
            ref={mobileMenuRef}
            className={`lg:flex lg:w-auto lg:order-1 mobile-menu ${collapsed ? 'mobile-menu-open' : 'mobile-menu-closed'}`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col lg:items-center p-4 lg:p-0 mt-4 font-medium rounded lg:flex-row lg:space-x-6 xl:space-x-8 lg:mt-0 lg:border-0 lg:mobile-menu-none">
              {Links.map((item) =>
                item.hasDropDown ? (
                  <div
                    key={item.id}
                    className="relative group"
                    onMouseEnter={() => handleDropdownEnter(item.id)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <StyledList
                      $colors={colors}
                      className="menu-hover cursor-pointer flex items-center justify-between w-full py-2 pl-3 pr-4 text-white rounded hover:bg-white/10 md:hover:bg-transparent md:bg-transparent md:border-0 md:p-0 md:w-auto transition-colors duration-200"
                      onClick={() => handleDropdownClick(item.id)}
                    >
                      <Link href={item.href} className="inline-flex items-center text-sm">
                        {item.label}{' '}
                        <ChevronDownIcon
                          className={`w-3.5 h-3.5 ml-2.5 transition-transform duration-200 ${
                            dropdownOpen === item.id ? 'rotate-180' : ''
                          }`}
                        />
                      </Link>
                    </StyledList>
                    <Ul
                      $colors={colors}
                      className={`dropdown-panel absolute z-10 font-normal rounded-lg shadow-lg w-44 text-sm text-white overflow-hidden ${
                        dropdownOpen === item.id ? 'dropdown-open' : 'dropdown-closed'
                      }`}
                      aria-labelledby="dropdownLargeButton"
                      style={{ background: colors.bg }}
                    >
                      {item.dropDownLinks?.map((link) => (
                        <li key={link.id} className="first:rounded-t-lg last:rounded-b-lg">
                          <StyledListLink
                            $colors={colors}
                            href={link.href}
                            className="block px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#62B84E] transition-colors duration-200"
                          >
                            {link.label}
                          </StyledListLink>
                        </li>
                      ))}
                    </Ul>
                  </div>
                ) : (
                  <li key={item.id}>
                    <StyledListLinkSecondary
                      $colors={colors}
                      href={item.href}
                      className="block py-2 pl-3 pr-4 text-sm font-semibold text-white rounded lg:bg-transparent lg:p-0 mb-3 lg:mb-0"
                      aria-current="page"
                    >
                      {item.label}
                    </StyledListLinkSecondary>
                  </li>
                ),
              )}
              <li className="lg:hidden">
                <Link
                  href={'https://app.bongasms.co.ke/site/login'}
                  className="block py-3 px-4 text-sm font-semibold text-white rounded-lg hover:bg-white/10 transition-colors duration-200 mb-2"
                  aria-current="page"
                  target="blank"
                >
                  Log in
                </Link>
              </li>
              <li className="lg:hidden">
                <StyledLink
                  $colors={colors}
                  href={'https://app.bongasms.co.ke/site/register'}
                  className="block py-3 px-4 text-sm font-semibold text-white rounded-lg text-center"
                  aria-current="page"
                  target="blank"
                >
                  Create An Account
                </StyledLink>
              </li>
              <li className="hidden lg:block xl:hidden">
                <Link
                  href={'https://app.bongasms.co.ke/site/login'}
                  className="py-2 pl-3 pr-4 text-sm font-semibold text-white rounded lg:bg-transparent lg:p-0"
                  aria-current="page"
                  target="blank"
                >
                  Log in
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Nav>
    </>
  );
};

export default Header;
