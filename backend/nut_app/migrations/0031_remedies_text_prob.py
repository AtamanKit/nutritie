# Generated by Django 4.0.1 on 2022-02-06 11:58

import ckeditor.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('nut_app', '0030_remove_remedies_description'),
    ]

    operations = [
        migrations.AddField(
            model_name='remedies',
            name='text_prob',
            field=ckeditor.fields.RichTextField(null=True),
        ),
    ]