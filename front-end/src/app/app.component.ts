// app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  template: `
    <div class="bg-gray-100 min-h-screen">
      <nav class="bg-blue-600 text-white shadow-lg">
        <div class="container mx-auto px-4 py-3">
          <div class="flex justify-between items-center">
            <h1 class="text-2xl font-bold">Sistema de Gestión de Estudiantes</h1>
            <div class="space-x-4">
              <a routerLink="/students"
                 class="inline-block px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded-lg transition-colors">
                Inicio
              </a>
              <a routerLink="/students/new"
                 class="inline-block px-4 py-2 bg-green-500 hover:bg-green-700 rounded-lg transition-colors">
                Crear Alumno
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main class="container mx-auto px-4 py-8">
        <div class="bg-white rounded-lg shadow-md p-6">
          <router-outlet></router-outlet>
        </div>
      </main>

      <footer class="bg-gray-200 mt-8">
        <div class="container mx-auto px-4 py-4 text-center text-gray-600">
          © 2025 Sistema de Gestión de Estudiantes
        </div>
      </footer>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }
  `]
})
export class AppComponent {
  title = 'student-management';
}
