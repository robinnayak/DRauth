from django.urls import path, include
from .views import index, TodoList, TodoDetail
from rest_framework.routers import DefaultRouter

# router = DefaultRouter()
# router.register(r'/user', UserView, basename='user')
# urlpatterns = router.urls


urlpatterns = [
    path('',index),
    path('list/',TodoList.as_view()),
    path('list/detail/<int:pk>/',TodoDetail.as_view()),
    # path('user/',UserView),

]
