
from django.contrib import admin
from django.urls import path,include
from rest_auth.views import PasswordResetConfirmView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include('api.urls')),
    path('rest-auth/',include('rest_auth.urls')),
    path('rest-auth/register/',include('rest_auth.registration.urls')),
    # path('auth/', include('django.contrib.auth.urls')),
     path(
        'rest-auth/password/reset/confirm/<slug:uidb64>/<slug:token>/',
        PasswordResetConfirmView.as_view(), name='password_reset_confirm'
    ),

]
