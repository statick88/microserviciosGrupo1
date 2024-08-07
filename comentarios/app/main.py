from fastapi import FastAPI
from app.routes.comments import comments
from app.docs import tags_metadata

app = FastAPI(
  title="Microservicio - FastAPI & Mongo - Comentarios",
  description="Microservicio de comentarios",
  version="0.0.1",
  openapi_tags=tags_metadata
)

app.include_router(comments)

