from django.urls import path
from core.views import UploadView, SigninView, api

urlpatterns = [
    path('api/', api.urls),
    path("upload", UploadView.as_view()),
    path("signin", SigninView.as_view()),
]
