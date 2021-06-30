import React, { useState } from 'react';
import {
    Navbar,
    Nav,
    NavItem,
    NavLink,
    DropdownItem,
    DropdownMenu,
    ButtonDropdown,
    DropdownToggle
} from "reactstrap";
import { Link } from 'react-router-dom'

export default function Navi() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(!dropdownOpen);
    return (
        <div>
            <Navbar color="light" light expand="md">
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink>
                            <Link to="/city" className="btn btn-warning">Şehir</Link>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>
                            <Link to="/country" className="btn btn-warning">İlçe</Link>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>
                            <Link to="/campus" className="btn btn-warning">Kampüs</Link>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>
                            <Link to="/complex" className="btn btn-warning">Site</Link>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>
                            <Link to="/block" className="btn btn-warning">Blok</Link>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>
                            <Link to="/building" className="btn btn-warning">Bina</Link>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>
                            <Link to="/floor" className="btn btn-warning">Kat</Link>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>
                            <Link to="/room" className="btn btn-warning">Oda</Link>
                        </NavLink>
                    </NavItem>
                    <NavItem >
                        <NavLink>
                            <Link to="/" className="btn btn-warning">Tüm Liste</Link>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <ButtonDropdown nav isOpen={dropdownOpen} toggle={toggle}>
                            <DropdownToggle nav caret className="nav-link " >
                                <Link className="btn btn-info" >Veri Ekle</Link>
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem ><Link to="/cityAdd" style={{ textDecoration: 'none'}} >Şehir</Link></DropdownItem>
                                <DropdownItem ><Link to="/countryAdd" style={{ textDecoration: 'none' }}>İlçe</Link></DropdownItem>
                                <DropdownItem ><Link to="/campusAdd" style={{ textDecoration: 'none' }}>Kampüs</Link></DropdownItem>
                                <DropdownItem ><Link to="/complexAdd" style={{ textDecoration: 'none' }}>Site</Link></DropdownItem>
                                <DropdownItem ><Link to="/blockAdd" style={{ textDecoration: 'none' }}>Blok</Link></DropdownItem>
                                <DropdownItem ><Link to="/buildingAdd" style={{ textDecoration: 'none' }}>Bina</Link></DropdownItem>
                                <DropdownItem ><Link to="/floorAdd" style={{ textDecoration: 'none' }}>Kat</Link></DropdownItem>
                                <DropdownItem ><Link to="/roomAdd" style={{ textDecoration: 'none' }}>Oda</Link></DropdownItem>
                            </DropdownMenu>
                        </ButtonDropdown>
                    </NavItem>
                </Nav>
            </Navbar>
        </div >

    )
}
