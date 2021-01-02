from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/contacts/', include('contacts.urls')),
    path('api/leads/', include('leads.urls')),
    path('api/projects', include('projects.urls')),
    path('api/clients', include('clients.urls')),
    path('api/events', include('events.urls')),
    path('api/notes', include('notes.urls')),
    path('api/tasks', include('tasks.urls')),
    path('', include('frontend.urls')),
    path('', include('accounts.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) 
