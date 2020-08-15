from django.db import models


class MusicItem(models.Model):
    name = models.CharField(max_length=50)
    album = models.CharField(max_length=50)
    artist = models.CharField(max_length=50)
    file_path = models.FileField(upload_to="static/")
    cover_path = models.FileField(upload_to="static/", null=True)
