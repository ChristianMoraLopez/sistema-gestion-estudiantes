from django.urls import path
from . import views

urlpatterns = [
    path('crear-alumno/', views.create_student, name='create_student'),
    path('consultar-alumno/<int:grade>/', views.get_students_by_grade, name='get_students_by_grade'),
]