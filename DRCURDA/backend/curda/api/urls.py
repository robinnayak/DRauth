from django.urls import path,include
from rest_framework.routers import DefaultRouter 
from .views import ArticleList,ArticleDetail

urlpatterns = [
    path('',ArticleList.as_view(), name="articlelist"),
    path('<int:pk>/',ArticleDetail.as_view(), name="articledetail"),
   
]
