# Maktab 52 - Django
## Django Translation



In order to make a Django project translatable, you have to add a minimal number of hooks to your Python code and templates. These hooks are called translation strings. They tell Django: “This text should be translated into the end user’s language, if a translation for this text is available in that language.” It’s your responsibility to mark translatable strings; the system can only translate strings it knows about.


### Internationalization _(I18N)_ & Localization _(L10N)_
In computing, internationalization and localization (American) or internationalisation and localisation (BrE), often abbreviated i18n and L10n,[1] are means of adapting computer software to different languages, regional peculiarities and technical requirements of a target locale.[2] Internationalization is the process of designing a software application so that it can be adapted to various languages and regions without engineering changes. Localization is the process of adapting internationalized software for a specific region or language by translating text and adding locale-specific components. Localization (which is potentially performed multiple times, for different locales) uses the infrastructure or flexibility provided by internationalization (which is ideally performed only once before localization, or as an integral part of ongoing development).[3]  
[Wikipedia Full article](https://en.wikipedia.org/wiki/Internationalization_and_localization)



### 1. Getting started
Example
```python
from django.http import HttpResponse
from django.utils.translation import gettext as _

def my_view(request):
    output = _("Akbar is here")
    return HttpResponse(output)
```
(__* Note:__ We usually import the `gettext` function as `_()` to save typing.)  

#### Setting.py: 
Enabling django i18n and l10n:
```python
...

LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'

USE_I18N = True
USE_L10N = True
USE_TZ = True

...
```

Changing default language:
```python
...
LANGUAGE_CODE = 'fa'
...
```

In the next step you'll see how to create message files and compile(compute) them.

### 2. Making messages
Runs over the entire source tree of the current directory and pulls out all strings marked for translation.
It creates (or updates) a message file in the conf/locale (in the Django tree) or locale (for project and application) directory. After making changes to the messages files you need to compile them with compilemessages for use with the builtin gettext support.

First, you should set the `LOCALE_PATHS` variable into the **setting.py**

Then you can make message files with the locales you want by the command below:  
`python manage.py makemessages -l fa`  
or  
`python manage.py makemessages --locale fa`  
(Use `-h` argument to see more options)


Now you can see the generated subdirectories and files into the `LOCAL_PATHS` directory.  

In this case:  
'locale/fa/LC_MESSAGES/django.po'
```
# locale/fa/LC_MESSAGES/django.po

...

#: somewhere/app/
msgid "Akbar is here"
msgstr ""
```
And you can fill the translations:
```
#: somewhere/app/
msgid "Akbar is here"
msgstr "اکبر اینجاست"
```


Read more at: [Django makemesaages](https://docs.djangoproject.com/en/3.2/ref/django-admin/#django-admin-makemessages)

### 3. Compiling messages
When you have finished translating, you have to compile everything by running   
`python maange.py compilemessages`  
to compile translations all locales, or:  
`python maange.py compilemessages -l fa`
to compile translations of specific locale.

Now you can see `django.po` (compiled) file here:
'local/fa/LC_MESSAGES/django.po'



### Usage:
After completing steps above, django will automatically translate all strings inside `_()` or `gettext()` functions to the target local.

#### into .py files:
```python
from django.utils.translation import gettext as _

my_text = _('How are you?')
```

#### into template:
- First you should load the `i18n` DTL library. 
```html
{% load i18n %}
```

- Use `trans` or `translate` tag, to add text into the template:
```html
{% load i18n %}

{% translate 'Akbar is here' %}
```

- Use `language` tag, to enabling the given language just for this block.
```html
{% load i18n %}

{% language "en" %}
    {% translate 'Akbar is here' %}
{% endlanguage %}
```

#### i18n url pattern
You can import and use i18n patterns to use url prefix to change your website language:
```python
...
from django.conf.urls.i18n import i18n_patterns


urlpatterns = i18n_patterns(
    path('admin/', admin.site.urls),
    ...,
    prefix_default_language=True
)
```




References:
- Django translation: https://docs.djangoproject.com/en/3.2/topics/i18n/translation/
- A Quick Guide to Django i18n: https://phrase.com/blog/posts/quick-guide-django-i18n/

