from django.conf import settings
from django.conf.urls.static import static
from django.http.response import HttpResponse
from django.urls import path
from core.views import GalleryView, UploadView, SigninView, api

def healthcheck(request):
    return HttpResponse(status=200)

urlpatterns = [
    path('up', healthcheck),
    path('api/', api.urls),
    path("upload", UploadView.as_view()),
    path("gallery", GalleryView.as_view()),
    path("signin", SigninView.as_view()),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
