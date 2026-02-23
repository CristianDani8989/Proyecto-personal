import { CommonModule } from '@angular/common'; 
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  skills = ['HTML5', 'CSS3', 'JavaScript', 'Angular', 'React', 'Ionic', 'Python'];

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
      descripcion: 'Aquí puedes describir cómo funciona tu API de notas. Por ejemplo: "Desarrollo de una API REST para la gestión académica, permitiendo el registro y consulta de calificaciones en tiempo real".',
      link: 'https://github.com/CristianDani8989/SISTEMA-DE-GESTION-DE-NOTAS-API',
      color: 'blue'
    },
    {
      nombre: 'Sistema de Gestión de Productos y Usuarios',
      lenguaje: 'TypeScript / JavaScript',
      descripcion: 'Escribe aquí sobre la lógica de usuarios. Por ejemplo: "Plataforma avanzada con autenticación de usuarios y CRUD completo para el control de inventarios de productos".',
      link: 'https://github.com/CristianDani8989/Sistema-de-Gesti-n-de-Productos-y-Usuarios---Versi-n-Avanzada',
      color: 'cyan'
    },
    {
      nombre: 'proyecto-cocacola',
      lenguaje: 'HTML / CSS',
      descripcion: 'Describe este proyecto personal. Por ejemplo: "Proyecto de práctica de maquetación web enfocado en diseño responsivo y replicación de interfaces corporativas".',
      link: 'https://github.com/CristianDani8989/proyecto-cocacola',
      color: 'blue'
    },
    {
      nombre: 'SEMINARIO2026_MÚSICA1',
      lenguaje: 'TypeScript / Angular-ionic',
      descripcion: 'Cuéntales de qué trata este seminario. Por ejemplo: "Aplicación desarrollada durante el seminario de tecnología 2026 para la gestión y reproducción de listas musicales".',
      link: 'https://github.com/CristianDani8989/SEMINARIO2026_MÚSICA1',
      color: 'cyan'
    }
  ];

}