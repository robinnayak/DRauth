from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework import status
from rest_framework import viewsets
from rest_framework.response import Response
from .serializers import TodolistSerializer
from .models import Todolist
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from django.contrib.auth.models import User
from .forms import CreateUserForm
# Create your views here.

def index(request):
    return HttpResponse("index page is there?")

class TodoList(APIView):
    authentication_classes = [SessionAuthentication]
    permission_classes = [IsAuthenticatedOrReadOnly]
    def get(self,request):
        todo = Todolist.objects.all()
        serializer = TodolistSerializer(todo,many=True)
        return Response(serializer.data)

    def post(self,request):
        serializer = TodolistSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)

class TodoDetail(APIView):
    def get_object(self,pk):
        try:
            return Todolist.objects.get(pk=pk)
        except Todolist.DoesNotExist:
            raise status.HTTP_400_BAD_REQUEST
        
    def get(self,request,pk):
        todo =self.get_object(pk)
        serializer = TodolistSerializer(todo)
        return Response(serializer.data)
    
    def put(self,request,pk):
        todo = self.get_object(pk)
        serializer = TodolistSerializer(todo,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)

    def delete(self,request,pk):
        todo = self.get_object(pk)
        todo.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

