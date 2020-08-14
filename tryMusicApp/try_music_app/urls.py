from django.urls import path, include

urlpatterns = [
    path("", include("frontend.urls")),
    path("", include("music_folder.urls")),
]
