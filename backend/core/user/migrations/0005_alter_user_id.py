# Generated by Django 5.0.1 on 2024-01-12 18:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core_user', '0004_alter_user_implicit_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='id',
            field=models.BigAutoField(editable=False, primary_key=True, serialize=False),
        ),
    ]