🎓 SISTEMA DE GESTIÓN DE ESTUDIANTES - GUÍA COMPLETA

ÍNDICE
=================================
1. Introducción
2. Requisitos Detallados
3. Instalación Paso a Paso
4. Configuración del Entorno
5. Ejecución del Sistema
6. Guía de Uso
7. Solución de Problemas
8. Mantenimiento
9. Notas de Seguridad
10. Recursos Adicionales

1. INTRODUCCIÓN
=================================
¡Bienvenido al Sistema de Gestión de Estudiantes! 
Aplicación web desarrollada con Django (backend) y Angular (frontend). 
Perfecta para organizar registros estudiantiles con eficiencia y estilo. 😎

2. REQUISITOS DETALLADOS
=================================
🖥️ HARDWARE:
- Procesador: 1.6 GHz o superior
- RAM: 4GB mínimo (8GB recomendado)
- Disco: 2GB libres
- Internet: Para descargas (no para memes, pero los apoyamos 🐱)

📦 SOFTWARE BACKEND (DJANGO):
- Python 3.8+ (3.10 para los cool 😎)
- pip 20.0+
- Git 2.0+
- virtualenv/venv

🚀 SOFTWARE FRONTEND (ANGULAR):
- Node.js 16.x+ (18.x recomendado)
- npm 6.x+
- Angular CLI 15.0+
- Navegador moderno (¡NO Internet Explorer! 🚫)

3. INSTALACIÓN PASO A PASO
=================================
⚙️ PREPARACIÓN DEL SISTEMA:

WINDOWS:
1. Instalar Python desde python.org (¡MARCAR "Add to PATH"!)
2. Instalar Node.js desde nodejs.org

macOS:
1. Instalar Homebrew:
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
2. Instalar paquetes:
   brew install python node

LINUX (Ubuntu/Debian):
sudo apt update && sudo apt install python3 python3-pip nodejs npm

4. CONFIGURACIÓN DEL ENTORNO
=================================
💾 BACKEND:
1. Clonar repositorio:
   git clone [URL_REPO]
   cd student-management-system
2. Entorno virtual:
   # Windows
   python -m venv venv
   venv\Scripts\activate
   
   # Mac/Linux
   python3 -m venv venv
   source venv/bin/activate
3. Instalar dependencias:
   pip install -r requirements.txt
   (o manualmente: django==4.2.0 djangorestframework==3.14.0)

🖌️ FRONTEND:
1. Instalar Angular CLI:
   npm install -g @angular/cli
2. Instalar dependencias:
   cd frontend
   npm install

5. EJECUCIÓN DEL SISTEMA
=================================
🚀 INICIAR BACKEND:
1. Activar entorno virtual
2. Ejecutar:
   python manage.py runserver
   → http://127.0.0.1:8000/

🌐 INICIAR FRONTEND:
1. En otra terminal:
   cd frontend
   ng serve
   → http://localhost:4200/

6. GUÍA DE USO
=================================
🔑 ACCESO:
- URL: http://localhost:4200
- Usuario: chris
- Contraseña: 4682oscuridad

📝 REGISTRO DE ESTUDIANTES:
1. Click en "Crear Alumno"
2. Completar campos:
   - Nombre
   - Fecha nacimiento
   - Padres
   - Grado/Sección
   - Fecha ingreso

🔍 CONSULTAS:
1. Ingresar grado en búsqueda
2. Click en "Buscar" o Enter

7. SOLUCIÓN DE PROBLEMAS
=================================
🔧 ERRORES COMUNES:

BACKEND:
- Puerto 8000 ocupado:
  # Windows
  taskkill /PID [NUMERO_PID] /F
  
  # Mac/Linux
  kill -9 [NUMERO_PID]

- Falta módulo Django:
  pip install django

FRONTEND:
- Módulos faltantes:
  rm -rf node_modules package-lock.json
  npm install

- Angular CLI no encontrado:
  npm install -g @angular/cli

8. MANTENIMIENTO
=================================
💾 RESPALDO DE DATOS:
python manage.py dumpdata > backup.json

🔄 ACTUALIZACIONES:
# Backend
pip freeze > requirements.txt

# Frontend
npm update

9. NOTAS DE SEGURIDAD
=================================
🔒 IMPORTANTE:
- Credenciales solo para DESARROLLO
- En producción cambiar:
  - SECRET_KEY en settings.py
  - Credenciales de BD
  - Usuario/contraseña admin

10. RECURSOS ADICIONALES
=================================
📚 DOCUMENTACIÓN:
- Django: https://www.djangoproject.com
- Angular: https://angular.io
- REST Framework: https://www.django-rest-framework.org

✉️ SOPORTE:
- Reportar issues en GitHub
- Consultar documentación técnica