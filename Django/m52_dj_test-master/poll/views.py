from django.contrib.auth.models import User
from django.http import Http404
from django.shortcuts import HttpResponse, render, get_object_or_404, \
    get_list_or_404
from django.db.models import ObjectDoesNotExist

# Create your views here.
from django.utils import timezone

from poll.models import Question


def index(request):
    questions = Question.objects \
        .filter(question_text__startswith='Q') \
        .order_by('-pub_datetime', 'question_text')

    return render(request, 'index.html', {'questions': questions})


def detail(request, qid):
    # Detail Question #id
    # try:
    #     q = Question.objects.get(id=qid)
    #     return render(request, 'detail.html', {'question': q})
    # except Question.DoesNotExist as e:
    #     raise Http404("Hello!!!")
    q = get_object_or_404(Question, id=qid)
    return render(request, 'detail.html', {'question': q})





def test_view(request):
    return render(request, 'extended.html', {'question': Question.objects.all()})
