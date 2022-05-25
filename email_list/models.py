from django.db import models


class EmailList(models.Model):
    class Meta:
        verbose_name_plural = "Mailing List"
    address = models.EmailField(unique=True)
    time = models.DateTimeField(auto_now_add=True, auto_created=True)

    def __str__(self):
        return self.address