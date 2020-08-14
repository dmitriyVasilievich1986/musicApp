from rest_framework import viewsets, permissions
from .serializer import MusicSerializer
from .models import MusicItem


class MusicViewSet(viewsets.ModelViewSet):
    queryset = MusicItem.objects.all()
    serializer_class = MusicSerializer
    permission_classes = [permissions.AllowAny]

