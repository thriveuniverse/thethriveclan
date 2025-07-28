# product_cms/src/__init__.py
from flask import Flask
from .models import db

def create_app():
    app = Flask(__name__)

    app.config.update(
        SQLALCHEMY_DATABASE_URI="sqlite:///product_cms.db",
        SQLALCHEMY_TRACK_MODIFICATIONS=False,
    )

    db.init_app(app)

    # --- create tables once, at start‑up ---
    with app.app_context():
        db.create_all()

    from .routes.product import bp as product_bp
    app.register_blueprint(product_bp, url_prefix="/products")

    @app.get("/")
    def home():
        return "Hello, world! Product CMS + DB is alive. 🚀"

    return app
