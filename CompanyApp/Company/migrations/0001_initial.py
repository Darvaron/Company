# Generated by Django 3.2.7 on 2021-09-08 22:41

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Company',
            fields=[
                ('name', models.CharField(max_length=30)),
                ('address', models.CharField(max_length=50)),
                ('NIT', models.IntegerField(editable=False, max_length=10, primary_key=True, serialize=False, validators=[django.core.validators.MinLengthValidator(10)])),
                ('tel', models.IntegerField(max_length=7, validators=[django.core.validators.MinLengthValidator(7)])),
            ],
        ),
    ]
