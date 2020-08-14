from rest_framework import serializers
from .models import MusicItem


class MusicSerializer(serializers.ModelSerializer):
    class Meta:
        model = MusicItem
        fields = "__all__"

