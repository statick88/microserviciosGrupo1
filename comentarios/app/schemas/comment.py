def commentEntity(item) -> dict:
    return {
        "id": str(item["_id"]),	
        "content": item["content"],
        "created_at": item["created_at"],
        "updated_at": item["updated_at"]
    }

def commentsEntity(items) -> list:
    return [commentEntity(item) for item in items]