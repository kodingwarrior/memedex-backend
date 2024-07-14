from django.shortcuts import render

from django.views.generic import TemplateView
from ninja import NinjaAPI, Swagger, UploadedFile, Form, Schema, File

from core.models import HostedFile, VNode


class SampleView(TemplateView):
    template_name = "example/sample.html"

class SigninView(TemplateView):
    template_name = "example/signin.jinja"

class UploadView(TemplateView):
    template_name = "memedex/upload.jinja"

api = NinjaAPI(docs=Swagger(settings={"persistAuthorization": True}))
class GalleryView(TemplateView):
    template_name = "memedex/gallery.jinja"



@api.post('/attachments')
def upload_attachment(request, file: File[UploadedFile]):
    hosted_file = HostedFile(name=file.name, attachment=file)
    hosted_file.save()
    data = file.read()
    return {'name': hosted_file.name, 'len': len(data)}

@api.get('/attachments', tags=["attachments"], response={200: list[HostedFileSchema]})
def get_attachments(request):
    hosted_files = HostedFile.objects.all()
    return hosted_files

