from django.contrib import admin
from django.utils.html import format_html

from core.models import HostedFile

# Register your models here.

@admin.register(HostedFile)
class HostedFileAdmin(admin.ModelAdmin):
    list_display = ["node_id", "name", "preview", "created_at"]

    @admin.display(description="미리보기")
    def preview(self, obj):
        return format_html(f"<img src='{obj.attachment.url}'/ alt='{obj.name}'>")
