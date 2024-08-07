from fastapi import APIRouter
from app.config.db import conn
from app.schemas.comment import commentEntity, commentsEntity
from app.models.comment import Comment
from bson import ObjectId

comments = APIRouter()

@comments.get("/comments", tags=["comments"])
async def find_all_comments():
  return commentsEntity(conn.local.comment.find())

@comments.get("/comments/{comment_id}", tags=["comments"])
async def find_comment_by_id(id: str):
  return commentEntity(conn.local.comment.find_one({"_id": ObjectId(id)}))
  
@comments.post("/comments", tags=["comments"])
async def create_comment(comment: Comment):
  new_comment = dict(comment)
  del new_comment['id']
  id = conn.local.comment.insert_one(new_comment).inserted_id
  comment = conn.local.comment.find_one({"_id": id})
  return commentEntity(comment)

@comments.put("/comments/{comment_id}", tags=["comments"])
async def update_comment(id: str, comment: Comment):
  updated_comment = dict(comment)
  del updated_comment['id']
  conn.local.comment.find_one_and_update({"_id": ObjectId(id)}, {"$set": updated_comment})
  return commentEntity(conn.local.comment.find_one({"_id": ObjectId(id)}))

@comments.delete("/comments/{comment_id}")
async def delete_comment(id: str):
  commentEntity(conn.local.comment.find_one_and_delete({"_id": ObjectId(id)}))
  return {"message": "Comentario con el id {id} a sido eliminado."}


