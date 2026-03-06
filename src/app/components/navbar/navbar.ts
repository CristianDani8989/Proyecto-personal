import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './navbar.html',
    styleUrl: './navbar.css'
})
export class Navbar {
    isScrolled = false;

    navLinks = [
        { label: 'Inicio', href: '#hero' },
        { label: 'Stack', href: '#stack' },
        { label: 'Experiencia', href: '#experiencia' },
        { label: 'Certificaciones', href: '#certificaciones' },
        { label: 'Proyectos', href: '#proyectos' },
        { label: 'Contacto', href: '#contacto' }
    ];

    @HostListener('window:scroll')
    onScroll(): void {
        this.isScrolled = window.scrollY > 50;
    }

    scrollTo(event: Event, href: string): void {
        event.preventDefault();
        const el = document.querySelector(href);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
}
