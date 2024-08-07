from typing import Optional
from pydantic import BaseModel

class Comment(BaseModel):
  id: Optional[int]
  content: str
  created_at: str
  updated_at: str
  