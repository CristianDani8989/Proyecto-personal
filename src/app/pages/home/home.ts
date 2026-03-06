import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements AfterViewInit, OnDestroy {
  private observer!: IntersectionObserver;

  skills = ['HTML5', 'CSS3', 'JavaScript', 'Angular', 'React', 'Ionic', 'Python'];

  softSkills = [
    'Resolución de problemas complejos',
    'Comunicación Asertiva',
    'Trabajo en Equipo',
    'Autogestión y Aprendizaje Autónomo',
    'Análisis Crítico'
  ];

  certificados = [
    {
      titulo: 'Analítica de Datos',
      descripcion: 'Fundamentos de análisis de información, limpieza de datos y generación de reportes.',
      color: 'blue'
    },
    {
      titulo: 'Introducción a la Ciencia de Datos',
      descripcion: 'Manejo de datasets, análisis exploratorio y nociones de modelos predictivos.',
      color: 'cyan'
    },
    {
      titulo: 'Variables y Estructuras de Control en Python',
      descripcion: 'Desarrollo de scripts y automatización de procesos usando Python.',
      color: 'blue'
    },
    {
      titulo: 'Computer Hardware Basics',
      descripcion: 'Conocimientos en componentes de hardware y soporte tecnológico.',
      color: 'cyan'
    },
    {
      titulo: 'Operating Systems Basics',
      descripcion: 'Fundamentos de sistemas operativos y su interacción con el hardware.',
      color: 'blue'
    },
    {
      titulo: 'Congreso de Ingeniería de Sistemas',
      descripcion: 'IA, Ciberseguridad y protección de la información.',
      color: 'cyan'
    }
  ];

  proyectos = [
    {
      nombre: 'SISTEMA-DE-GESTION-DE-NOTAS-API',
      lenguaje: 'HTML / Backend',
      descripcion: 'Api para la gestión de comentarios de usuarios, conectada a SQLite con funcionalidad de edición y eliminación.',
      link: 'https://github.com/CristianDani8989/SISTEMA-DE-GESTION-DE-NOTAS-API',
      color: 'blue'
    },
    {
      nombre: 'Sistema de Gestión de Productos y Usuarios',
      lenguaje: 'TypeScript / JavaScript',
      descripcion: 'Sistema de gestión de productos y usuarios con seguimiento de ventas y administración de inventario y clientes.',
      link: 'https://github.com/CristianDani8989/Sistema-de-Gesti-n-de-Productos-y-Usuarios---Versi-n-Avanzada',
      color: 'cyan'
    },
    {
      nombre: 'proyecto-cocacola',
      lenguaje: 'HTML / CSS',
      descripcion: 'Página de la empresa Coca-Cola con información, productos, historia, galería de imágenes y formulario de contacto.',
      link: 'https://github.com/CristianDani8989/proyecto-cocacola',
      color: 'blue'
    },
    {
      nombre: 'SEMINARIO2026_MÚSICA1',
      lenguaje: 'TypeScript / Angular-Ionic',
      descripcion: 'Proyecto universitario estilo Spotify con lista de canciones, portadas, reproductor de música y barra de búsqueda.',
      link: 'https://github.com/CristianDani8989/SEMINARIO2026_MÚSICA1',
      color: 'cyan'
    }
  ];

  private skillEmojis: Record<string, string> = {
    'HTML5': '🌐',
    'CSS3': '🎨',
    'JavaScript': '⚡',
    'Angular': '🅰️',
    'React': '⚛️',
    'Ionic': '📱',
    'Python': '🐍'
  };

  getSkillEmoji(skill: string): string {
    return this.skillEmojis[skill] || '💻';
  }

  ngAfterViewInit(): void {
    this.setupScrollReveal();
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setupScrollReveal(): void {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          this.observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => this.observer.observe(el));
  }
}