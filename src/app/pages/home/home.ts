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
      descripcion: 'Aqui desarrolle una Api para la gestion de comentarios de usuarios, conectada a una base de datos llamada SQlite en el cual se encarga de guardar los comentarios de los usuarios con la funcionalidad de editarlos y borrarlos.',
      link: 'https://github.com/CristianDani8989/SISTEMA-DE-GESTION-DE-NOTAS-API',
      color: 'blue'
    },
    {
      nombre: 'Sistema de Gestión de Productos y Usuarios',
      lenguaje: 'TypeScript / JavaScript',
      descripcion: ' este proyecto implementa un sistema de gestión de productos y usuarios utilizando TypeScript y JavaScript. Permite a los usuarios administrar su inventario de productos, realizar seguimiento de las ventas y gestionar la información de los clientes.',
      link: 'https://github.com/CristianDani8989/Sistema-de-Gesti-n-de-Productos-y-Usuarios---Versi-n-Avanzada',
      color: 'cyan'
    },
    {
      nombre: 'proyecto-cocacola',
      lenguaje: 'HTML / CSS',
      descripcion: ' este proyecto es una pagina de la empresa cocacola en la cual se muestra informacion de la empresa, sus productos y su historia, ademas de una galeria de imagenes y un formulario de contacto.',
      link: 'https://github.com/CristianDani8989/proyecto-cocacola',
      color: 'blue'
    },
    {
      nombre: 'SEMINARIO2026_MÚSICA1',
      lenguaje: 'TypeScript / Angular-ionic',
      descripcion: 'este proyecto universitario trata de un stilo spotify en el cual se muestra una lista de canciones, con su respectiva portada, titulo y artista, ademas de un reproductor de musica y una barra de busqueda para encontrar canciones.',
      link: 'https://github.com/CristianDani8989/SEMINARIO2026_MÚSICA1',
      color: 'cyan'
    }
  ];

}