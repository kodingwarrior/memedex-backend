from django.urls import path
from core.views import GalleryView, UploadView, SigninView, api

urlpatterns = [
    path('api/', api.urls),
    path("upload", UploadView.as_view()),
    path("gallery", GalleryView.as_view()),
    path("signin", SigninView.as_view()),
]
