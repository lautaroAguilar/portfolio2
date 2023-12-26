import React from 'react'
import {Navbar, NavbarContent, NavbarItem, Link, } from "@nextui-org/react";
export default function Navigation() {
  return (
    <Navbar className='flex flex-col h-auto w-20 bg-slate-800'>
        <NavbarContent>
            <NavbarItem>
                <Link>
                    Sobre mí
                </Link>
            </NavbarItem>
        </NavbarContent>
        <NavbarContent>
            <NavbarItem>
                <Link>
                    Proyectos
                </Link>
            </NavbarItem>
        </NavbarContent>
        <NavbarContent>
            <NavbarItem>
                <Link>
                    Contacto
                </Link>
            </NavbarItem>
        </NavbarContent>
    </Navbar>
  )
}
