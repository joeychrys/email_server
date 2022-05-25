from django.contrib import admin
from .models import EmailList

# Register your models here.
@admin.register(EmailList)
class CustomAdmin(admin.ModelAdmin):
    list_display = ("address", "time")
    list_filter = ["time"]

