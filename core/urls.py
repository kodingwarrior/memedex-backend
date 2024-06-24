from django.urls import path
from core.views import SampleView, SigninView

urlpatterns = [
    path("sample", SampleView.as_view()),
    path("signin", SigninView.as_view()),
]
