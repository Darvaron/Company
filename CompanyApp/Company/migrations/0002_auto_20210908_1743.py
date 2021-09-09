# Generated by Django 3.2.7 on 2021-09-08 22:43

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Company', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='company',
            name='NIT',
            field=models.CharField(editable=False, max_length=10, primary_key=True, serialize=False, validators=[django.core.validators.MinLengthValidator(10)]),
        ),
        migrations.AlterField(
            model_name='company',
            name='tel',
            field=models.CharField(max_length=7, validators=[django.core.validators.MinLengthValidator(7)]),
        ),
    ]