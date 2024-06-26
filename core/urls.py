from django.urls import path
from core.views import SampleView, SigninView, api

urlpatterns = [
    path('api/', api.urls),
    path("sample", SampleView.as_view()),
    path("signin", SigninView.as_view()),
]
