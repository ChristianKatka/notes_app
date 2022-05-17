from flask import Flask, jsonify, request
import boto3
import os
import uuid

# ACCESS_KEY = os.getenv('aws_access_key_id')
# SECRET_KEY = os.getenv('aws_secret_access_key')
# session = boto3.Session(
#     aws_access_key_id=ACCESS_KEY,
#     aws_secret_access_key=SECRET_KEY,
# )
# doc_client = session.client("dynamodb")


# def get_posts():
#     res = doc_client.scan(TableName="clap-app-posts")
#     items = res['Items']
#     return jsonify(items)


def get_notes():
    note = {'call': 'get notes'}
    return note

def create_note():
    body = request.json
    id = str(uuid.uuid4())
    note = {**body, 'id': id, 'call': 'create note'}
    return note


def update_note(id):
    return {'id': id, 'call': 'update note'}


def delete_note(id):
    return {'id': id, 'call': 'delete note'}
