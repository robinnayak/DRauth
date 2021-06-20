from .models import Todolist
from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.renderers import TemplateHTMLRenderer

class TodolistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todolist
        fields = ['id', 'list']


# class RegisterSerializer(serializers.ModelSerializer):
#     renderer_classes = [TemplateHTMLRenderer]
    
#     password1 = serializers.CharField(
#         write_only=True,
#         style={'input_type':'password','placeholder':'password'}
#         )

#     class Meta:
#         model = User
#         fields = ('username','email','password','password1')
#         # fields = '__all__'
#         extra_kwargs = {
#             'password':{'write_only':True}
#         }

#     # def create(self, validated_data):
#     #     print("create function called=====================================================")
#     #     print(validated_data)
#     #     user = User.objects.create_user(validated_data['username'],validated_data['email'],validated_data['password'])
#     #     if password!=password1:
#     #         raise serializers.ValidationError({'password':'Password not match'})
#     #     return user
