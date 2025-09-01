# framework-core/decorators/expose.py

from flask import jsonify
from functools import wraps

def expose(app, route: str, methods=["GET", "POST", "PUT", "DELETE", "PATCH"]):
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            result = func(*args, **kwargs)
            return jsonify({"message": result})
        
        app.route(route, methods=methods)(wrapper)
        return wrapper
    return decorator
