from django.db import models

class MusicItem(models.Model):
    name= models.CharField(max_length=50)
    file_path=models.FileField(upload_to='static/')
