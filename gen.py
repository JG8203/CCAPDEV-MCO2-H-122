import os
import json
from datetime import datetime
from bson.objectid import ObjectId
from faker import Faker
from pymongo import MongoClient
from tqdm import tqdm

# Initialize Faker
fake = Faker()

# Connect to MongoDB
DATABASE_URL = "mongodb+srv://dlsupusa:C0UE3brjQ0pcOrtz@cluster0.esvyfhl.mongodb.net/dlsu3ps-db"
client = MongoClient(DATABASE_URL)
db = client.get_default_database()  # Adjust this to your actual database name

# Collection names as per your schema
Topic = db.Topic
Subtopic = db.Subtopic
Post = db.Post
Comment = db.Comment

# Users predefined (assuming already exists in the database)
users = [
    ObjectId("65ed5a1e3a22714eba8adee4"),
    ObjectId("65ed5af33a22714eba8adee6")
]

# Generate and insert Topics
topics = [{"_id": ObjectId(), "name": fake.word()} for _ in range(2)]
Topic.insert_many(topics)

# Generate and insert Subtopics
subtopics = []
for topic in topics:
    for _ in range(10):  # 20 subtopics divided among 2 topics
        subtopics.append({
            "_id": ObjectId(),
            "desc": fake.text(),
            "name": fake.word(),
            "topicId": topic["_id"]
        })
Subtopic.insert_many(subtopics)

# Generate and insert Posts and Comments
for _ in tqdm(range(200), desc="Generating and inserting posts"):
    authorId = fake.random.choice(users)
    subtopic = fake.random.choice(subtopics)
    post = {
        "_id": ObjectId(),
        "authorId": str(authorId),
        "content": fake.text(),
        "date": fake.date_time_this_year(),
        "downvotes": [],
        "subtopicId": subtopic["_id"],
        "title": fake.sentence(),
        "upvotes": [],
    }
    post_id = Post.insert_one(post).inserted_id
    comments = [{
        "_id": ObjectId(),
        "authorId": str(authorId),
        "content": fake.text(),
        "date": fake.date_time_this_year(),
        "postId": post_id
    } for _ in range(10)]  # 10 comments per post
    Comment.insert_many(comments)

print("Data generation and insertion complete.")
