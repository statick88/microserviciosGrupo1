from sqlalchemy.orm import Session
from . import models, schemas

def get_post(db: Session, post_id: int):
    return db.query(models.Post).filter(models.Post.id == post_id).first()

def create_post(db: Session, post: schemas.PostCreate):
    db_post = models.Post(**post.dict())
    db.add(db_post)
    db.commit()
    db.refresh(db_post)
    return db_post

def update_post(db: Session, post_id: int, post: schemas.PostUpdate):
    db_post = db.query(models.Post).filter(models.Post.id == post_id).first()
    for key, value in post.dict().items():
        setattr(db_post, key, value)
    db.commit()
    db.refresh(db_post)
    return db_post

def delete_post(db: Session, post_id: int):
    db_post = db.query(models.Post).filter(models.Post.id == post_id).first()
    db.delete(db_post)
    db.commit()
    return {"detail": "Post deleted"}
