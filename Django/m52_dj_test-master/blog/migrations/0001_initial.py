# Generated by Django 3.2.5 on 2021-07-08 10:33

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='BlogPost',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(default='title...', max_length=30, null=True)),
                ('create_timestamp', models.DateTimeField()),
            ],
        ),
    ]
