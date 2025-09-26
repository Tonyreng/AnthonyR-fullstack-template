# FinZen Fullstack Template

Un template completo para aplicaciones fullstack con React (TypeScript) + Flask (Python) + PostgreSQL.

## 🏗️ Estructura del Proyecto

```
my-fullstack-template/
├── frontend/                 # React + TypeScript + Vite
│   ├── src/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── assets/
│   ├── public/
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   └── Dockerfile
├── backend/                  # Flask + SQLAlchemy + PostgreSQL
│   ├── app.py               # Aplicación Flask principal
│   ├── models.py            # Modelos de base de datos
│   ├── database.py          # Configuración de base de datos
│   ├── admin.py             # Panel de administración
│   ├── routes/              # Rutas de la API
│   │   ├── auth.py
│   │   └── users.py
│   ├── migrations/          # Migraciones de base de datos
│   ├── requirements.txt     # Dependencias Python
│   ├── .env                 # Variables de entorno
│   └── Dockerfile
└── docker-compose.yml       # Orquestación de servicios
```

## 🚀 Inicio Rápido

### Prerequisitos
- Docker y Docker Compose
- Python 3.11+ (para desarrollo local)
- Node.js 20+ y pnpm (para desarrollo local)

### 1. Clonar el repositorio
```bash
git clone https://github.com/Tonyreng/AnthonyR-fullstack-template.git
cd AnthonyR-fullstack-template
```

### 2. Ejecutar con Docker
```bash
# Construir y ejecutar todos los servicios
docker-compose up --build

# En modo detached (segundo plano)
docker-compose up -d
```

### 3. Acceder a las aplicaciones
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000/api/health
- **Admin Panel**: http://localhost:5000/admin/

## 🛠️ Desarrollo Local

### Backend (Flask)
```bash
cd backend

# Crear entorno virtual
python -m venv venv
venv\Scripts\activate  # Windows
# source venv/bin/activate  # Linux/Mac

# Instalar dependencias
pip install -r requirements.txt

# Configurar base de datos
flask db upgrade

# Ejecutar servidor
python app.py
```

### Frontend (React)
```bash
cd frontend

# Instalar dependencias
pnpm install

# Ejecutar en modo desarrollo
pnpm dev
```

## 📊 Base de Datos

### Migraciones
```bash
# Crear nueva migración
flask db migrate -m "descripción del cambio"

# Aplicar migraciones localmente
flask db upgrade

# Aplicar migraciones en Docker
docker-compose exec backend flask db upgrade
```

### Modelos incluidos
- **User**: Modelo básico de usuario con email, password e is_active

## 🔧 Tecnologías Incluidas

### Frontend
- **React 19.1** - Framework UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **Axios** - Cliente HTTP
- **React Router** - Enrutamiento
- **ESLint** - Linting

### Backend
- **Flask 3.1** - Framework web
- **SQLAlchemy 2.0** - ORM
- **Flask-Migrate** - Migraciones de DB
- **Flask-Admin** - Panel de administración
- **Flask-CORS** - Manejo de CORS
- **Flask-JWT-Extended** - Autenticación JWT
- **PostgreSQL** - Base de datos
- **python-dotenv** - Variables de entorno

### DevOps
- **Docker** - Containerización
- **Docker Compose** - Orquestación
- **Nginx** - Servidor web para frontend

## 🌍 Variables de Entorno

### Backend (.env)
```env
# Base de datos (comentado para desarrollo local con SQLite)
# DATABASE_URL=postgresql://user:pass@db:5432/dbname

# JWT Secret
JWT_SECRET_KEY=tu-secret-key-aqui
```

### Docker (docker-compose.yml)
- `DATABASE_URL`: postgresql://postgres:postgres@db:5432/appdb
- `JWT_SECRET_KEY`: super-secret

## 📋 Scripts Útiles

### Docker
```bash
# Ver logs
docker-compose logs [servicio]

# Ejecutar comandos en contenedores
docker-compose exec backend flask db upgrade
docker-compose exec backend python -c "from app import app; print('OK')"

# Limpiar todo
docker-compose down -v
docker system prune -a
```

### Base de Datos
```bash
# Crear usuario de prueba
docker-compose exec backend python -c "
from app import app
from models import db, User
with app.app_context():
    user = User(email='test@example.com', password='password123', is_active=True)
    db.session.add(user)
    db.session.commit()
    print('Usuario creado!')
"
```

## 🔐 Funcionalidades Implementadas

- ✅ **Configuración completa de Docker**
- ✅ **Base de datos PostgreSQL con migraciones**
- ✅ **Panel de administración Flask-Admin**
- ✅ **CORS configurado**
- ✅ **JWT listo para implementar**
- ✅ **Estructura de rutas organizada**
- ✅ **TypeScript configurado**
- ✅ **Build optimizado para producción**

## 📝 Próximos Pasos

1. **Implementar autenticación JWT** en routes/auth.py
2. **Crear APIs CRUD** en routes/users.py
3. **Conectar frontend con backend** usando Axios
4. **Agregar más modelos** según necesidades
5. **Implementar middleware de autorización**
6. **Agregar tests unitarios**

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la licencia MIT.