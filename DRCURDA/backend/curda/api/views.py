from django.shortcuts import render
from rest_framework.views import APIView 
from rest_framework.response import Response
from rest_framework import status,generics
from rest_framework.authentication import SessionAuthentication, BasicAuthentication,TokenAuthentication 
from rest_framework.permissions import IsAuthenticated 


from .models import Article
from .serializers import ArticleSerializer
from django.http import Http404
# Create your views here.

class ArticleList(APIView):
    authentication_classes = [TokenAuthentication]
    # permission_classes = [IsAuthenticated]
    def get(self,request):
        article = Article.objects.all()
        serializer = ArticleSerializer(article,many=True)
        return Response(serializer.data)

    def post(self,request):
        serializer = ArticleSerializer(data= request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ArticleDetail(APIView):
    authentication_class = [SessionAuthentication]
    permission_class = [IsAuthenticated]
    def get_object(self,pk):
        try:
            return Article.objects.get(pk=pk)
        except Article.DoesNotExist:
            raise Http404
        
    def get(self, request,pk):
        article = self.get_object(pk)
        serializer = ArticleSerializer(article)
        return Response(serializer.data)
    
    def put(self,request,pk):
        article = self.get_object(pk)
        serializer = ArticleSerializer(article,data= request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        article = self.get_object(pk)
        article.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

