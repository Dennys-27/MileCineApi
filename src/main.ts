import { bootstrapApplication, provideClientHydration } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { TokenInterceptor } from './app/core/interceptors/token.interceptor'; // Asegúrate de que esta ruta sea correcta

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(
      withFetch(), // ✅ para evitar el warning
      withInterceptors([TokenInterceptor]) // ✅ para usar tu interceptor
    ),
    provideRouter(routes),
    provideClientHydration()
  ]
}).catch(err => console.error(err));
